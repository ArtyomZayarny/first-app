 import React, {useState, useEffect} from 'react';
 import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
 import ProtectedRoute from './components/ProtectedRoute'
 import LoginPage from './features/auth/containers/LoginPage'
 import {useDispatch} from 'react-redux';
 import {fetchCurrentUser} from './features/auth/slices/currentUserSlice'
 function SocialApp(props) {
    const dispatch = useDispatch();
    const [hasUserRequested,setUserRequested] = useState(false);
     useEffect( () => {
dispatch(fetchCurrentUser())
.then( () => setUserRequested(true))
.catch( () => setUserRequested(true))
     }, [dispatch]);
     if (!hasUserRequested) return null
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
                    <ProtectedRoute path="/posts">
                        <h2>Hello protected page</h2>
                    </ProtectedRoute>
                </Switch>
             </Router>
         </div>
     );
 }
 
 export default SocialApp;