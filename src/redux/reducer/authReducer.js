const INITIAL_STATE = {
    username : '',
    role: ''
}

const authReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'LOGIN':
            return {
                ...state,
                username: action.payload.username,
                role: action.payload.role
            }
        case 'LOGOUT':
            return INITIAL_STATE
        case 'ALERT':
            return {
                ...state,
                // ...state akan mengambil value sbelumnya lalu meniban sebelumnya
                username: 'halo',
                role: 'user'
            } 
        default:
            return state
    }
}

export default authReducer;