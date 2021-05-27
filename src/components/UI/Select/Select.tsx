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
        <div ref={sortRef} className='select'>
            <div className='select-label'>
                <p className='select-label-title'>{label}:</p>
                <div
                    className="select-label__text"
                    onClick={onOpenSort}
                >{activeLabel}</div>
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
    )
})

export default SelectUser