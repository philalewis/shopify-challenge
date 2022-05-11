const API_KEY = process.env.REACT_APP_API_KEY

export const getNewResponse = (prompt, engine) => {
  const data = {
    prompt: prompt,
    temperature: 0.5,
    max_tokens: 64
  }
  
  return fetch(`https://api.openai.com/v1/engines/${engine}/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify(data),
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(response.message)
    } else {
      console.log(response)
      return response.json()
    }
  })
}
