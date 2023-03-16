//import { useState } from "react"; normal count

import { ReactNode } from "react"

type CounterProps = {
    setCount:  React.Dispatch<React.SetStateAction<number>>,
    children: ReactNode,
}

const Counter = ({ setCount, children}: CounterProps) => {
    //const [count, setCount] = useState<number>(1) normal count


    return (
        <>
            <h1>{children}</h1>
            <button onClick={() => setCount(prev => prev + 1)}>+</button>
            <button onClick={() => setCount(prev => prev - 1)}>-</button>
        </>
    )
}

export default Counter