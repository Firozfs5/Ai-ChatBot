import { useEffect, useState } from "react";

function ChatSpiner() {
  const messages = [
    "Thinking...",
    "Analyzing your question...",
    "Generating response...",
    "Almost there...",
    "Cooking something smart...",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [messages.length]);

  return (
    <div className="px-4 py-3 bg-[#101011] rounded-2xl w-fit max-w-xs">
      {/* Shimmer text */}
      <p className="text-gray-300 font-mono relative overflow-hidden">
        <span className="relative z-10">
          {messages[index]}
          <span className="animate-pulse">|</span>
        </span>

        {/* shimmer overlay */}
        <span className="absolute inset-0 bg-linear-to-r from-transparent " />
      </p>
    </div>
  );
}

export default ChatSpiner;
