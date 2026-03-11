import { TrendingUp } from "lucide-react";

interface CardDetailsProps {
    nome: string;
    valor: string;
    percentual?: string;
    descricao?: string;
}

export default function CardDetails({nome, valor, percentual, descricao}: CardDetailsProps) {
    return (
        <div className="p-4 bg-white rounded-lg shadow-md border border-[#E2E8F0] w-58 flex">
            <div className="flex flex-col gap-5">
                <div className="text-base text-[#64748B]">{nome}</div>
                <div className="font-bold text-lg">{valor}</div>
                <div className="flex items-center gap-1">
                    <span className="text-[14px] text-[#1BED60] font-semibold">{percentual}</span>
                    <span className="text-[13px] text-[#64748B]">{descricao}</span>
                </div>
            </div>
            <div className="">
                <TrendingUp size={24} strokeWidth={2} className="text-green-500" />
            </div>
        </div>
    )
}