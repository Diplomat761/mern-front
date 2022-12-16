import axios from "axios";

const instance = axios.create({
    baseURl: 'http://localhost:4444',
});

export default instance;