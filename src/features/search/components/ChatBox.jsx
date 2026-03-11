import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

const ChatBox = ({ role, content }) => {
  if (role == "assistant") {
    return (
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
      >
        {content}
      </ReactMarkdown>
    );
  }

  return (
    <div className="w-full flex justify-end ">
      <div className="bg-[#003f7a] p-3 rounded-3xl mb-6 mt-6">{content}</div>
    </div>
  );
};

export default ChatBox;
