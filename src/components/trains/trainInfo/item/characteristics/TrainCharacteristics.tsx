import React, {FC} from 'react';
import {ResponseDataTrainTypeChildCharacteristics} from "../../../../../api/getDataTrain";

interface Interface {
    trainCharacteristic: ResponseDataTrainTypeChildCharacteristics
}

export const TrainCharacteristics:FC<Interface> = ({trainCharacteristic}) => {
    return (
        <div>
            {trainCharacteristic.speed}
            {trainCharacteristic.force}
            {trainCharacteristic.engineAmperage}
        </div>
    );
};

