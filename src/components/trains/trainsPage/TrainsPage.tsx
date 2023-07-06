import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../../store/config/hooks";
import {TrainsPageItem} from "./item/TrainsPageItem";
import {getTrainsSuccessTC} from "../../../store/slices/TrainSlice";


export const TrainsPage = () => {

    const trains = useAppSelector(state => state.trains.trains)

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getTrainsSuccessTC())
    }, [])

    return (
        <div>
            Поезда
            <table>
                <thead>
                <tr>
                    <th>Название</th>
                    <th>Описание</th>
                </tr>
                </thead>
                <tbody>
                {trains.map((train, index) => (
                    <TrainsPageItem key={index} train={train} />
                ))}
                </tbody>
            </table>
        </div>

    );
};
