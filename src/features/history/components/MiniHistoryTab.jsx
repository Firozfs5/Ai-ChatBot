import React, { useState } from "react";

function MiniHistoryTab({ newChatFunction, deleteAllChats, setTaskBarOpen }) {
  let [taskbarBtnVisi, setTaskbarBtnVisi] = useState(false);
  return (
    <div
      className="px-2 py-1 text-[15px]  "
      onMouseEnter={() => setTaskbarBtnVisi(true)}
      onMouseLeave={() => setTaskbarBtnVisi(false)}
      onClick={() => setTaskBarOpen((prev) => !prev)}
    >
      {/* header */}
      <div className="p-1 mb-4 flex items-center justify-center ">
        {!taskbarBtnVisi ? (
          <div className="h-8 w-8 ">
            <img src="/openaiLogo.svg" alt="logo" className="" />
          </div>
        ) : (
          <button className="h-8 w-8 pl-1 pt-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#8a8a8a"
            >
              <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm120-80v-560H200v560h120Zm80 0h360v-560H400v560Zm-80 0H200h120Z" />
            </svg>
          </button>
        )}
      </div>
      {/* header ends */}

      <div>
        <button
          onClick={newChatFunction}
          className="flex justify-left rounded-xl items-center p-2 hover:bg-[#303030]  w-[90%] mb-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="26px"
            viewBox="0 -960 960 960"
            width="26px"
            fill="#e3e3e3"
          >
            <path d="M120-160v-600q0-33 23.5-56.5T200-840h480q33 0 56.5 23.5T760-760v203q-10-2-20-2.5t-20-.5q-10 0-20 .5t-20 2.5v-203H200v400h283q-2 10-2.5 20t-.5 20q0 10 .5 20t2.5 20H240L120-160Zm160-440h320v-80H280v80Zm0 160h200v-80H280v80Zm400 280v-120H560v-80h120v-120h80v120h120v80H760v120h-80ZM200-360v-400 400Z" />
          </svg>
        </button>
      </div>

      <div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            deleteAllChats();
          }}
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
        </button>
      </div>
    </div>
  );
}

export default MiniHistoryTab;
