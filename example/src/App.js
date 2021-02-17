import React from 'react'
import useHttp from '../../src/useHttp'
import './css/style.css'

const App = () => {
    const [person, personLoading, personError, getPerson] = useHttp('https://swapi.dev/api/people/1', {returnJson: true})

    const displayData = (
        <pre className='container'>
            {personLoading
                ? 'Loading'
                : personError
                    ? personError
                    : person && JSON.stringify(person)}
                    
        </pre>
    )

    return displayData
}

export default App