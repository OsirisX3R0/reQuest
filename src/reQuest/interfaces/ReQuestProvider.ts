import React from 'react'

export default interface ReQuestProvider extends React.FC<React.ReactNode> {
    Loading: React.FC<React.ReactNode> | string
    Error: React.FC<React.ReactNode> | string
    Done: React.FC<React.ReactNode> | string
}