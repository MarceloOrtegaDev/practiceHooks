import React from 'react'
import { createContext } from 'react'
import { counterState } from '../Hooks/counterHook.js'

export const newContext = createContext(CounterProvider)

export const CounterProvider = ({ children }) => {

    const { counter, decrement, increment } = counterState()

    return (
        <newContext.Provider value={{ increment, decrement, counter }}>
            {children}
        </newContext.Provider>
    )
}
