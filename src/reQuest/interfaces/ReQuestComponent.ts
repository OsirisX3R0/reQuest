import React from 'react'

export default interface ReQuestComponent extends React.FC<React.ReactNode> {
    children: (val: any | boolean) => any
}