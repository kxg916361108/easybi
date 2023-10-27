import React from 'react';
import i18n from "./locale/LocalUtil"
import './App.less';
import {ROUTES} from "./constants/constants";
import AppRouter from "./components/router/AppRouter";

function App() {
    return (
        <div className="main-container">
            <div className="content-wrapper" data-testid="content-wrapper">
                <AppRouter/>
            </div>
        </div>
    );
}

export default App;
