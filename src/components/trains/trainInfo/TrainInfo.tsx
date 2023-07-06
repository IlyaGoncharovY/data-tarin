import React from 'react';
import {useAppSelector} from "../../../store/config/hooks";
import {TrainsInfoItem} from "./item/TrainsInfoItem";

export const TrainInfo = () => {

    const trains = useAppSelector(state => state.trains.trains)


    return (
        <div>
            TRAIN INFO

            {trains.map((information, index)=> <TrainsInfoItem key={index} information={information}/>)}
        </div>
    );
};

