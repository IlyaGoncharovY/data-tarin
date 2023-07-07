import React from 'react';
import {useAppSelector} from "../../../store/config/hooks";
import {TrainsInfoItem} from "./item/TrainsInfoItem";
import {useParams} from "react-router-dom";

export const TrainInfo = () => {

    const trains = useAppSelector(state => state.trains.trains)

    const { trainId } = useParams<{ trainId: string }>()
    const selectedTrain = trains[Number(trainId)]

    if (!selectedTrain) {
        return <div>Train not found</div>
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
            <TrainsInfoItem characteristics={selectedTrain.characteristics} />
        </div>
    );
};

