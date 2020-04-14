import React from 'react'
import List from './components/List'
import Content from './components/Content'
import {Provider} from 'react-redux'
import store from "./redux/store";
import {Container,Header} from "semantic-ui-react";

const MiddleWareApp = () => {
    return (
        <Provider store={store}>
            <Container>
                <Header>Gists Explorer</Header>
                <List />
                <Content />
            </Container>
        </Provider>
    );
};

export default MiddleWareApp;