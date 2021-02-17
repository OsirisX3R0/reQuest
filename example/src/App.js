import React from 'react'
import useHttp from '../../src/useHttp'
import './css/style.css'

const App = () => {
    const [person, personLoading, personError, getPerson] = useHttp('https://swapi.dev/api/people/1', {returnJson: true})

    const displayData = personLoading
        ? 'Loading'
        : personError
            ? personError
            : person && <pre>{JSON.stringify(person)}</pre>

    return (
        <div className='container'>
            {displayData}
        </div>
    )
}

export default App