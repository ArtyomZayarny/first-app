import React from 'react'
import {Provider} from 'react-redux'
import store from "./redux/store";
import {Container} from "semantic-ui-react";
import { App } from './components/App';

const MiddleWareApp = () => {  

    return (
        <Provider store={store}>
            <Container className="gist">
                <App />
            </Container>
        </Provider>
    );
};

export default MiddleWareApp;