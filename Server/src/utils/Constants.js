export const PORT = process.env.PORT || 3030;
export const defaultThreadPoolSize = 4;
export const POOLMAX = 10;
export const POOLMIN = 10;

export const IS_PROD = process.env.NODE_ENV === "production";

export const Prod_logFormate = ':id :remote-addr - :remote-user [:date [web]] " :method :url HTTP/:http-version"  :status  :res[content-length]';
//i didn't use this regex i used a simpler one (just in case if i nedded it)
export const strongPassword = '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})'
