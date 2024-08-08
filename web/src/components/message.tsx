import { useState } from "react";

import { ArrowUp } from "lucide-react";

interface MessageProps {
  text: string;
  amountOfReactions: number;
  answered?: boolean;
}

export function Message({ text, amountOfReactions, answered = false }: MessageProps) {
  const [hasReacted, setHasReacted] = useState(false);

  function handleReactToMessage() {
    setHasReacted(true);
  }

  return (
    <li data-answered={answered} className="ml-4 leading-relaxed text-zinc-100 data-[answered=true]:opacity-50 data-[answered=true]:pointer-events-none">
      {text}
      {hasReacted ? (
        <button
          type="button"
          className="mt-3 flex items-center text-orange-400 gap-2 font-medium hover:text-orange-500"
        >
          <ArrowUp className="size-4" />
          Curtir pergunta ({amountOfReactions})
        </button>
      ) : (
        <button
          onClick={handleReactToMessage}
          type="button"
          className="mt-3 flex items-center text-zinc-400 gap-2 font-medium hover:text-zinc-300"
        >
          <ArrowUp className="size-4" />
          Curtir pergunta ({amountOfReactions})
        </button>
      )}
    </li>
  );
}