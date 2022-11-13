import App from 'App';
// import Canvas from 'component/Canvas';
import Main from 'component/NormalLayout/Main';
import NotFound from 'component/NotFound';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

function Router(props) {
    return (
        <div>
            <Routes>
                <Route path="/:name/" element={<App />}>
                    <Route path="sub" element={'test'}></Route>
                    <Route path="" element={<Main />}></Route>
                </Route>
                <Route path="/*" element={<NotFound />}></Route>
            </Routes>
        </div>
    );
}

export default Router; 