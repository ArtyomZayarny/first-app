import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import BlogApp from './blog/BlogApp'
import ProductStore from './productStore/productStore'
//import AppStore from "./AppStore";
import MiddleWareApp from "./middleWare/MiddleWareApp";

ReactDOM.render(<MiddleWareApp/>, document.getElementById('root'));

