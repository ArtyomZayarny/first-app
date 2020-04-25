import React, { useEffect, useState } from 'react'
import List from './List'
import Content from './Content'
import {Header} from "semantic-ui-react";
import { useSelector } from 'react-redux';
import { Dimmer, Loader } from 'semantic-ui-react';

export const App = () => {
    const [isDisplayContent,setDiplayContent] = useState(false)
    const content = useSelector(state => state.content)


    useEffect( () => {
        if(content.content !== '') {
            setDiplayContent(true)
        } 
    },[content]) 
   ;

    return (
        <>
            <Header>Gists Explorer</Header>
            <List/>
            <div className="content-wrap">
                <Dimmer active={content.isLoading} inverted>
                    <Loader>Loading...</Loader>
                </Dimmer>
                {isDisplayContent &&  <Content />}
            </div>
      
        </>
    )
}