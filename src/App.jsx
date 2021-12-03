import React, { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

export const App = () => {
    const [advice, setAdvice] = useState('')
    const [spamAvoider, setSpamAvoider] = useState(false)

    const getAdvice = async () => {
        const response = await axios.get(`https://api.adviceslip.com/advice`)
        const advice = await response.data.slip

        setAdvice(advice)
        setSpamAvoider(true)
        setTimeout(() => {
            setSpamAvoider(false)
        }, 2000);
    }

    useEffect(() => {
        getAdvice()
    }, [])

    return (
        <div className="app">
            <div className="card">
                <h1 className="heading">{advice.advice}</h1>

                {
                spamAvoider? <button className="btn btn-danger">You have to wait</button> : <button className="btn btn-primary" onClick={getAdvice}>Give me Advice!</button>
                }
            </div>
        </div>
    )
}

export default App;
