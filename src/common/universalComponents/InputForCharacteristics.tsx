import React, {ChangeEvent, FC} from 'react';
import s from "../../components/trains/trainInfo/item/itemCharacteristics/ItemCharacteristics.module.css";
import {fieldType} from "../../components/trains/trainInfo/item/TrainsInfoItem";



interface IInputForCharacteristics {
    valueForCharacteristics: number
    handleFieldChange: (field: fieldType, value: string) => void
    isFieldValid: (field: fieldType, value: string) => boolean
    field: fieldType
}

export const InputForCharacteristics: FC<IInputForCharacteristics> = ({valueForCharacteristics,
                                                                          handleFieldChange, isFieldValid, field}) => {
    return (
        <td>
            <input
                type="number"
                value={valueForCharacteristics}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    handleFieldChange(field, e.currentTarget.value)}
                className={!isFieldValid(field, valueForCharacteristics.toString()) ? s.invalid : ''}
            />
        </td>
    );
};

