import React, {ChangeEvent, FC} from 'react';
import {ResponseDataTrainTypeChildCharacteristics} from "../../../../../api/getDataTrain";
import {fieldType} from "../TrainsInfoItem";
import s from "./ItemCharacteristics.module.css"

interface IItemCharacteristics {
    item: ResponseDataTrainTypeChildCharacteristics
    index: number
    handleInputChange: (index: number, field: fieldType, value: string) => void
}

export const ItemCharacteristics: FC<IItemCharacteristics> = ({item, index, handleInputChange}) => {
    const {engineAmperage, force, speed} = item

    const isFieldValid = (field: fieldType, value: string) => {
        if (field === 'engineAmperage') {
            return !isNaN(Number(value)) && Number(value) > 0;
        }
        if (field === 'force') {
            return !isNaN(Number(value)) && Number(value) > 0 && /\d+\.\d+/.test(value);
        }
        if (field === 'speed') {
            return !isNaN(Number(value)) && Number(value) > 0;
        }
        return true;
    };

    const handleFieldChange = (field: fieldType, value: string) => {
        handleInputChange(index, field as fieldType, value)
    }

    return (
        <tr>
            <td>
                <input
                    type="number"
                    value={engineAmperage}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        handleFieldChange('engineAmperage', e.currentTarget.value)}
                    className={!isFieldValid('engineAmperage', engineAmperage.toString()) ? s.invalid : ''}
                />
            </td>
            <td>
                <input
                    type="number"
                    value={force}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        handleFieldChange('force', e.currentTarget.value)}
                    className={!isFieldValid('force', force.toString()) ? s.invalid : ''}
                />
            </td>
            <td>
                <input
                    type="number"
                    value={speed}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        handleFieldChange('speed', e.currentTarget.value)}
                    className={!isFieldValid('speed', speed.toString()) ? s.invalid : ''}
                />
            </td>
        </tr>
    );
};
