import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { addMessages, loadMessages } from '../features/messages/messages'
import Messages from './Messages'
import { loadMessagesFromLocalStorage, saveMessageToLocalStorage } from '../utils/localStorage'


const ChatRoom = ({ user }) => {
    const [text, setText] = useState('')
    const dispatch = useDispatch()
    const messages = useSelector(state => state.messages.messages)
    const sendText = () => {
        if (text.trim() !== '') {
            console.log('uhi', user)
            const now = new Date()
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const timeString = `${hours}:${minutes}`;
            const newText = {
                id: uuidv4(),
                userName: user.userName,
                userId: user.id,
                text: text,
                time: timeString
            };
            dispatch(addMessages(newText))
            saveMessageToLocalStorage(newText)
            // console.log(newText)
            localStorage.setItem('messages', JSON.stringify([...messages, newText]));
        }
        setText('')
    }
    // useEffect(() => {
    //     const storedMessages = loadMessagesFromLocalStorage()
    //     if (storedMessages.length) {
    //         dispatch(loadMessages(storedMessages)); 
    //     }
    // }, [dispatch])
    useEffect(() => {
        const storedMessages = loadMessagesFromLocalStorage();
        if (storedMessages.length) {
            dispatch(loadMessages(storedMessages));
        }
        const handleStorageChange = (event) => {
            if (event.key === 'messages') {
                const updatedMessages = loadMessagesFromLocalStorage();
                dispatch(loadMessages(updatedMessages));
            }
        };
        window.addEventListener('storage', handleStorageChange);
        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, [dispatch]);

    const loadMoreMessages = () => {
        const currentPage = messages.slice(0, (messages.length + 25));
        dispatch(loadMessages(currentPage));
        dispatch(incrementPage());
      };

    return (
        <div>
            <div>
                <h6>Messages here</h6>
                <Messages userId = {user.id}/>
            </div>
            <textarea name="" id="" value={text} onChange={(e) => setText(e.target.value)}></textarea>
            <button onClick={sendText}>Send message</button>
        </div>
    )
}

export default ChatRoom
