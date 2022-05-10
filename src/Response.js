import React from 'react'

const Response = ({ responses }) => {
  const buildResponses = () => {
    return responses.map(response => {
      return <article className="response-card">
        {console.log(response)}
        <h4>Prompt: </h4>
        <p>{response.prompt}</p>
        <h4>Response: </h4>
        <p>{response.response}</p>
      </article>
    })
  }

  return (
    <section>
      { buildResponses() }
    </section>
  )
}

export default Response