import React from 'react'

export default class ReQuest {
    constructor(url, opts) {
        this.url = url
        this.opts = opts

        this.context = React.createContext()
    }

    ReQuest({children}) {
        const reQuestProps = {url: this.url, opts: this.opts, context: this.context}
        return <Provider {...reQuestProps}>{children}</Provider>
    }
}

const Provider = ({url, opts, context, children}) => {
    const ReQuestContext = context
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

Provider.defaultProps = {
    opts: {returnJson: true}
}

const ReQuestLoading = ({children}) => {
    const [loading] = React.useContext(this.context)

    return loading ? children : ''
}

const ReQuestError = ({children}) => {
    const [error] = React.useContext(this.context)

    return error ? children : ''
}

const ReQuestDone = ({children}) => {
    const [data, error, loading] = React.useContext(this.context)

    return data && !error && !loading ? children : ''
}

ReQuest.Loading = ReQuestLoading
ReQuest.Error = ReQuestError
ReQuest.Done = ReQuestDone