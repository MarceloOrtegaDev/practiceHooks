import { hookReducer } from "../Hooks/counterReducer.js"

export const ContadorReducer = () => {
    const {dispatch, state, variablesContador} = hookReducer()
  return (
    <>
    <div className="flex flex-col justify-center items-center gap-4">
    <p className="text-center bg-lime-200 p-4 rounded-xl">Contador useReducer</p>
    <span className="p-4 bg-gray-200 rounded-xl text-red-600 font-bold">{state.counter}</span>
    <div className="flex flex-row gap-4">
    <button className="p-4 bg-lime-50 rounded-lg" onClick={()=> dispatch({type: variablesContador.incrementar})}>Incrementar</button>
    <button className="p-4 bg-lime-50 rounded-lg" onClick={()=> dispatch({type: variablesContador.decrementar})}>Decrementar</button>
    <button className="p-4 bg-lime-50 rounded-lg" onClick={()=> dispatch({type: variablesContador.reset})}>Resetear</button>
    </div>
    </div>
    </>
  )
}
