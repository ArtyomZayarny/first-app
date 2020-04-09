import React from 'react';
import ProductStore from "./productStore/productStore";
import {Provider} from 'react-redux'
import store from '../src/productStore/redux/store'

const AppStore = () => {
    return (
        <Provider store={store}>
            <ProductStore />
        </Provider>
    );
};

export default AppStore;