import axios from "axios";
//Todo: Editar el baseUrl

const Searcher = axios.create({
    baseURL: 'http://192.168.1.70/ubicatecData',
});

export default Searcher;