const intialState = {
    age: 21, 
    history: []
}

const reducer = (state = intialState, action) => {

    if(action.type === 'AGE_UP'){
        return { 
            ...state, 
            age: state.age + action.value, 
            history: state.history.concat({ age: state.age + action.value, id: Math.random() }), 
            loading: false    
        }
    }
    if(action.type === 'LOADING'){
        return {
            ...state, 
            loading: true
        }
    }
    if(action.type === 'AGE_DOWN'){
        return { 
            ...state, 
            age: state.age - action.value, 
            history: state.history.concat({ age: state.age - action.value, id: Math.random() })     
        }
    }
    if(action.type === 'ON_DELETE'){
        return { 
            ...state, 
            history: state.history.filter(el => el.id !== action.id)     
        }
    }
    return state;
}

export default reducer; 