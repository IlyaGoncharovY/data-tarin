import React, {FC} from 'react';
import {ResponseDataTrainTypeChildCharacteristics} from "../../../../../api/getDataTrain";

interface IItemCharacteristics {
    item: ResponseDataTrainTypeChildCharacteristics
}

export const ItemCharacteristics:FC<IItemCharacteristics> = ({item}) => {
    return (
            <tr>
                <td>{item.engineAmperage}</td>
                <td>{item.force}</td>
                <td>{item.speed}</td>
            </tr>
    );
};

