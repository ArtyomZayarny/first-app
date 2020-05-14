 import React from 'react';
 import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
 import ProtectedRoute from './components/ProtectedRoute'
 import LoginPage from './features/auth/containers/LoginPage'
 
 function SocialApp(props) {
     return (
         <div className="social-app">
             <Router>
                 <Switch>
                    <Route exact path="/">
                        Welcome to the home page
                    </Route>
                    <Route exact path="/login">
                        <LoginPage />
                    </Route>
                    <ProtectedRoute exact path="/posts">
                        There are a lot of secrets
                    </ProtectedRoute>
                </Switch>
             </Router>
             Hello App
         </div>
     );
 }
 
 export default SocialApp;