
export const ageUpAsync = (val) => {
    return { type: "AGE_UP", value: val }
}; 

export const loading = () => {
    return { type: "LOADING" }
}

//Async pattern
export const ageUp = (val) => {
    return (dispatch) => {
        //capture action & do smth
        dispatch(loading())
        setTimeout(() => {
            dispatch(ageUpAsync(val))
        }, 5000)
    }
}

export const ageDown = (val) => {
    return { type: "AGE_DOWN", value: val } 
}; 