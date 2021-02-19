import React from 'react'
import ReQuest from './reQuest/reQuestProvider'
import './css/style.css'

const App = () => {
    // const reQuest = new ReQuest('https://swapi.dev/api/people/1')
    // const ReQuest = reQuest.ReQuest

    const displayData = (
        <div className='container'>
            <pre>
                <ReQuest url='https://swapi.dev/api/people/1'>
                    <ReQuest.Loading>{loading => loading && 'Loading'}</ReQuest.Loading>
                    <ReQuest.Error>{err => err}</ReQuest.Error>
                    <ReQuest.Loading>{data => JSON.stringify(data)}</ReQuest.Loading>
                </ReQuest>
            </pre>
        </div>
    )
    // const [person, personLoading, personError, getPerson] = useReQuest('https://swapi.dev/api/people/1')

    // const displayData = (
    //     <div className='container'>
    //         {personLoading
    //             ? 'Loading'
    //             : personError
    //                 ? personError
    //                 : person && JSON.stringify(person)}
                    
    //     </div>
    // )

    return displayData
}

export default App