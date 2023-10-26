import React from 'react';
import Login from "./components/login/Login";
import i18n from "./locale/LocalUtil"
import './App.less';
function App() {
    return (
        <div className="main-container">
            <div  className="content-wrapper" data-testid="content-wrapper">
                <Login/>
            </div>
        </div>
    );
}
export default App;
