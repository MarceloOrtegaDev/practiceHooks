import React from 'react'
import { counterState } from '../Hooks/counterHook'

export const ContadorPage = () => {
    const {decrement, increment, counter} = counterState(5)

  return (
    <div className='gap-4 flex flex-col'>
        <p className="text-center bg-red-400 p-4 rounded-xl">Contador hecho con useState</p>
        <article className="flex flex-col items-center gap-4">
          <button className="p-4 bg-lime-50 rounded-lg" onClick={increment}>Incrementar</button>
          <span className="p-4 bg-gray-200 rounded-xl text-red-600 font-bold">{counter}</span>
          <button className="p-4 bg-lime-50 rounded-lg" onClick={decrement}>Decrementar</button>
        </article>
      </div>   
  )
}