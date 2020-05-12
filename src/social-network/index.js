import React from 'react';
import SocialApp from './SocialApp'
import {Provider} from 'react-redux'
import store from './configureStore';
function App(props) {
    return (
        <Provider store={store}>
            <SocialApp />
        </Provider>
    );
}

export default App;