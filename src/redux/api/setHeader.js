import api from "./api";

export const setAuthHeader = (token) => {
    //api.defaults.headers.common["authorization"] = token;
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
    delete api.defaults.headers.common['Authorization'];
    //delete axios.defaults.headers.common['Authorization'];
};