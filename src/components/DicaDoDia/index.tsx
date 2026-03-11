import { Lightbulb } from "lucide-react";
import { useEffect, useState } from "react";
import { dicaDoDia } from "../../mocks/dicaDoDia";

export default function DicaDoDia() {
  const [dicaAtual, setDicaAtual] = useState("");

  useEffect(() => {
    const indiceAleatorio = Math.floor(Math.random() * dicaDoDia.length);
    setDicaAtual(dicaDoDia[indiceAleatorio].descricao);
  }, []);

    return (
        <div className="p-4 bg-white rounded-lg shadow-md border border-[#E2E8F0] w-50  flex flex-col gap-3">
            <div className="flex w-40 gap-2 items-center mb-3">
                <span className="font-bold text-lg text-[#24282c]">Dica do Dia</span>
            </div>
            <div 
                className="flex items-center gap-4 hover:bg-[#1BED60] hover:text-[#24282c] cursor-pointer h-auto"
            >
              <div className="flex h-full">
                <Lightbulb size={28} className="text-[#1BED60] fill-current" strokeWidth={3}/>
              </div>
              <div className="">
                <p className="text-sm text-zinc-500">{dicaAtual}</p>
              </div>
            </div>
        </div>
    )
}