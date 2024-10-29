import { useReducer } from 'react'

export const hookReducer = () => {
const variablesContador = {
    incrementar: "INCREMENTAR",
    decrementar: "DECREMENTAR",
    reset: "RESET"
}

const initialState = {
    counter: 0
}

const reducer = (state, action) =>{
    if(action.type === variablesContador.incrementar){
        if(state.counter >= 10){
            console.log("acá")
        } else {
            return {counter: state.counter + 1}
        }
        return state
    } else if (action.type === variablesContador.decrementar){
        return {counter: state.counter - 1}
    } else if (action.type === variablesContador.reset){
        return {counter: 0}
    }
    return state
}

const [state, dispatch] = useReducer(reducer,initialState)

return {
    state,
    dispatch,
    variablesContador
}

}