import React, { useState } from 'react'

const Form = () => {
  const [ input, setInput ] = useState('')

  const handleChange = event => {
    event.preventDefault()
    setInput(event.target.value)
  }

  return (
    <form>
      <input type="text" onChange={event => handleChange(event)} value={input} />
    </form>
  )
}

export default Form