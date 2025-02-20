import { useChat } from "ai/react";
import Input from "../input/input";
import Message from "../message/message";
import Error from "../error/error";
import { motion, AnimatePresence } from "framer-motion";
import useChatScroll from "../../hooks/useChatScroll";
import "./chat.scss";

export default function Chat() {
  const {
    id,
    messages,
    input,
    handleInputChange,
    handleSubmit,
    isLoading,
    error,
  } = useChat({
    api: "http://localhost:8080/api/chat",
    async onToolCall({ toolCall }) {
      console.log("toolCall", toolCall);
      if (toolCall.toolName === "getItems") {
        console.log("Get items tool has been called!");
      } else if (toolCall.toolName === "getStoreStatistics") {
        console.log("Get store statistics has been called!");
      }
    },
  });
  const chatRef = useChatScroll([messages]);

  return (
    <motion.div
      className="chat-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="chat-messages-container" ref={chatRef}>
        <AnimatePresence>
          {messages.map((message) => (
            <motion.div
              className={`motion-container ${message.role}`}
              key={message.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Message message={message} chatId={id} />
            </motion.div>
          ))}
          {error && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Error message={error.message} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <Input
        id={"chat-input"}
        placeholder={"Type something here..."}
        value={input}
        isLoading={isLoading}
        onChange={handleInputChange}
        onSubmit={handleSubmit}
      />
    </motion.div>
  );
}
