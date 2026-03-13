import { useState } from "react";
import "./App.css";
import "highlight.js/styles/github.css";
import useAskAI from "./features/search/hooks/useAskAi";
import ChatBox from "./features/search/components/ChatBox";
import HistoryTab from "./features/history/components/HistoryTab";
import { WELCOME_MSG } from "./utils/constants";
//alternative for saying hello

function App() {
  const [question, setQuestion] = useState("");
  const { askQuestion } = useAskAI();

  const [chatHistory, setChatHistory] = useState(() => {
    const saved = localStorage.getItem("History");
    const DEFAULT_ID = Date.now().toString();
    if (saved) return JSON.parse(saved);
    let initial = { [DEFAULT_ID]: WELCOME_MSG };
    localStorage.setItem("History", JSON.stringify(initial));
    localStorage.setItem("sessionOrder", JSON.stringify([DEFAULT_ID]));
    return initial;
  });

  const [sessionOrder, setSessionOrder] = useState(() => {
    const sessionOrder = localStorage.getItem("sessionOrder");
    return sessionOrder ? JSON.parse(sessionOrder) : [];
  });

  const [currentSessionId, setCurrentSessionId] = useState(() => {
    const saved = localStorage.getItem("sessionOrder");
    return JSON.parse(saved)[0];
  });

  const addQueriesAnswers = (role, content) => {
    // setChatHistory((prev) => [...prev, { role: role, content: content }]);
    setChatHistory((prev) => {
      const updated = {
        ...prev,
        [currentSessionId]: [...prev[currentSessionId], { role, content }],
      };
      localStorage.setItem("History", JSON.stringify(updated));
      return updated;
    });
  };

  const newChatFunction = () => {
    const DEFAULT_ID = Date.now().toString();
    let newChatHistory = { ...chatHistory, [DEFAULT_ID]: WELCOME_MSG };
    setChatHistory(newChatHistory);
    setCurrentSessionId(DEFAULT_ID);
    setSessionOrder([DEFAULT_ID, ...sessionOrder]);
    localStorage.setItem("History", JSON.stringify(newChatHistory));
    localStorage.setItem(
      "sessionOrder",
      JSON.stringify([DEFAULT_ID, ...sessionOrder]),
    );
  };

  console.log(chatHistory);
  return (
    <>
      <div className="grid grid-cols-6 h-screen ">
        {/* left part for chat history section */}
        <div className="col-span-1 bg-zinc-800 text-white">
          <HistoryTab
            chatHistory={chatHistory}
            newChatFunction={newChatFunction}
            setCurrentSessionId={setCurrentSessionId}
            sessionOrder={sessionOrder}
          />
        </div>

        {/* right part for chat conversation */}
        <div className="col-span-5 min-h-screen p-10 px-15">
          <div className="container h-146 overflow-y-auto chat-scroll  pr-4 ">
            <div className="text-white text-left text-base chat-scroll">
              {chatHistory[currentSessionId].map((convoItem, idx) => (
                <ChatBox
                  key={idx}
                  role={convoItem.role}
                  content={convoItem.content}
                />
              ))}
            </div>
          </div>

          {/* type box */}
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
        {/* right part */}
      </div>
    </>
  );
}

export default App;
