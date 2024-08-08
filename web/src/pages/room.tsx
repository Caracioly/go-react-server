import { ArrowRight, Share2 } from "lucide-react";
import { useParams } from "react-router-dom";
import { toast } from "sonner";

import amaLogo from "../assets/ama-logo.svg";

import { Message } from "../components/message";

export function Room() {
  const { roomId } = useParams();

  function handleShareRoom() {
    const url = window.location.href.toString();

    if (navigator.share !== undefined && navigator.canShare()) {
      navigator.share({ url });
    } else {
      navigator.clipboard.writeText(url);

      toast.info("The room URL has been copied to your clipboard");
    }
  }

  return (
    <div className="mx-auto max-w-[640px] flex flex-col gap-6 py-10 px-4">
      <div className="flex items-center gap-3 px-3">
        <img src={amaLogo} className="h-5" alt="AMA" />

        <span className="text-sm text-zinc-500 truncate">
          Código da sala: <span className="text-zinc-300">{roomId}</span>
        </span>

        <button
          onClick={handleShareRoom}
          type="button"
          className="bg-zinc-800 text-zinc-300 px-3 py-1.5 gap-1.5 flex items-center rounded-lg font-medium text-sm hover:bg-zinc-700 transition-colors ml-auto"
        >
          Compartilhar
          <Share2 className="h-4 w-4" />
        </button>
      </div>

      <div className="h-px w-full bg-zinc-900" />

      <form className="flex items-center gap-2 bg-zinc-900 p-2 rounded-xl border border-zinc-800 focus-within:border-orange-400">
        <input
          name="theme"
          placeholder="Qual a sua pergunta?"
          type="text"
          autoComplete="off"
          className="flex-1 bg-transparent text-sm mx-2 outline-none placeholder:text-zinc-500 text-zinc-100"
        />

        <button
          type="submit"
          className="bg-orange-400 text-orange-950 px-3 py-1.5 gap-1.5 flex items-center rounded-lg font-medium text-sm hover:bg-orange-500 transition-colors"
        >
          Criar pergunta
          <ArrowRight className="h-4 w-4" />
        </button>
      </form>

      <ol className="list-decimal list-outside px-3 space-y-8">
        <Message text="Primeira pergunta" amountOfReactions={10} answered />
        <Message text="Segunda pergunta" amountOfReactions={25} />
        <Message text="Terceria pergunta" amountOfReactions={6} />
        <Message text="Quarta pergunta" amountOfReactions={24} />
      </ol>
    </div>
  );
}
