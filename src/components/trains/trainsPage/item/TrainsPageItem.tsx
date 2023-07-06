import React, {FC} from 'react';
import {ResponseDataTrainTypeChild} from "../../../../api/getDataTrain";

interface ITrainsPageItem {
    train: ResponseDataTrainTypeChild
}

export const TrainsPageItem: FC<ITrainsPageItem> = ({train}) => {
    return (
        <tr>
            <td>{train.name}</td>
            <td>{train.description}</td>
        </tr>
    );
};

