import { useEffect, useRef, useState } from "react";

export default function useChatScroll(dependencies: any[] = []) {
  const chatRef = useRef<HTMLDivElement>(null);
  const [isAtBottom, setIsAtBottom] = useState(true);

  const scrollToBottom = () => {
    if (chatRef.current && isAtBottom) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  };

  const handleScroll = () => {
    if (!chatRef.current) return;
    const { scrollTop, scrollHeight, clientHeight } = chatRef.current;
    setIsAtBottom(scrollHeight - scrollTop <= clientHeight + 50); // 50px threshold
  };

  useEffect(() => {
    scrollToBottom();
  }, dependencies); // Auto-scroll when dependencies change

  useEffect(() => {
    const chatElement = chatRef.current;
    if (chatElement) {
      chatElement.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (chatElement) {
        chatElement.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return chatRef;
}
