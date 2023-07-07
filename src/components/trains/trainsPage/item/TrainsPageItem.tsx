import React, {FC} from 'react';
import { Link } from 'react-router-dom';
import {ResponseDataTrainTypeChild} from "../../../../api/getDataTrain";
import {PATH} from "../../../../utils/PATH/path";

interface ITrainsPageItem {
    train: ResponseDataTrainTypeChild
    index: number
}

export const TrainsPageItem: FC<ITrainsPageItem> = ({train,index}) => {
    return (
        <tr>
            <td>
                <Link to={`${PATH.TRAIN_INFO}/${index}`}>{train.name}</Link>
            </td>
            <td>{train.description}</td>
        </tr>
    );
};

