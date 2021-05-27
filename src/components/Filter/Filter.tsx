import React, {memo, useCallback, useState} from 'react'

import './Filter.scss'

import {SelectUsers} from "../index"
import {genders, statuses} from '../../mock'
import {useActions} from '../../hooks/useActions'

interface IFilterProps {
    sortByGender: string
    sortByStatus: string
}

const Filter:React.FC<IFilterProps> = memo(({sortByGender, sortByStatus}) => {
    const {setSortUsersByGender, setSortUsersByStatus} = useActions()
    const [genderPlate, setGenderPlate] = useState(false)
    const [statusPlate, setStatusPlate] = useState(false)

    const toggleGenderPlate = () => {
        setGenderPlate(!genderPlate)
    }

    const toggleStatusPlate = () => {
        setStatusPlate(!statusPlate)
    }

    const handleSelectGender = useCallback(type => {
        setSortUsersByGender(type)
    }, [setSortUsersByGender])

    const handleSelectStatuses = useCallback(type => {
        setSortUsersByStatus(type)
    }, [setSortUsersByStatus])

    return (
        <>
            <div className="filter">
                <SelectUsers
                    activeItem={sortByGender}
                    label='GENDER'
                    items={genders}
                    visible={genderPlate}
                    setVisible={setGenderPlate}
                    onOpenSort={toggleGenderPlate}
                    onClickItemType={handleSelectGender}
                />

                <SelectUsers
                    activeItem={sortByStatus}
                    label='STATUS'
                    items={statuses}
                    visible={statusPlate}
                    setVisible={setStatusPlate}
                    onOpenSort={toggleStatusPlate}
                    onClickItemType={handleSelectStatuses}
                />
            </div>
        </>
    )
})

export default Filter