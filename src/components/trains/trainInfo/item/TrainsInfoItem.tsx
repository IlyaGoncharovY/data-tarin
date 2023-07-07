import React, {FC} from 'react';
import {ResponseDataTrainTypeChildCharacteristics} from "../../../../api/getDataTrain";
import {ItemCharacteristics} from "./itemCharacteristics/ItemCharacteristics";
import {ButtonBackToTrains} from "../../../../common/universalComponents/ButtonBackToTrains";
import {useTrainsCharacteristics} from "../../../../utils/customHook/useTrainsCharacteristics";

interface ITrainsInfoItem {
    characteristics: ResponseDataTrainTypeChildCharacteristics[];
}

export type fieldType = "engineAmperage" | "force" | "speed"

export const TrainsInfoItem: FC<ITrainsInfoItem> = ({ characteristics }) => {

    const {editedCharacteristics, handleInputChange, validateInputs, handleSendData} = useTrainsCharacteristics(characteristics)

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
                {editedCharacteristics.map((item, index) => (
                    <ItemCharacteristics
                        key={index}
                        item={item}
                        index={index}
                        handleInputChange={handleInputChange}
                    />
                ))}
                <tr>
                    <th>
                        <ButtonBackToTrains/>
                    </th>
                    <th>
                        <button onClick={handleSendData} disabled={!validateInputs()}>
                            Отправить данные
                        </button>
                    </th>
                </tr>
                </tbody>
            </table>
        </div>
    );
};