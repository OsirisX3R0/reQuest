import React from 'react'
import beautify from 'json-beautify'

import ReQuest, { useReQuest } from '../'
// import useReQuest from './reQuest/useReQuest'
import './css/style.css'

const App = () => {
    const formatResponse = resp => beautify(resp, null, 2, 80)

    // Implementation with ReQuest compound component
    const displayData = (
        <div className='container'>
            <pre>
                <ReQuest url='https://swapi.dev/api/people/1'>
                    <ReQuest.Loading>{() => 'Loading...'}</ReQuest.Loading>
                    <ReQuest.Error>{err => err}</ReQuest.Error>
                    <ReQuest.Done>{data => formatResponse(data)}</ReQuest.Done>
                </ReQuest>
            </pre>
        </div>
    )

    // Implementation with useReQuest hook
    // const [person, personLoading, personError, getPerson] = useReQuest('https://swapi.dev/api/people/1')

    // const displayData = (
    //     <div className='container'>
    //         <pre>
    //             {personLoading
    //                 ? 'Loading...'
    //                 : personError
    //                     ? personError
    //                     : person && formatResponse(person)}
    //         </pre>
    //     </div>
    // )

    return displayData
}

export default App