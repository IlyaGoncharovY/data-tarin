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
            <td style={{paddingRight:"10px", borderBottom:"2px solid black"}}>
                <Link to={`${PATH.TRAIN_INFO}/${index}`} style={{textDecoration:"none"}}>{train.name}</Link>
            </td>
            <td style={{borderBottom:"2px solid black"}}>{train.description}</td>
        </tr>
    );
};

