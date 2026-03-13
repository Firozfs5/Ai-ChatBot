import { URL } from "../utils/constants";

const openRouter = async function (question) {
  console.log(question);
  let response = await fetch(URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_OPENROUTER_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "nvidia/nemotron-3-nano-30b-a3b:free",
      messages: [
        {
          role: "user",
          content: question,
        },
      ],
    }),
  });
  response = await response.json();
  return response.choices[0].message.content;
};
export default openRouter;
