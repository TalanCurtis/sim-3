import axios from 'axios';

// Initial state
const intialState = {
    user:{}
}

// Actions
const GET_USER = 'GET_USER';

// Action Creators
export function getUser(){
    const user = axios.get('/auth/me').then(res => {
        console.log(res.data)
        return res.data;
    })
    return {
        type: GET_USER,
        payload: user
    }
}

// Reducer 
export default function reducer (state= intialState, action){
    switch (action.type) {
        case GET_USER + '_FULFILLED':
            return Object.assign({}, state, {user:action.payload})
        default:
            return state;
    }
}