import React from 'react'
import UseReQuestDefaultProps from './UseReQuestDefaultProps'

const defaultProps: UseReQuestDefaultProps = {
    returnJson: true,
    runInitial: true
}

const useReQuest = (url: string, fetchOpts: RequestInit = {}, opts: UseReQuestDefaultProps = defaultProps): 
    [any, boolean, any, () => void] => {
    const [data, setData] = React.useState<any>(null)
    const [loading, setLoading] = React.useState<boolean>(false)
    const [error, setError] = React.useState<any>(null)

    const { returnJson, runInitial } = opts

    React.useEffect(() => {
        if (runInitial)
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

    return [data, loading, error, getData]
}

export default useReQuest