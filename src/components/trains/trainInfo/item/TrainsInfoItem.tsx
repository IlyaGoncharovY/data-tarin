import React, {FC} from 'react';
import {ResponseDataTrainTypeChild} from "../../../../api/getDataTrain";
import {TrainCharacteristics} from "./characteristics/TrainCharacteristics";

interface Interface {
    information:ResponseDataTrainTypeChild
}

export const TrainsInfoItem:FC<Interface> = ({information}) => {
    return (
        <div>
            {information.characteristics.map((trainCharacteristic, index) =>
                <TrainCharacteristics key={index} trainCharacteristic={trainCharacteristic} />)}
        </div>
    );
};

