import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import '../App.css';
import {PATH} from "../utils/PATH/path";
import {TrainsPage} from "./trains/trainsPage/TrainsPage";
import {TrainInfo} from "./trains/trainInfo/TrainInfo";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={PATH.TRAINS_PAGE} element={<TrainsPage/>}/>
                <Route path={`${PATH.TRAIN_INFO}/:trainId`} element={<TrainInfo/>}/>
                <Route path={PATH.MAIN} element={<Navigate to={PATH.TRAINS_PAGE}/>}/>
            </Routes>
        </div>
    );
}

export default App;
