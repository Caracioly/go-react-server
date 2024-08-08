import { ArrowRight } from "lucide-react";
import { useParams } from "react-router-dom";
import { createMessage } from "../http/create-message";
import { toast } from "sonner";

export function CreateMessageForm() {
  const { roomId } = useParams();

  if (!roomId) {
    throw new Error("Messages components must be used within room page.");
  }

  async function createMessageAction(data: FormData) {
    const message = data.get("message")?.toString();

    if (!message || !roomId) {
      return;
    }

    try {
      await createMessage({ message, roomId });
    } catch {
      toast.error("Falha ao enviar a pergunta, tente novamente.");
    }
  }

  return (
    <form
      action={createMessageAction}
      className="flex items-center gap-2 bg-zinc-900 p-2 rounded-xl border border-zinc-800 focus-within:border-orange-400"
    >
      <input
        name="message"
        placeholder="Qual a sua pergunta?"
        type="text"
        autoComplete="off"
        required
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
  );
}
