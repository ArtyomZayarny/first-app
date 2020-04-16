import React, {useEffect, useState} from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import {useSelector} from "react-redux";

const Content = ({lang}) => {
    const content = useSelector(state=>state.posts.content)
    const [codeString,setCodeString] = useState('');

    useEffect( () => {
        setCodeString(content)
    },[content])
    return (
        <div className='content'>
            <SyntaxHighlighter language={lang} style={dark} >
                {codeString}
            </SyntaxHighlighter>
        </div>
    );
};

export default Content;