import axios from "axios";
const instance = axios.create({
    baseURL: 'https://react-my-burger-e2518-default-rtdb.europe-west1.firebasedatabase.app'
});

export default instance;