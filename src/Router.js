import App from 'App';
import DeliverHeart from 'component/NormalLayout/DeliverHeart';
// import Canvas from 'component/Canvas';
import Main from 'component/NormalLayout/Main';
import Root from 'component/NormalLayout/Root';
import NotFound from 'component/NotFound';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

function Router(props) {
    return (
        <div>
            <Routes>
                <Route path="/:name/" element={<App />}>
                    <Route path="" element={<Main />}></Route>
                    <Route path="deliver-heart" element={<DeliverHeart />}></Route>
                </Route>
                <Route path="/" element={<Root />}></Route>
                <Route path="/*" element={<NotFound />}></Route>
            </Routes>
        </div>
    );
}

export default Router; 