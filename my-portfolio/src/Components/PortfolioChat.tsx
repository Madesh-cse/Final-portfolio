
import {
  useEffect,
  useRef,
  useState,
  type FormEvent,
  type KeyboardEvent,
} from "react";
import { getBotResponse, type BotResponse } from "../lib/chatbot";

type MessageSender = "user" | "bot";

interface ChatMessage {
  id: number;
  sender: MessageSender;
  text: string;
  links: BotResponse["links"];
  followUps: string[];
  isStreaming?: boolean;
}

const defaultSuggestions: string[] = [
  "Tell me about your projects",
  "What are your skills?",
  "Are you open to opportunities?",
  "How can I contact you?",
];

const greeting: ChatMessage = {
  id: 1,
  sender: "bot",
  text: "Hi! I'm Madesh's portfolio assistant. Ask me about my projects, skills, education, or how to get in touch.",
  links: [],
  followUps: [],
};

const isExternal = (url: string): boolean =>
  /^https?:\/\//i.test(url);

function PortfolioChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTeaser, setShowTeaser] = useState(false);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([greeting]);

  const nextId = useRef(2);
  const replyTimer = useRef<number | undefined>(undefined);
  const streamTimer = useRef<number | undefined>(undefined);
  const endRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const isStreaming = messages.some(
    (message) => message.isStreaming === true,
  );

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setShowTeaser(true);
    }, 4000);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    return () => {
      window.clearTimeout(replyTimer.current);
      window.clearInterval(streamTimer.current);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      endRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  }, [messages, isTyping, isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    setShowTeaser(false);

    const focusTimer = window.setTimeout(() => {
      inputRef.current?.focus();
    }, 250);

    return () => window.clearTimeout(focusTimer);
  }, [isOpen]);

  function sendMessage(text: string = input): void {
    const question = text.trim();

    if (!question || isTyping || isStreaming) return;

    window.clearTimeout(replyTimer.current);
    window.clearInterval(streamTimer.current);

    const userMessage: ChatMessage = {
      id: nextId.current++,
      sender: "user",
      text: question,
      links: [],
      followUps: [],
    };

    const response = getBotResponse(question);
    const botMessageId = nextId.current++;

    setMessages((previous) => [...previous, userMessage]);
    setInput("");
    setIsTyping(true);

    replyTimer.current = window.setTimeout(() => {
      setIsTyping(false);

      setMessages((previous) => [
        ...previous,
        {
          id: botMessageId,
          sender: "bot",
          text: "",
          links: [],
          followUps: [],
          isStreaming: true,
        },
      ]);

      let visibleCharacters = 0;
      const chunkSize = 3;
      const intervalMs = 16;

      streamTimer.current = window.setInterval(() => {
        visibleCharacters = Math.min(
          visibleCharacters + chunkSize,
          response.text.length,
        );

        const isComplete =
          visibleCharacters >= response.text.length;

        const visibleText = response.text.slice(
          0,
          visibleCharacters,
        );

        setMessages((previous) =>
          previous.map((message) =>
            message.id === botMessageId
              ? {
                  ...message,
                  text: visibleText,
                  links: isComplete ? response.links : [],
                  followUps: isComplete
                    ? response.followUps ?? []
                    : [],
                    isStreaming: !isComplete,
                }
              : message,
          ),
        );

        if (isComplete) {
          window.clearInterval(streamTimer.current);
          streamTimer.current = undefined;
        }
      }, intervalMs);
    }, 350);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    sendMessage();
  }

  function handleKeyDown(event: KeyboardEvent<HTMLElement>): void {
    if (event.key === "Escape") {
      setIsOpen(false);
    }
  }

  function clearChat(): void {
    window.clearTimeout(replyTimer.current);
    window.clearInterval(streamTimer.current);

    replyTimer.current = undefined;
    streamTimer.current = undefined;

    setIsTyping(false);
    setInput("");

    setMessages([
      {
        id: nextId.current++,
        sender: "bot",
        text: "Chat cleared! What would you like to explore next?",
        links: [],
        followUps: defaultSuggestions,
      },
    ]);
  }

  const lastBotMessage = [...messages]
    .reverse()
    .find((message) => message.sender === "bot");

  const suggestions = lastBotMessage?.followUps.length
    ? lastBotMessage.followUps
    : defaultSuggestions;

  return (
    <div className="portfolio-chat">
      <section
        className="chat-window"
        data-open={isOpen}
        aria-label="Portfolio chat assistant"
        aria-hidden={!isOpen}
        onKeyDown={handleKeyDown}
      >
        <header className="chat-header">
          <span className="chat-avatar" aria-hidden="true">
            M
          </span>

          <div className="chat-header-text">
            <h3>Portfolio Assistant</h3>
            <span>
              <i className="chat-online" aria-hidden="true" />
              Explore my work and skills
            </span>
          </div>

          <div className="chat-header-actions">
            <button
              type="button"
              onClick={clearChat}
              aria-label="Clear chat"
              title="Clear chat"
            >
              ↻
            </button>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
            >
              ×
            </button>
          </div>
        </header>

        <div
          className="chat-messages"
          role="log"
          aria-live="polite"
          aria-relevant="additions text"
        >
          {messages.map((message) => (
            <div
              key={message.id}
              className={[
                "chat-message",
                message.sender,
                message.isStreaming ? "is-streaming" : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <p className="chat-message-text">{message.text}</p>

              {message.links.length > 0 && (
                <div className="chat-message-links">
                  {message.links.map((link) => {
                    const external = isExternal(link.url);

                    return (
                      <a
                        key={`${link.label}-${link.url}`}
                        className="chat-link"
                        href={link.url}
                        target={external ? "_blank" : undefined}
                        rel={
                          external
                            ? "noopener noreferrer"
                            : undefined
                        }
                        onClick={() => {
                          // Only close for internal portfolio navigation.
                          // Email, phone, and external links keep the chat open.
                          if (link.url.startsWith("#")) {
                            setIsOpen(false);
                          }
                        }}
                      >
                        <span>{link.label}</span>
                        <span
                          className="chat-link-arrow"
                          aria-hidden="true"
                        >
                          ↗
                        </span>
                      </a>
                    );
                  })}
                </div>
              )}
            </div>
          ))}

          {isTyping && (
            <div
              className="chat-message bot chat-thinking"
              aria-label="Assistant is thinking"
            >
              <span className="chat-typing">
                <i />
                <i />
                <i />
              </span>
            </div>
          )}

          <div ref={endRef} />
        </div>

        {!isTyping && !isStreaming && (
          <div className="chat-suggestions" key={messages.length}>
            {suggestions.map((suggestion, index) => (
              <button
                key={suggestion}
                type="button"
                style={{ animationDelay: `${index * 0.06}s` }}
                onClick={() => sendMessage(suggestion)}
              >
                {suggestion}
              </button>
            ))}
          </div>
        )}

        <form className="chat-input-form" onSubmit={handleSubmit}>
          <input
            ref={inputRef}
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Ask about my portfolio..."
            aria-label="Ask about my portfolio"
            maxLength={200}
            disabled={isTyping || isStreaming}
          />

          <button
            type="submit"
            disabled={!input.trim() || isTyping || isStreaming}
            aria-label="Send message"
          >
            <span>Send</span>
            <span aria-hidden="true"> ↗</span>
          </button>
        </form>
      </section>

      {showTeaser && !isOpen && (
        <span className="chat-teaser">Ask me anything</span>
      )}

      <button
        type="button"
        className="chat-toggle"
        onClick={() => setIsOpen((open) => !open)}
        aria-label={isOpen ? "Close assistant" : "Open assistant"}
        aria-expanded={isOpen}
      >
        <svg
          viewBox="0 0 24 24"
          width="22"
          height="22"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          {isOpen ? (
            <path d="M6 6l12 12M18 6L6 18" />
          ) : (
            <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z" />
          )}
        </svg>
      </button>
    </div>
  );
}

export default PortfolioChat;
