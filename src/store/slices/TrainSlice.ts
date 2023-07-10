import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getDataTrain, ResponseDataTrainTypeChild} from "../../api/getDataTrain";
import {AppThunk} from "../config/store";

interface initialStateType {
    trains: ResponseDataTrainTypeChild[]
    loading: boolean
}

const initialState: initialStateType = {
    trains: [],
    loading: false
}

const trainSlice = createSlice({
    name: "TRAIN/getTrain",
    initialState,
    reducers: {
        getTrainsSuccess: (state, action: PayloadAction<ResponseDataTrainTypeChild[]>) => {
            state.trains = action.payload
        },
        setTrainsLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload
        }
    }
})

export const {getTrainsSuccess, setTrainsLoading} = trainSlice.actions

export const getTrainsSuccessTC = (): AppThunk =>
    async (dispatch) => {
        dispatch(setTrainsLoading(true))
        try {
            const res = await getDataTrain.getData()
            dispatch(setTrainsLoading(false))
            if (res.data) {
                dispatch(getTrainsSuccess(res.data))
            }

        } catch (e) {
            console.log({e})
        }

    }


export default trainSlice.reducer