import React, { useState } from 'react'
import './Form.css'
import Dropdown from './Dropdown'

const Form = ({ sendPrompt }) => {
  const [ input, setInput ] = useState('')
  const [ engine, setEngine ] = useState('text-curie-001')

  const handleChange = event => {
    event.preventDefault()
    setInput(event.target.value)
  }

  const sendForm = event => {
    event.preventDefault()
    sendPrompt(input, engine)
    setInput('')
  }

  return (
    <form>
      <h3 className="prompt">Enter Prompt</h3>
      <textarea
        className="text-input"
        onChange={event => handleChange(event)}
        value={input}
        rows="4"
        cols="50"
      ></textarea>
      <div className="dropdown-button-container">
        <Dropdown setEngine={setEngine}/>
        <button
          className="submit-form"
          onClick={event => sendForm(event)}>
          Submit
        </button>
      </div>
    </form>
  )
}

export default Form