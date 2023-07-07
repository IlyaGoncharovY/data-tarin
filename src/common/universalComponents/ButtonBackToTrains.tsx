import React from 'react';
import {PATH} from "../../utils/PATH/path";
import {useNavigate} from "react-router-dom";

export const ButtonBackToTrains = () => {

    const navigate = useNavigate()

    const backToTrainListHandler = () => {
        navigate(PATH.TRAINS_PAGE)
    }

    return (
        <div>
            <button onClick={backToTrainListHandler}>Вернуться к списку поездов</button>
        </div>
    );
};

