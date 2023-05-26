import axios from "axios";
//Todo: Editar el baseUrl

const Searcher = axios.create({
    baseURL: 'https://ubicatecapi.000webhostapp.com/',
});

export default Searcher;