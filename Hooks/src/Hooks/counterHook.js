import { useState } from "react";

export const counterState = (initialState) => {

    const [counter, setCounter] = useState(initialState)

    const increment = () => {
      setCounter(counter + 1)
    }
  
    const decrement = () => {
      setCounter(counter - 1)
    }

    return {increment, decrement, counter}

}