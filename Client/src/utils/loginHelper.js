import { getUser } from "../Api/User.api";

const TOKEN_KEY = 'jwt';

export const login = (TOKEN) => localStorage.setItem(TOKEN_KEY, TOKEN);

export const getLoginToken = () => localStorage.getItem(TOKEN_KEY);

export const logout = () => localStorage.removeItem(TOKEN_KEY);

export const isLogin = () => localStorage.getItem(TOKEN_KEY) ? true : false;

export const isInRole = (id, role) => getUser(id).role === role ? true : false;

