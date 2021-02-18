import React from 'react'

const defaultProps = {
    returnJson: true,
    runInitial: true
}

const useReQuest = (url, opts = defaultProps) => {
    const [data, setData] = React.useState(null)
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)

    const { returnJson, runInitial, ...fetchOpts } = opts

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