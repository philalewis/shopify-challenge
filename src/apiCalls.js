const API_KEY = process.env.REACT_APP_API_KEY

export const getNewResponse = prompt => {
    const data = {
      prompt: prompt,
      temperature: 0.5,
    }
    
    return fetch("https://api.openai.com/v1/engines/text-curie-001/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
  }

  // max_tokens: 64,
  // top_p: 1.0,
  // frequency_penalty: 0.0,
  // presence_penalty: 0.0,