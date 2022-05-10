import React, { useState, useEffect } from 'react'
import './App.css'
import Form from './Form'
import Response from './Response'
import { sendPrompt } from './apiCalls'

const App = () => {
  const [ responses, setResponses ] = useState([])

  // useEffect(() => {
  //   sendPrompt('Suggest one name for a horse.')
  // }, [])

  return (
    <main>
      <Form />
    </main>
  )
}

export default App
