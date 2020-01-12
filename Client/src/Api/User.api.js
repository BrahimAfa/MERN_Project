import axios from 'axios';
import { API_URL } from '../utils/constants';
import to from '../utils/to';
import { handleServerErrors } from '../utils/helpers';
import { getLoginToken } from "../utils/loginHelper";

export const getUser = async (id) => {
    const { error, data } = await to(axios.get(`${API_URL}/user/${id}`, {
        headers: { "Authorization": getLoginToken() }
    }));

    if (error) return handleServerErrors(error);
    return { data };
}

export const loginUser = async (email, password) => {

    const { error, data } = await to(axios.post(`${API_URL}/login`, { email, password }));
    if (error) return handleServerErrors(error);
    return { data };
}
export const getUsers = async (role) => {

    const { error, data } = await to(axios.post(`${API_URL}/user`, { role }, {
        headers: { "Authorization": getLoginToken() }
    }));

    if (error) return handleServerErrors(error);

    return { data };

}
export const postUser = async (newdata) => {

    const { error, data } = await to(axios.post(`${API_URL}/user/add`, newdata, {
        headers: { "Authorization": getLoginToken() }
    }));
    if (error) {
        alert(handleServerErrors(error).error.message);
        return;
    }

    alert("Successfully Inserted");
    alert(JSON.stringify(data))
}

export const putUser = async (id, newdata) => {

    const { error, data } = await to(axios.put(`${API_URL}/user/${id}`, newdata, {
        headers: { "Authorization": getLoginToken() }
    }));

    if (error) {
        alert(handleServerErrors(error).error.message);
        return;
    }

    alert("Successfully Updated");
    alert(JSON.stringify(data))
}

export const deleteUser = async (id) => {
    const { error, data } = await to(axios.delete(`${API_URL}/user/${id}`, {
        headers: { "Authorization": getLoginToken() }
    }));
    if (error) return handleServerErrors(error);
    return { data };
}
