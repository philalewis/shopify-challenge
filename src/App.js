import React, { useState, useEffect } from 'react'
import './App.css'
import Form from './Form'
import Response from './Response'
import { getNewResponse } from './apiCalls'

const App = () => {
  const [ responses, setResponses ] = useState([])

  const sendPrompt = (prompt) => {
    getNewResponse(prompt)
    .then(data => setResponses([ ...responses, {
      prompt: prompt, response: data.choices[0].text
    } ]))
  }

  return (
    <main>
      <Form sendPrompt={sendPrompt}/>
    </main>
  )
}

export default App
