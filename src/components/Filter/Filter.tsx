import React, { memo, useCallback, useState } from 'react'

import './Filter.scss'

import { SelectCharacters } from "../index"
import { genders, statuses } from '../../mock'
import { useActions } from '../../hooks/useActions'

interface IFilterProps {
    sortByGender: string
    sortByStatus: string
}

const Filter:React.FC<IFilterProps> = memo(({sortByGender, sortByStatus}) => {
    const { setSortCharactersByGender, setSortCharactersByStatus } = useActions()
    const [genderPlate, setGenderPlate] = useState(false)
    const [statusPlate, setStatusPlate] = useState(false)

    const toggleGenderPlate = () => {
        setGenderPlate(!genderPlate)
    }

    const toggleStatusPlate = () => {
        setStatusPlate(!statusPlate)
    }

    const handleSelectGender = useCallback(type => {
        setSortCharactersByGender(type)
    }, [setSortCharactersByGender])

    const handleSelectStatuses = useCallback(type => {
        setSortCharactersByStatus(type)
    }, [setSortCharactersByStatus])

    return (
        <>
            <div className="filter">
                <SelectCharacters
                    activeItem={sortByGender}
                    label='Gender'
                    items={genders}
                    visible={genderPlate}
                    setVisible={setGenderPlate}
                    onOpenSort={toggleGenderPlate}
                    onClickItemType={handleSelectGender}
                />

                <SelectCharacters
                    activeItem={sortByStatus}
                    label='Status'
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