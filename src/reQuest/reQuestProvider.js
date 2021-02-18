import React from "react";

export const ReQuestContext = React.createContext()

export const ReQuest = ({url, opts, children}) => {
    const [data, setData] = React.useState(null)
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)

    const { returnJson, ...fetchOpts } = opts

    React.useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        setLoading(true)

        fetch(url, fetchOpts)
            .then(res => returnJson ? res.json(): res)
            .then(res => {
                setError(null)
                setData(res)
            })
            .catch(err => {
                setData(null)
                setError(err)
            })
            .finally(() => setLoading(false))
    }
    return (
        <ReQuestContext.Provider value={{
            data, loading, error, getData
        }}>
            {children}
        </ReQuestContext.Provider>
    )
}