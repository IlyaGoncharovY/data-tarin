import React from 'react';
import {useAppSelector} from "../../../store/config/hooks";
import {TrainsInfoItem} from "./item/TrainsInfoItem";
import {useParams} from "react-router-dom";
import {NotFound} from "../../../common/universalComponents/NotFound";

export const TrainInfo = React.memo(() => {
    const {trains} = useAppSelector(state => state.trains)

    const {trainId} = useParams<{ trainId: string }>()
    const selectedTrain = trains[Number(trainId)]

    if (!selectedTrain) {
        return <NotFound/>
    }

    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th>Название</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>{selectedTrain.name}</td>
                </tr>
                </tbody>
            </table>
            <h2>Характеристики</h2>
            <TrainsInfoItem characteristics={selectedTrain.characteristics}/>
        </div>
    );
});

