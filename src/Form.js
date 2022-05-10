import React, { useState } from 'react'
import './Form.css'

const Form = ({ sendPrompt }) => {
  const [ input, setInput ] = useState('')

  const handleChange = event => {
    event.preventDefault()
    setInput(event.target.value)
  }

  const sendForm = event => {
    event.preventDefault()
    sendPrompt(input)
    setInput('')
  }

  return (
    <form>
      <h3>Enter Prompt</h3>
      <input
        type="text"
        className="text-input"
        onChange={event => handleChange(event)}
        value={input}
      />
      <button onClick={event => sendForm(event)}>Submit</button>
    </form>
  )
}

export default Form