import axios from 'axios'

const journalApi = axios.create({
    baseURL: 'https://vue-demos-abbce-default-rtdb.firebaseio.com'
})

export default journalApi