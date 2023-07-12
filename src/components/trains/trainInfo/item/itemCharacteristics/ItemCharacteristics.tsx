import React, {FC} from 'react';
import {ResponseDataTrainTypeChildCharacteristics} from "../../../../../api/getDataTrain";
import {fieldType} from "../TrainsInfoItem";
import {InputForCharacteristics} from "../../../../../common/universalComponents/InputForCharacteristics";

interface IItemCharacteristics {
    item: ResponseDataTrainTypeChildCharacteristics
    index: number
    handleInputChange: (index: number, field: fieldType, value: string) => void
    addRowHandler: () => void
    deleteRowHandler: () => void
}

export const ItemCharacteristics: FC<IItemCharacteristics> = ({
                                                                  item,
                                                                  index,
                                                                  handleInputChange,
                                                                  addRowHandler,
                                                                  deleteRowHandler
                                                              }) => {
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
        handleInputChange(index, field, value)
    }

    return (
        <tr>
            <InputForCharacteristics
                valueForCharacteristics={engineAmperage}
                handleFieldChange={handleFieldChange}
                isFieldValid={isFieldValid}
                field={"engineAmperage"}
            />
            <InputForCharacteristics
                valueForCharacteristics={force}
                handleFieldChange={handleFieldChange}
                isFieldValid={isFieldValid}
                field={"force"}
            />
            <InputForCharacteristics
                valueForCharacteristics={speed}
                handleFieldChange={handleFieldChange}
                isFieldValid={isFieldValid}
                field={"speed"}
            />
            <td>
                <button onClick={addRowHandler}>+</button>
            </td>
            <td>
                <button onClick={deleteRowHandler}>-</button>
            </td>
        </tr>
    );
};
