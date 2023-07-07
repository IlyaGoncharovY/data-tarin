import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../../store/config/hooks";
import {getTrainsSuccessTC} from "../../../store/slices/TrainSlice";
import {TrainsPageItem} from "./item/TrainsPageItem";


export const TrainsPage = React.memo(() => {
    const trains = useAppSelector(state => state.trains.trains)

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getTrainsSuccessTC())
    }, [dispatch])

    return (
        <div>
            <h1 style={{textAlign:"center"}}>Поезда</h1>
            <table style={{margin: "auto"}}>
                <thead>
                <tr>
                    <th>Название</th>
                    <th>Описание</th>
                </tr>
                </thead>
                <tbody>
                {trains.map((train, index) =>
                    <TrainsPageItem key={index} train={train} index={index} />
                )}
                </tbody>
            </table>
        </div>
    );
});
