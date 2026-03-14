// import groq from "../../../AI_Model/groq";
import openRouter from "../../../AI_Model/openRouter";

function useAskAI() {
  const askQuestion = async (question, addQueriesAnswers) => {
    try {
      addQueriesAnswers("User", question);
      let response = await openRouter(question);
      addQueriesAnswers("assistant", response);
    } catch (error) {
      console.error(error);
    }
  };

  return { askQuestion };
}

export default useAskAI;
