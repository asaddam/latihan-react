export const login = (data) => {
    return{
        type: 'LOGIN',
        payload: data
    }
}

export const logout = () => {
    return {
        type: 'LOGOUT'
    }
}

export const alert = () => {
    return {
        type: 'ALERT'
    }
}