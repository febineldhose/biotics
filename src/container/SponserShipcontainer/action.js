export const ISLOGIN = 'INCREMENT';
export const ISLOGOUT = 'ISLOGOUT';
export const RENAME = 'RENAME';
export const login = data => ({type: ISLOGIN, data});
export const logout = data => ({type: ISLOGOUT, data});
