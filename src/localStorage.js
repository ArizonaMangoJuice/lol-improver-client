export const loadToken = () => {
    console.log(localStorage.getItem('authToken'));
    return localStorage.getItem('authToken');
}

export const saveToken = authToken => {
    try{
        localStorage.setItem('authToken', authToken)
    } catch(e) {
        console.log(e);   
    }
}

export const clearToken = () => {
    try{
        localStorage.removeItem('authToken');
    } catch(e) {
        console.log(e)
    }
}