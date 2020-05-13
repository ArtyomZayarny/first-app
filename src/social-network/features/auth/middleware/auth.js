import {login} from '../slices/currentUser';
import apiClient from '../../../api-client';


const authMiddleware = () => next => action => {
    console.log(2);
    
    if (action.type === login.fulfilled.toString()) {
        console.log(4);
        
        const {authToken} = action.payload;
        localStorage.setItem('authToken', authToken);
        apiClient.defaults.headers['Authorization'] = `Bearer ${authToken}`;
    }
    next(action)
}
export default authMiddleware