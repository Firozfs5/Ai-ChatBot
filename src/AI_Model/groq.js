const groq = async function (question) {
  let response = await fetch(
    "https://api.groq.com/openai/v1/chat/completions",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: "openai/gpt-oss-20b",
        messages: [
          {
            role: "user",
            content: question,
          },
        ],
      }),
    },
  );
  console.log(response);
  response = await response.json();
  return response.choices[0].message.content;
};
export default groq;
