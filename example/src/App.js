import React from 'react'
import useHttp from '../../src/useHttp'
import usePrevState from '../../src/usePrevState'
import './css/style.css'

const App = () => {
    // const [currentCount, previousCount, setCount] = usePrevState(0)
    const [person, personLoading, personError, getPerson] = useHttp('https://swapi.dev/api/people/1', {returnJson: true})
    // const increment = () => setCount(prev => prev + 1)
    // const decrement = () => setCount(prev => prev - 1)
    // const reset = () => setCount(0)
    return (
        <div className='container'>
            {/* <h1>useState Example</h1>
            <h4>Current count: {currentCount}</h4>
            <h4>Previous count: {previousCount !== null ? previousCount : "null"}</h4>

            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button> */}
        </div>
    )
}

export default App