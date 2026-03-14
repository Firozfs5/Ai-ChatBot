import React from "react";
import useAskAI from "../hooks/useAskAi";

function TypeBox({ addQueriesAnswers, setQuestion, question }) {
  const { askQuestion } = useAskAI();

  return (
    <div className="bg-[#303030] w-200 p-1   pr-5 text-white m-auto h-16 rounded-4xl flex border border-zinc-700">
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        className="outline-none w-full h-full p-3"
        placeholder="Ask Me Anything"
      />
      <button onClick={() => askQuestion(question, addQueriesAnswers)}>
        Ask
      </button>
    </div>
  );
}

export default TypeBox;
