import React, { useState } from 'react'

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
      <input
        type="text"
        onChange={event => handleChange(event)}
        value={input}
      />
      <button onClick={event => sendForm(event)}>Submit</button>
    </form>
  )
}

export default Form