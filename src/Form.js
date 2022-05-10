import React, { useState } from 'react'

const Form = ({ sendPrompt }) => {
  const [ input, setInput ] = useState('')

  const handleChange = event => {
    event.preventDefault()
    setInput(event.target.value)
  }

  const sendForm = () => {
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
      <button onClick={sendForm}>Submit</button>
    </form>
  )
}

export default Form