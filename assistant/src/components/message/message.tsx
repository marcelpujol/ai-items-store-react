import { Message as AiMessage } from "ai";
import Markdown from "react-markdown";
import Icon from "../icon/icon";
import ItemCard from "../itemCard/itemCard";
import "./message.scss";
import Federated from "../federated/federated";

interface MessageProps {
  message: AiMessage;
  chatId: string;
}

const Message: React.FC<MessageProps> = ({ message, chatId }) => {
  const getMessageStyle = () => {
    const style = `message-container`;
    if (message.role === "user") return `${style} user-msg`;
    return `${style} assistant-msg`;
  };

  const renderToolInvocation = () => {
    if (!message.toolInvocations || !message.toolInvocations.length)
      return null;

    return message.toolInvocations?.map((toolInvocation) => {
      const { toolName, toolCallId, state } = toolInvocation;
      if (state === "result") {
        const { result } = toolInvocation;
        if (toolName === "getItems") {
          console.log("result", result);
          return (
            <div key={`${toolCallId}`} className="items-result">
              {result?.map((data, index) => {
                return (
                  <ItemCard
                    key={`item-card-${index}`}
                    chatId={chatId}
                    item={data}
                  />
                );
              })}
            </div>
          );
        } else if (toolName === "getStoreStatistics") {
          return (
            <div key={`${toolCallId}`} className="items-result">
              <Federated
                appName={"remote"}
                componentName={"StoreStatistics"}
                data={result}
                id={message.id}
              />
            </div>
          );
        }
      }
      return null;
    });
  };

  return (
    <div className={getMessageStyle()}>
      <Markdown>{message.content}</Markdown>
      {renderToolInvocation()}
      {message.role === "assistant" && (
        <Icon icon={"smart_toy"} customClass="assistant-icon" />
      )}
    </div>
  );
};

export default Message;
