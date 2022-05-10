import React, { useState, useEffect } from 'react'
import './App.css'
import Form from './Form'
import Response from './Response'
import { getNewResponse } from './apiCalls'

const App = () => {
  const [ responses, setResponses ] = useState([])

  // useEffect(() => {
  //   sendPrompt('Suggest one name for a horse.')
  // }, [])

  const sendPrompt = (prompt) => {
    getNewResponse(prompt)
  }

  return (
    <main>
      <Form sendPrompt={sendPrompt}/>
    </main>
  )
}

export default App
