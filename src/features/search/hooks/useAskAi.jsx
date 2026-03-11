// const askQuestion = async () => {
//   try {
//     const response = await fetch(URL, {
//       method: "POST",
//       headers: {
//         Authorization:
//           "Bearer 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",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         model: "nvidia/nemotron-3-nano-30b-a3b:free",
//         messages: [
//           {
//             role: "user",
//             content: question,
//           },
//         ],
//       }),
//     });

//     let dataString = await response.json();
//     console.log(dataString);

//     setResult(dataString.choices[0].message.content);
//   } catch (error) {
//     console.error(error);
//   }
// };

// export default askQuestion;

import { useState } from "react";
import { URL } from "../../../utils/constants";

function useAskAI() {
  const [loading, setLoading] = useState(false);

  const askQuestion = async (question, addQueriesAnswers) => {
    try {
      setLoading(true);

      const response = await fetch(URL, {
        method: "POST",
        headers: {
          Authorization:
            "Bearer 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",
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
      addQueriesAnswers("User", question);
      const data = await response.json();
      console.log(data);
      addQueriesAnswers("assistant", data.choices[0].message.content);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return { askQuestion, loading };
}

export default useAskAI;
