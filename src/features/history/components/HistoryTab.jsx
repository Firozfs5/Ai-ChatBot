import React from "react";

function HistoryTab({
  newChatFunction,
  setCurrentSessionId,
  chatHistory,
  sessionOrder,
  deleteAllChats,
  setChatHistory,
  setSessionOrder,
  currentSessionId,
}) {
  function deleteChat(chatId) {
    setChatHistory((prev) => {
      const { [chatId]: _, ...rest } = prev;
      localStorage.setItem("History", JSON.stringify(rest));
      return rest;
    });

    setSessionOrder((prev) => {
      const updated = prev.filter((item) => item !== chatId);

      // 🔥 if current chat deleted → switch to another
      if (chatId === currentSessionId) {
        setCurrentSessionId(updated[0] || null);
      }
      localStorage.setItem("sessionOrder", JSON.stringify(updated));

      return updated;
    });
  }

  return (
    <div className="px-2 py-1 text-[15px] ">
      {/* header */}
      <div className="p-1 mb-4 flex items-center justify-between">
        <div className="h-8 w-8 ">
          <img src="/openaiLogo.svg" alt="logo" className="" />
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#8a8a8a"
          >
            <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm120-80v-560H200v560h120Zm80 0h360v-560H400v560Zm-80 0H200h120Z" />
          </svg>
        </div>
      </div>
      {/* header ends */}

      <div>
        <button
          onClick={newChatFunction}
          className="flex justify-left rounded-xl items-center p-2 hover:bg-[#303030]  w-[90%] mb-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#e3e3e3"
          >
            <path d="M120-160v-600q0-33 23.5-56.5T200-840h480q33 0 56.5 23.5T760-760v203q-10-2-20-2.5t-20-.5q-10 0-20 .5t-20 2.5v-203H200v400h283q-2 10-2.5 20t-.5 20q0 10 .5 20t2.5 20H240L120-160Zm160-440h320v-80H280v80Zm0 160h200v-80H280v80Zm400 280v-120H560v-80h120v-120h80v120h120v80H760v120h-80ZM200-360v-400 400Z" />
          </svg>
          &nbsp; <span className="text-white">New Chat</span>
        </button>
      </div>

      <div>
        <button
          onClick={() => deleteAllChats()}
          className="flex justify-left rounded-xl items-center p-2 hover:bg-[#303030]  w-[90%] mb-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#e3e3e3"
          >
            <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
          </svg>
          &nbsp; <span className="text-white">Delete All</span>
        </button>
      </div>

      {/* chat history */}
      <div className="">
        <div className="mt-3">
          <span className="text-[#afafaf] mb-22 p-3 pl-2">Previous Chats</span>
        </div>
        <div className=" h-[82vh] overflow-y-auto chat-scroll">
          {sessionOrder.map((ele, idx) => {
            // console.log(ele);
            const preview = chatHistory[sessionOrder[idx]][1]?.content
              ? chatHistory[sessionOrder[idx]][1]?.content.slice(0, 25) + "..."
              : "New Chat";

            return (
              <div
                key={idx}
                onClick={() => setCurrentSessionId(ele)}
                className="group flex justify-between rounded-xl text-white items-center p-2 hover:bg-[#303030]  w-[90%] mb-1"
              >
                <span>{preview}</span>
                <span
                  onClick={() => {
                    deleteChat(ele);
                  }}
                  className="group-hover:opacity-100 opacity-0 transition duration-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#e3e3e3"
                  >
                    <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
                  </svg>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default HistoryTab;
