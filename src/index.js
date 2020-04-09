import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import BlogApp from './blog/BlogApp'
import ProductStore from './productStore/productStore'
import AppStore from "./AppStore";


ReactDOM.render(<AppStore/>, document.getElementById('root'));

