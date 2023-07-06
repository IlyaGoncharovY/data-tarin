import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getDataTrain, ResponseDataTrainTypeChild} from "../../api/getDataTrain";
import {AppThunk} from "../config/store";

interface initialStateType {
    trains: ResponseDataTrainTypeChild[]
}

const initialState: initialStateType = {
    trains: []
}

const trainSlice = createSlice({
    name: "TRAIN/getTrain",
    initialState,
    reducers: {
        getTrainsSuccess: (state, action:PayloadAction<ResponseDataTrainTypeChild[]>) => {
            state.trains = action.payload
        }
    }
})

export const {getTrainsSuccess} = trainSlice.actions

export const getTrainsSuccessTC = ():AppThunk =>
    async (dispatch) => {
    try {
        const res = await getDataTrain.getData()
        if (res.data) {
            dispatch(getTrainsSuccess(res.data))
        }
    } catch (e) {
        console.log({e})
    }
  
}


export default trainSlice.reducer