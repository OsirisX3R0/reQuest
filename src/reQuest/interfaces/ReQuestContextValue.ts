import React from 'react'
export default interface ReQuestContextValue {
    data: any,
    loading: boolean,
    error: any,
    getData: () => void
}