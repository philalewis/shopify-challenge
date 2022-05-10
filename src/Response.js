import React from 'react'
import './Response.css'

const Response = ({ responses }) => {
  const buildResponses = () => {
    return responses.map((response, i) => {
      return <article key={i} className="response-card">
        <h4>Prompt: </h4>
        <p>{response.prompt}</p>
        <h4>Response: </h4>
        <p>{response.response}</p>
      </article>
    })
  }

  return (
    <section>
      <h2 className="response-header">Responses</h2>
      <div className="responses">
        { buildResponses() }
      </div>
    </section>
  )
}

export default Response