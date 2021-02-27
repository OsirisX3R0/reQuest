import React from "react";
import ReQuestComponent from "../interfaces/ReQuestComponent";
import ReQuestComponentProps from "../interfaces/ReQuestComponentProps";
import ReQuestContextValue from '../interfaces/ReQuestContextValue'
import ReQuestProps from "../interfaces/ReQuestProps";
import ReQuestProvider from "../interfaces/ReQuestProvider";
import useReQuest from "../useReQuest/useReQuest";

const defaultValue = {
    data: null,
    loading: false,
    error: null,
    getData: () => true
}

const ReQuestContext = React.createContext<ReQuestContextValue>(defaultValue)

const ReQuest: ReQuestProvider = ({url, fetchOpts, opts, children}: ReQuestProps) => {
    const [data, loading, error, getData] = useReQuest(url, fetchOpts, opts)

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

const ReQuestLoading: ReQuestComponent = ({children}: ReQuestComponentProps) => {
    const {loading} = React.useContext<ReQuestContextValue>(ReQuestContext)

    return loading ? children(loading) : ''
}

const ReQuestError: ReQuestComponent = ({children}: ReQuestComponentProps) => {
    const {error} = React.useContext<ReQuestContextValue>(ReQuestContext)

    return error ? children(error) : ''
}

const ReQuestDone: ReQuestComponent = ({children}: ReQuestComponentProps) => {
    const {data, error, loading} = React.useContext<ReQuestContextValue>(ReQuestContext)

    return (data && !error && !loading) ? children(data) : ''
}

ReQuest.Loading = ReQuestLoading
ReQuest.Error = ReQuestError
ReQuest.Done = ReQuestDone

export default ReQuest