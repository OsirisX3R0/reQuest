import React from 'react'
// import ReQuest from '../../src/reQuest/ReQuest'
import useReQuest from '../../src/useReQuest'
import './css/style.css'

const App = () => {
    // const reQuest = new ReQuest('https://swapi.dev/api/people/1')
    // const ReQuest = reQuest.ReQuest

    // const displayData = (
    //     <ReQuest>
    //         <ReQuest.Loading>Loading</ReQuest.Loading>
    //         <ReQuest.Error>Error</ReQuest.Error>
    //         <ReQuest.Loading>Loading</ReQuest.Loading>
    //     </ReQuest>
    // )
    const [person, personLoading, personError, getPerson] = useReQuest('https://swapi.dev/api/people/1')

    const displayData = (
        <div className='container'>
            {personLoading
                ? 'Loading'
                : personError
                    ? personError
                    : person && JSON.stringify(person)}
                    
        </div>
    )

    return displayData
}

export default App