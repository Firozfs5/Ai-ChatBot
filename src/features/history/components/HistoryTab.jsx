import React from "react";

function HistoryTab({
  //   chatHistory,
  newChatFunction,
  setCurrentSessionId,
  sessionOrder,
}) {
  return (
    <div className="p-4 ">
      <div
        onClick={newChatFunction}
        className="flex justify-center items-center bg-gray-600 rounded-2xl p-3 text-xl font-medium"
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
        &nbsp;
        <button>New Chat</button>
      </div>

      {/* chat history */}
      <div className="">
        <div className="mt-3">
          <span className="bg-zinc-800">Previous Chats</span>
        </div>
        <div className=" h-[82vh] overflow-y-auto chat-scroll">
          {sessionOrder.map((ele, idx) => {
            const preview = ele.content
              ? ele.content.slice(0, 25) + "..."
              : "New Chat";
            return (
              <div
                key={idx}
                onClick={() => setCurrentSessionId(ele)}
                className="w-50 text-left px-4 py-3 my-3 rounded-lg bg-[#383b40] text-white"
              >
                {preview}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default HistoryTab;
