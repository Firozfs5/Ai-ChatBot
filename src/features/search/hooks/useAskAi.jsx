// // import groq from "../../../AI_Model/groq";
// import openRouter from "../../../AI_Model/openRouter";

// function useAskAI() {
//   const askQuestion = async (question, addQueriesAnswers, setIsLoader) => {
//     try {
//       setIsLoader(true);
//       addQueriesAnswers("user", question);
//       let response = await openRouter(question);
//       addQueriesAnswers("assistant", response);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return { askQuestion };
// }

// export default useAskAI;

import openRouter from "../../../AI_Model/openRouter";

function useAskAI() {
  const askQuestion = async (question, addQueriesAnswers, setIsLoader) => {
    try {
      setIsLoader(true);
      addQueriesAnswers("user", question);
      let response = await openRouter(question);
      addQueriesAnswers("assistant", response);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoader(false); // 👈 this was missing!
    }
  };

  return { askQuestion };
}

export default useAskAI;
