import { useState } from "react";

export const counterState = () => {

    const [counter, setCounter] = useState(0)

    const increment = () => {
        setCounter(counter + 1)
    }

    const decrement = () => {
        setCounter(counter - 1)
    }

    return { increment, decrement, counter }

}