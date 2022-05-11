import React from 'react'
import './Response.css'

const Response = ({ responses }) => {
  const buildResponses = () => {
    if (responses.length > 0) {
      return responses.map((response, i) => {
        return <article key={i} className="response-card">
          <h4>Prompt: </h4>
          <p className="prompt-value">{response.prompt}</p>
          <h4>Response: </h4>
          <p className="response-value">{response.response.trim()}</p>
        </article>
      })
    } else {
      return <p>You have not submitted any prompts yet.</p>
    }
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