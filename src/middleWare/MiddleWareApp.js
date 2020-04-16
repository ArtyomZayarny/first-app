import React, {useCallback, useEffect, useState} from 'react'
import List from './components/List'
import Content from './components/Content'
import {Provider, useSelector} from 'react-redux'
import store from "./redux/store";
import {Container,Header} from "semantic-ui-react";

const MiddleWareApp = () => {
    const[lang,setLang] = useState('')
    const getLang = useCallback( (lang)=> {
        setLang(lang)
    })
    return (
        <Provider store={store}>
            <Container className="gist">
                <Header>Gists Explorer</Header>
                <List getLang={getLang}/>
                {lang && <Content lang={lang}/>}
            </Container>
        </Provider>
    );
};

export default MiddleWareApp;