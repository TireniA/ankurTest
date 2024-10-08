import React from 'react'

const SingleMessage = ({ message, userId }) => {
    return (
        <div
            className={`message-box ${message.userId === userId
                    ? "message-box-right"
                    : "message-box-left"
                }`}
        >
            
            <div>
                <div className="username">{message.userName}</div>
                <div className="message">
                    <div className="message-text">{message.text}</div>
                    <div className="message-time">{message.time}</div>
                </div>
            </div>
        </div>
    )
}

export default SingleMessage
