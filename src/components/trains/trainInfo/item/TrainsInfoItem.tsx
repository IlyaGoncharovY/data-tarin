import React, {FC} from 'react';
import {ResponseDataTrainTypeChildCharacteristics} from "../../../../api/getDataTrain";
import {ItemCharacteristics} from "./itemCharacteristics/ItemCharacteristics";
import {useNavigate} from "react-router-dom";
import {PATH} from "../../../../utils/PATH/path";

interface ITrainsInfoItem {
    characteristics: ResponseDataTrainTypeChildCharacteristics[]
}

export const TrainsInfoItem: FC<ITrainsInfoItem> = ({characteristics}) => {

    const navigate = useNavigate()

    const backToTrainListHandler = () => {
        navigate(PATH.TRAINS_PAGE)
    }

    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th>Ток двигателя (А)</th>
                    <th>Сила тяги (кН)</th>
                    <th>Скорость (км/ч)</th>
                </tr>
                </thead>
                <tbody>
                {characteristics.map((item, index) =>
                    <ItemCharacteristics key={index} item={item}/>
                )}
                <button onClick={backToTrainListHandler}>Вернуться к списку поездов</button>
                <button>Отправить данные</button>
                </tbody>
            </table>
        </div>
    );
};

