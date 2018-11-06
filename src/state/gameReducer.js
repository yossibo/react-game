const initialState = {
    pic: "", pos:''
};

//when state is undefined it wil get default param initialState
const gameReducer = (state = initialState, action) => {
debugger;
    switch (action.type) {
        case 'START':  
         let newState = Object.assign({}, state, action.data) ; 
         return newState; 
        default:
            return state;
    }
};
export default gameReducer;