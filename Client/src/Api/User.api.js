import axios from 'axios';
import { API_URL } from '../utils/constants';
import to from '../utils/to';
import { handleServerErrors } from '../utils/helpers';
const handleRequest = (request) => {
     const { error, result } = await to(axios.get(`${API_URL}/user/${id}`));

    if (error) return handleServerErrors(error);
    return result.data;
}
export const getUser = async (id) => {
    const { error, result } = await to(axios.get(`${API_URL}/user/${id}`));

    if (error) return handleServerErrors(error);
    return result.data;
}
export const deleteUser = async (id) => {
    const { error, result } = await to(axios.delete(`${API_URL}/user/${id}`));

    if (error) return handleServerErrors(error);
    return { data: result.data, error: null };
}
export const loginUser = async (email, password) => {

    const { error, result } = await to(axios.post(`${API_URL}/login`, { email, password }));
    if (error) return handleServerErrors(error);
    return { data: result.data, error: null };
}
export const getUsers = async (role) => {

    const { error, result } = await to(axios.get(`${API_URL}/user`, {
        headers: { "Authorization": localStorage.getItem("token") },
        data: { role }
    }));

    if (error) return handleServerErrors(error);

    return { data: result.data, error: null };

}
