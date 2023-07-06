import axios from "axios";

export const instance = axios.create({
    baseURL: "https://gist.githubusercontent.com/orlov-oleg-developer/",
    // withCredentials: true
})

export const getDataTrain = {
    getData() {
        return instance.get<ResponseDataTrainType>(`49f08290d1c59a6851e0a0581900e2a7/raw/e5daf87338f3c75165f8edf4c76cc7ec9c2b4aa9/gistfile1.json`)
    }
}
/**
 * Common type for object DATA TRAIN
 */
export type ResponseDataTrainType = ResponseDataTrainTypeChild[];
export type ResponseDataTrainTypeChildCharacteristics = {
    /**
     * speed train
     */
	speed: number;
    /**
     * force train
     */
	force: number;
    /**
     * engineAmperage train
     */
	engineAmperage: number;
}
export type ResponseDataTrainTypeChild = {
	name: string;
	description: string;
    /**
     * characteristics: speed, force, engineAmperage
     */
	characteristics: ResponseDataTrainTypeChildCharacteristics[];
}