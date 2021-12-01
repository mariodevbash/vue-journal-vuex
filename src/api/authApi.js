import axios from 'axios'

const authApi = axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1/accounts',
    params: {
        key: 'AIzaSyC8-7I8fuc1tUjUp0sAAAGSFfrH8CGLyWc'
    }
})

export default authApi