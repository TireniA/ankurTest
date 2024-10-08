import React, { useState } from 'react'

const Login = ({ handleLogin }) => {
    const [name, setName] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        handleLogin(name)
    }
    return (
        <div className='min-vh-100 bg-dark d-flex justify-content-center align-items-center'>
            <form className='bg-info' onSubmit={handleSubmit}>
                <h2>Ankur's Chat Room</h2>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <button type='submit'>Log in</button>
            </form>
        </div>
    )
}

export default Login
