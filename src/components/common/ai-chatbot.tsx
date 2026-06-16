"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  AnimatePresence,
  motion,
} from "framer-motion";

import {
  Bot,
  Send,
  X,
} from "lucide-react";

import ReactMarkdown from "react-markdown";

interface Message {
  id: number;
  role: "user" | "assistant";
  content: string;
}

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);

  const [messages, setMessages] =
    useState<Message[]>([]);

  const [input, setInput] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const messagesEndRef =
    useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      role: "user",
      content: input,
    };

    setMessages((prev) => [
      ...prev,
      userMessage,
    ]);

    setInput("");

    try {
      setLoading(true);

      const response = await fetch(
        "/api/chat",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            messages: [
              ...messages,
              userMessage,
            ],
          }),
        }
      );

      const data =
        await response.json();

      const assistantMessage: Message = {
        id: Date.now() + 1,
        role: "assistant",
        content:
          data.content ||
          "Something went wrong.",
      };

      setMessages((prev) => [
        ...prev,
        assistantMessage,
      ]);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* FLOATING BUTTON */}
      <button
        onClick={() =>
          setIsOpen(!isOpen)
        }
        className="
          fixed bottom-5 right-5 z-50 group
          sm:bottom-6 sm:right-6
        "
      >
        <div className="absolute inset-0 rounded-full bg-blue-500 blur-xl opacity-70 transition-all duration-500 group-hover:scale-150" />

        <div className="relative rounded-full border border-white/10 bg-blue-500 p-4 shadow-2xl transition-all hover:scale-110">
          {isOpen ? (
            <X />
          ) : (
            <Bot />
          )}
        </div>
      </button>

      {/* CHAT PANEL */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 30,
              scale: 0.95,
            }}
            transition={{
              duration: 0.25,
            }}
            className="
              fixed bottom-20 left-1/2 z-50
              flex h-[75vh] w-[95vw]
              -translate-x-1/2
              flex-col overflow-hidden
              rounded-4xl
              border border-white/10
              bg-black/80
              shadow-[0_0_50px_rgba(59,130,246,0.15)]
              backdrop-blur-2xl
              pb-[env(safe-area-inset-bottom)]

              sm:bottom-24
              sm:left-auto
              sm:right-6
              sm:h-96
              sm:w-96
              sm:translate-x-0
            "
          >
            {/* HEADER */}
            <div className="relative overflow-hidden border-b border-white/10 p-5">
              
              <div className="absolute inset-0 bg-linear-to-r from-blue-500/10 to-purple-500/10" />

              <div className="relative flex items-center gap-4">
                
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-blue-500 blur-md" />

                  <div className="relative rounded-full border border-white/10 bg-blue-500/20 p-3">
                    <Bot size={20} />
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white">
                    AI Assistant
                  </h3>

                  <p className="text-sm text-zinc-400">
                    Ask anything about Shubham
                  </p>
                </div>
              </div>
            </div>

            {/* MESSAGES */}
            <div
              className="
                flex-1 space-y-5 overflow-y-auto
                p-4 sm:p-5
                scrollbar-thin
                scrollbar-thumb-zinc-700
                scrollbar-track-transparent
              "
            >
              {messages.length === 0 && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  className="
                      rounded-3xl
                      border border-white/10
                      bg-linear-to-br
                      from-white/5
                      to-white/2
                      p-5
                      text-sm text-zinc-300
                    "
                >
                  <p className="mb-4 text-base font-medium text-white">
                    👋 Welcome
                  </p>

                  <div className="space-y-2">
                    <p>
                      • Tell me about projects
                    </p>

                    <p>
                      • What backend tech does he use?
                    </p>

                    <p>
                      • Explain his experience
                    </p>

                    <p>
                      • What are his achievements?
                    </p>
                  </div>
                </motion.div>
              )}

              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  className={`flex ${
                    message.role === "user"
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[90%] rounded-3xl px-5 py-4 text-sm leading-relaxed shadow-lg sm:max-w-[85%] ${
                      message.role === "user"
                        ? "bg-linear-to-r from-blue-500 to-blue-600 text-white"
                        : "border border-white/10 bg-white/4 text-zinc-200 backdrop-blur-xl"
                    }`}
                  >
                    <div className="prose prose-invert prose-sm max-w-none">
                      <ReactMarkdown
                        components={{
                          strong: ({
                            children,
                          }) => (
                            <span className="font-semibold text-blue-400">
                              {children}
                            </span>
                          ),

                          li: ({
                            children,
                          }) => (
                            <li className="mb-1 text-zinc-300">
                              {children}
                            </li>
                          ),
                        }}
                      >
                        {message.content
                          .replace(
                            /Next\.js/g,
                            "**Next.js**"
                          )
                          .replace(
                            /React/g,
                            "**React**"
                          )
                          .replace(
                            /Spring Boot/g,
                            "**Spring Boot**"
                          )
                          .replace(
                            /Node\.js/g,
                            "**Node.js**"
                          )
                          .replace(
                            /MongoDB/g,
                            "**MongoDB**"
                          )
                          .replace(
                            /PostgreSQL/g,
                            "**PostgreSQL**"
                          )}
                      </ReactMarkdown>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* TYPING */}
              {loading && (
                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  className="flex items-center gap-2 px-2"
                >
                  <div className="h-2 w-2 animate-bounce rounded-full bg-blue-400" />

                  <div className="h-2 w-2 animate-bounce rounded-full bg-blue-400" style={{ animationDelay: "0.2s" }} />

                  <div className="h-2 w-2 animate-bounce rounded-full bg-blue-400" style={{ animationDelay: "0.4s" }} />
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* INPUT */}
            <form
              onSubmit={handleSubmit}
              className="border-t border-white/10 p-4"
            >
              <div
                className="
                  flex items-center gap-2
                  rounded-2xl border border-white/10
                  bg-white/3
                  p-2
                  backdrop-blur-xl

                  sm:gap-3
                "
              >
                <input
                  value={input}
                  onChange={(e) =>
                    setInput(e.target.value)
                  }
                  placeholder="Ask something..."
                  className="
                    flex-1 bg-transparent
                    px-2 py-2
                    text-[13px]
                    outline-none
                    placeholder:text-zinc-500

                    sm:px-3
                    sm:text-sm
                  "
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="
                      rounded-xl
                      bg-linear-to-r
                      from-blue-500
                      to-blue-600
                      p-3
                      transition-all
                      hover:scale-105
                      disabled:opacity-50
                    "
                >
                  <Send size={18} />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

