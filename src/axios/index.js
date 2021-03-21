import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "832bed4351187ecd0cb4c74b91000f85";

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  api_key: API_KEY,
};

export default axios;
