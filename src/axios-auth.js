import axios from 'axios'
//Firebase
const instance = axios.create({
  baseURL: 'https://www.googleapis.com/identitytoolkit/v3/relyingparty'
})


export default instance