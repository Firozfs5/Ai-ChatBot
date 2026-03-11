import { useState } from "react";
import "./App.css";
import "highlight.js/styles/github.css";
import useAskAI from "./features/search/hooks/useAskAi";
import ChatBox from "./features/search/components/ChatBox";
//alternative for saying hello

function App() {
  const [question, setQuestion] = useState("");
  const { askQuestion } = useAskAI();
  const [conversation, setConversation] = useState([
    { role: "assistant", content: "Welcome! What can I help you with?" },
  ]);

  const addQueriesAnswers = (role, content) => {
    setConversation((prev) => [...prev, { role: role, content: content }]);
  };
  console.log(conversation);

  return (
    <>
      <div className="grid grid-cols-5 h-screen text-center">
        <div className="col-span-1 bg-zinc-800"></div>

        <div className="col-span-4 p-10">
          <div className="container h-146 overflow-y-auto chat-scroll  pr-4">
            <div className="text-white text-left text-lg chat-scroll">
              {conversation.map((convoItem, idx) => (
                <ChatBox
                  key={idx}
                  role={convoItem.role}
                  content={convoItem.content}
                />
              ))}
            </div>
          </div>
          <div className="bg-zinc-800 w-1/2 p-1 pr-5 text-white m-auto h-16 rounded-4xl flex border border-zinc-700">
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
        </div>
      </div>
    </>
  );
}

export default App;
