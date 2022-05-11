import React, { useState } from 'react'
import './App.css'
import Form from './Form'
import Response from './Response'
import ErrorModal from './ErrorModal'
import { getNewResponse } from './apiCalls'

const App = () => {
  const [ responses, setResponses ] = useState([])
  const [ modalMessage, setModalMessage ] = useState('')

  const sendPrompt = (prompt, engine) => {
    getNewResponse(prompt, engine)
    .then(data => setResponses([ {
      prompt: prompt, response: data.choices[0].text
      }, ...responses
    ]))
    .catch(error => setModalMessage(error.message))
  }

  return (
    <main>
      <div className="main-container">
        { modalMessage.length > 0 &&
        <ErrorModal
        modalMessage={modalMessage}
        setModalMessage={setModalMessage}
        />}
        <h1>Fun with AI</h1>
        <Form sendPrompt={sendPrompt} />
        <Response responses={responses} />
      </div>
    </main>
  )
}

export default App
