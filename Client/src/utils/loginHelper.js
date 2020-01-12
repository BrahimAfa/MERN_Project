import { getUser } from "../Api/User.api";

const TOKEN_KEY = 'jwt';
const ID_KEY = 'id';
const ROLE_KEY = 'role';
const NAME_KEY = "name";
export const login = (data) => {
    localStorage.setItem(TOKEN_KEY, data.token);
    localStorage.setItem(ID_KEY, data.id);
    localStorage.setItem(ROLE_KEY, data.role);
    localStorage.setItem(NAME_KEY, data.name);
}

export const getLoginToken = () => localStorage.getItem(TOKEN_KEY);
export const getID = () => localStorage.getItem(ID_KEY);
export const getROLE = () => localStorage.getItem(ROLE_KEY);
export const getNAME = () => localStorage.getItem(NAME_KEY);

export const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(ID_KEY);
    localStorage.removeItem(ROLE_KEY);
    localStorage.removeItem(NAME_KEY);
    window.location = '/';
}

export const isLogin = () => localStorage.getItem(TOKEN_KEY) ? true : false;

export const isInRole = (id, role) => getUser(id).role === role ? true : false;

