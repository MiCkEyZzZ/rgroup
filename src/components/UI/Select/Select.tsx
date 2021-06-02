import React, {memo, useCallback, useEffect, useRef} from 'react'

import './Select.scss'

interface ISelectProps {
    items: {type: string, name: string}[]
    visible: boolean
    setVisible: Function
    onOpenSort: () => void
    activeItem: string
    label: string
    onClickItemType: Function
}

const SelectUser: React.FC<ISelectProps> = memo((props) => {
    const {items, visible, setVisible, onOpenSort, activeItem, label, onClickItemType} = props

    const sortRef = useRef(null)
    // @ts-ignore
    const activeLabel = items.find(obj => obj.type === activeItem).name

    const handleOutsideClick = useCallback(evt => {
        if (!evt.path.includes(sortRef.current)) {
            setVisible(false)
        }
    }, [setVisible])

    const onSelectItem = (index: string) => {
        if (onClickItemType) {
            onClickItemType(index)
        }

        setVisible(false)
    }

    useEffect(() => {
        let body = document.querySelector(`body`) as HTMLElement
        body.addEventListener(`click`, handleOutsideClick)

        return () => body.removeEventListener(`click`, handleOutsideClick)
    }, [handleOutsideClick])

    return (
        <>
            <p className='select-label-title'>{label}:</p>
            <div ref={sortRef} className='select'>
                <div className='select-label'>
                    <div
                        className={visible ? "select-label__text active" : "select-label__text"}
                        onClick={onOpenSort}
                    >
                        {activeLabel}
                        <span className="select-label__text-icon">
                            {visible
                                ? <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" viewBox="0 0 213.333 213.333"><path d="M106.667 53.333L0 160h213.333z"/></svg>
                                : <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" viewBox="0 0 213.333 213.333"><path d="M0 53.333L106.667 160 213.333 53.333z"/></svg>
                            }
                        </span>
                    </div>
                </div>

                {visible && (
                    <div className="select-plate">
                        <ul className='select-plate__list'>
                            {items.map((obj, index) => {
                                return (
                                    <li
                                        key={`${obj.type}_${index}`}
                                        className={activeItem === obj.type ? 'select-plate__list-item active' : 'select-plate__list-item'}
                                        onClick={() => onSelectItem(obj.type)}
                                    >{obj.name}</li>
                                )
                            })}
                        </ul>
                    </div>
                )}
            </div>
        </>
    )
})

export default SelectUser