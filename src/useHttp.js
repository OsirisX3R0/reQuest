import { useEffect, useState } from 'react'

const React = require('react')

const useHttp = (url, opts = {}) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const { returnJson, ...fetchOpts } = opts

    useEffect(() => {
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

export default useHttp