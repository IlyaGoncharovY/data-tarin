import {ResponseDataTrainTypeChildCharacteristics} from "../../api/getDataTrain";


export const UtilsForEditCharacteristics = (array: ResponseDataTrainTypeChildCharacteristics[], index: number, newRow = null) => {
    const updatedArray = [...array]

    if (newRow) {
        updatedArray.splice(index + 1, 0, newRow)
    } else {
        updatedArray.splice(index, 1)
    }

    return updatedArray;
};