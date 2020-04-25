import React, {useEffect, useState} from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import {useSelector} from "react-redux";


const Content = () => {
    const content = useSelector(state => state.content);

    return (
        <div className='content'>
            <SyntaxHighlighter language={content.lang} style={dark} >
                {content.content}
            </SyntaxHighlighter>
        </div>
    );
};

export default Content;