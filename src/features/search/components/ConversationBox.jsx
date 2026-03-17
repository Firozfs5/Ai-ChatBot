import React, { useEffect, useRef, useState } from "react";
import TypeBox from "./TypeBox";
import ChatBox from "./ChatBox";
import ChatSpiner from "../../../../shared/ChatSpiner";

function ConversationBox({
  addQueriesAnswers,
  setQuestion,
  question,
  chatHistory,
  currentSessionId,
}) {
  let [isLoader, setIsLoader] = useState(false);
  let bottomDiv = useRef(null);

  useEffect(() => {
    bottomDiv.current.scrollIntoView({ behavior: "smooth", block: "center" });
  }, [chatHistory, currentSessionId]);

  return (
    <div className="bg-[#101011] flex-1 px-4 text-white flex flex-col ">
      {/* header */}
      <div className="py-3 px-4 flex sticky top-0 bg-[#101011] justify-between items-center border-b border-[#424242]">
        <span className="text-lg font-semibold font-sans">ChatGPT</span>
        <div className="flex w-26  justify-between">
          <button className="text-lg font-semibold font-sans flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20px"
              viewBox="0 -960 960 960"
              width="20px"
              fill="#e3e3e3"
              className="mr-1"
            >
              <path d="M240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h120v80H240v400h480v-400H600v-80h120q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240Zm200-240v-447l-64 64-56-57 160-160 160 160-56 57-64-64v447h-80Z" />
            </svg>
            <span className="text-sm">Share</span>
          </button>
          <button className="text-lg font-semibold font-sans">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#e3e3e3"
            >
              <path d="M263.79-408Q234-408 213-429.21t-21-51Q192-510 213.21-531t51-21Q294-552 315-530.79t21 51Q336-450 314.79-429t-51 21Zm216 0Q450-408 429-429.21t-21-51Q408-510 429.21-531t51-21Q510-552 531-530.79t21 51Q552-450 530.79-429t-51 21Zm216 0Q666-408 645-429.21t-21-51Q624-510 645.21-531t51-21Q726-552 747-530.79t21 51Q768-450 746.79-429t-51 21Z" />
            </svg>
          </button>
        </div>
      </div>
      {/* header */}
      {/* chatbox */}
      <div className="bg-[#101011] flex justify-center items-center pb-[8%]">
        <div className=" w-3xl p-4 mt-4">
          <div className="">
            {chatHistory[currentSessionId]?.map((convoItem, idx) => (
              <ChatBox
                key={idx}
                role={convoItem.role}
                content={convoItem.content}
              />
            ))}
            {isLoader && <ChatSpiner />}
            <div ref={bottomDiv} />
          </div>
        </div>
      </div>
      <div className="fixed top-[88%] bg-[#101011] self-center  p-6 pt-2">
        <TypeBox
          question={question}
          setQuestion={setQuestion}
          addQueriesAnswers={addQueriesAnswers}
          chatHistory={chatHistory}
          setIsLoader={setIsLoader}
        />
      </div>
    </div>
  );
}

export default ConversationBox;
