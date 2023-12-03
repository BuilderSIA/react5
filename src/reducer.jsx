export const reducer = (state, action) => {
    if(action.type==="CLEAR"){
        return{
            ...state,
            cart:[]
        }
    }
}