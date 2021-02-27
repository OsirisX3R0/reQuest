import React from 'react'
import ReQuestComponent from './ReQuestComponent';

export default interface ReQuestComponentProps extends React.PropsWithChildren<ReQuestComponent> {
    children: (val: any | boolean) => any
}