import {useState} from "react";
import {ResponseDataTrainTypeChildCharacteristics} from "../../api/getDataTrain";
import {fieldType} from "../../components/trains/trainInfo/item/TrainsInfoItem";

export const useTrainsCharacteristics = (characteristics:ResponseDataTrainTypeChildCharacteristics[]) => {

    const [editedCharacteristics, setEditedCharacteristics] = useState(characteristics)

    const handleInputChange = (index: number, field: fieldType, value: string) => {
        try {
            const updatedCharacteristics = [...editedCharacteristics]
            const updatedItem = { ...updatedCharacteristics[index] }
            updatedItem[field as keyof ResponseDataTrainTypeChildCharacteristics] = Number(value)
            updatedCharacteristics[index] = updatedItem
            setEditedCharacteristics(updatedCharacteristics)
        } catch (error) {
            console.error("Break data:", error)
        }
    }

    const validateInputs = () => {
        for (const characteristic of editedCharacteristics) {
            const { speed, force, engineAmperage } = characteristic
            if (
                isNaN(speed) ||
                isNaN(engineAmperage) ||
                speed <= 0 ||
                engineAmperage <= 0 ||
                force <= 0 ||
                !/\d+\.\d+/.test(String(force))
            ) {
                return false
            }
        }
        return true
    }

    const handleSendData = () => {
        if (validateInputs()) {
            const sortedSpeedLimits = editedCharacteristics
                .map((characteristic) => characteristic.speed)
                .sort((a, b) => a - b)

            console.log("Sorted Speed Limits:", sortedSpeedLimits)
        }
    };

    return {
        editedCharacteristics,
        handleInputChange,
        validateInputs,
        handleSendData
    }
}