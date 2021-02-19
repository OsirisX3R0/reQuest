import React from "react";
import useReQuest from "./useReQuest";

const ReQuestContext = React.createContext()

const ReQuest = ({url, opts, children}) => {
    const [data, loading, error, getData] = useReQuest(url, opts)

    // Actual logic
    // const [data, setData] = React.useState(null)
    // const [loading, setLoading] = React.useState(false)
    // const [error, setError] = React.useState(null)

    // const { returnJson, runInitial } = opts

    // React.useEffect(() => {
    //     if (runInitial)
    //         getData()
    // }, [])

    // const getData = () => {
    //     setLoading(true)

    //     fetch(url, fetchOpts)
    //         .then(res => returnJson ? res.json(): res)
    //         .then(res => {
    //             setError(null)
    //             setData(res)
    //         })
    //         .catch(err => {
    //             setData(null)
    //             setError(err)
    //         })
    //         .finally(() => setLoading(false))
    // }

    return (
        <ReQuestContext.Provider value={{
            data, loading, error, getData
        }}>
            {children}
        </ReQuestContext.Provider>
    )
}

const ReQuestLoading = ({children}) => {
    const {loading} = React.useContext(ReQuestContext)

    return loading ? children(loading) : ''
}

const ReQuestError = ({children}) => {
    const {error} = React.useContext(ReQuestContext)

    return error ? children(error) : ''
}

const ReQuestDone = ({children}) => {
    const {data, error, loading} = React.useContext(ReQuestContext)

    return (data && !error && !loading) ? children(data) : ''
}

ReQuest.Loading = ReQuestLoading
ReQuest.Error = ReQuestError
ReQuest.Done = ReQuestDone

export default ReQuest