import React from 'react'
import { useSelector } from 'react-redux'
import SingleMessage from './SingleMessage'

const Messages = ({userId}) => {
    const messages = useSelector(state => state.messages.messages)
  return (
    <div>
        {messages.map(message => (
            <SingleMessage key={message.id}
            message = {message} userId = {userId}/>

        ))}
    </div>
  )
}

export default Messages
