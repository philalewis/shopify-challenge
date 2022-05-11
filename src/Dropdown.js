import React from 'react'
import './Dropdown.css'

const Dropdown = ({setEngine}) => {
  return (
    <select
      onChange={event => setEngine(event.target.value)}
      defaultValue="text-curie-001"
    >
      <option value="ada">ada</option>
      <option value="babbage">babbage</option>
      <option value="curie">curie</option>
      <option value="curie-instruct-beta">curie-instruct-beta</option>
      <option value="davinci">davinci</option>
      <option value="davinci-instruct-beta">davinci-instruct-beta</option>
      <option value="text-ada-001">text-ada-001</option>
      <option value="text-babbage-001">text-babbage-001</option>
      <option value="text-curie-001">text-curie-001</option>
      <option value="text-davinci-001">text-davinci-001</option>
      <option value="text-davinci-002">text-davinci-002</option>
    </select>
  )
}

export default Dropdown