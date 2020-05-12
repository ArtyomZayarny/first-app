import axios from 'axios';

const authToken = localStorage.getItem('authToken')

const apiClient = axios.create({
    baseURL:'http://localhost:8080'
})

if (authToken) {
apiClient.defaults.headers['Authorization'] = `Bearer ${authToken}`;
}

export default apiClient  