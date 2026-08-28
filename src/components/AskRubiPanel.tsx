"use client";

import * as React from "react";
import { ArrowUp, X } from "lucide-react";

export type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  text: string;
};

const SUGGESTIONS = [
  "What has Rubi built?",
  "Where has she worked?",
  "How do I get in touch?",
];

const GREETING: ChatMessage = {
  id: "greeting",
  role: "assistant",
  text: "Hi! Ask me anything about Rubi — her projects, her experience, or how to reach her.",
};

interface AskRubiPanelProps {
  open: boolean;
  onClose: () => void;
}

export default function AskRubiPanel({ open, onClose }: AskRubiPanelProps) {
  const [messages, setMessages] = React.useState<ChatMessage[]>([GREETING]);
  const [draft, setDraft] = React.useState("");
  const inputRef = React.useRef<HTMLInputElement>(null);
  const listEndRef = React.useRef<HTMLDivElement>(null);
  const panelRef = React.useRef<HTMLDivElement>(null);

  // Close on Escape, and hand focus to the input as soon as the panel opens.
  React.useEffect(() => {
    if (!open) return;

    inputRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  React.useEffect(() => {
    listEndRef.current?.scrollIntoView({ block: "end", behavior: "smooth" });
  }, [messages]);

  const send = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    setDraft("");
    setMessages((prev) => [
      ...prev,
      { id: `u-${Date.now()}`, role: "user", text: trimmed },
      {
        // TODO: replace this canned reply with a real answer — POST the
        // conversation to an /api/chat route and append the response here.
        id: `a-${Date.now()}`,
        role: "assistant",
        text: "The chat isn't connected to a brain yet — but your message came through. In the meantime, the Projects and Blog pages have the details.",
      },
    ]);
  };

  if (!open) return null;

  return (
    <div
      ref={panelRef}
      role="dialog"
      aria-modal="false"
      aria-label="Ask about Rubi"
      className="animate-in fade-in-0 slide-in-from-bottom-4 duration-200 flex h-[27rem] max-h-[calc(100dvh-8rem)] w-[22rem] max-w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-2xl border border-panel-text/25 bg-panel-bg shadow-2xl shadow-panel-text/25"
    >
      <header className="flex items-center justify-between gap-2 border-b border-panel-text/20 px-4 py-3">
        <div className="flex flex-col">
          <span className="text-base font-semibold text-panel-text">
            Ask about Rubi
          </span>
          <span className="text-sm text-panel-text/70">
            Projects, experience, contact
          </span>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close chat"
          className="cursor-pointer rounded-full p-1.5 text-panel-text/70 transition-colors hover:bg-panel-text/10 hover:text-panel-text focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-panel-text"
        >
          <X className="size-4" />
        </button>
      </header>

      <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={
              message.role === "user" ? "flex justify-end" : "flex justify-start"
            }
          >
            <p
              className={
                message.role === "user"
                  ? "max-w-[85%] rounded-2xl rounded-br-sm bg-panel-text px-3 py-2 text-base leading-relaxed text-brand-yellow"
                  : "max-w-[85%] rounded-2xl rounded-bl-sm bg-panel-text/10 px-3 py-2 text-base leading-relaxed text-panel-text"
              }
            >
              {message.text}
            </p>
          </div>
        ))}

        {messages.length === 1 && (
          <ul className="flex flex-wrap gap-2 pt-1">
            {SUGGESTIONS.map((suggestion) => (
              <li key={suggestion}>
                <button
                  type="button"
                  onClick={() => send(suggestion)}
                  className="cursor-pointer rounded-full border border-panel-text/30 px-3 py-1 text-sm text-panel-text/80 transition-colors hover:border-panel-text hover:text-panel-text focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-panel-text"
                >
                  {suggestion}
                </button>
              </li>
            ))}
          </ul>
        )}

        <div ref={listEndRef} />
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          send(draft);
        }}
        className="flex items-center gap-2 border-t border-panel-text/20 px-3 py-3"
      >
        <input
          ref={inputRef}
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          placeholder="Ask a question…"
          aria-label="Your question"
          className="min-w-0 flex-1 rounded-full border border-panel-text/30 bg-transparent px-4 py-2 text-base text-panel-text outline-none transition-colors placeholder:text-panel-text/60 focus:border-panel-text"
        />
        <button
          type="submit"
          disabled={!draft.trim()}
          aria-label="Send message"
          className="inline-flex size-9 shrink-0 cursor-pointer items-center justify-center rounded-full bg-panel-text text-brand-yellow transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-panel-text disabled:cursor-not-allowed disabled:opacity-40"
        >
          <ArrowUp className="size-4" />
        </button>
      </form>
    </div>
  );
}
