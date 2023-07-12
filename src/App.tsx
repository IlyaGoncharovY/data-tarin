import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import {PATH} from "./utils/PATH/path";
import {TrainsPage} from "./components/trains/trainsPage/TrainsPage";
import {TrainInfo} from "./components/trains/trainInfo/TrainInfo";

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
