import React  from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import App from './App';
// 创建根元素，包裹Document的root
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <React.StrictMode>
            <App/>
        </React.StrictMode>,
    </BrowserRouter>
);