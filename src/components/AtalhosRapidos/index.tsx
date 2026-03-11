import { SquarePlus, SquarePlusIcon, Zap } from "lucide-react";
import { useRouter } from "next/navigation";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { RiAddBoxFill } from "react-icons/ri";


export default function AtalhosRapidos() {
    const router = useRouter()
    return (
        <div className="p-4 bg-white rounded-lg shadow-md border border-[#E2E8F0] w-50 flex flex-col gap-3">
            <div className="flex w-40 gap-2 items-center mb-3">
                <Zap className="text-[#1BED60] fill-current"/>
                <span className="font-bold text-lg text-[#24282c]">Atalhos Rápidos</span>
            </div>
            <div 
                className="border border-zinc-200 rounded-lg p-4 flex items-center gap-4 hover:bg-[#1BED60] hover:text-[#24282c] group cursor-pointer"
                onClick={() => router.push("/vendas")}
            >
                <div className="border rounded-lg p-2 bg-[#D0FBDE] border-transparent text-[#1BED60] group-hover:text-[#24282c]">
                    <MdOutlineAddShoppingCart size={22}/>
                </div>
                <div className="text-sm text-[#24282c] font-semibold w-18">
                    Nova venda
                </div>

            </div>
            <div 
                className="border border-zinc-200 rounded-lg p-4 flex items-center gap-4 hover:bg-[#1BED60] hover:text-[#24282c] group cursor-pointer"
                onClick={() => router.push("/produtos")}
            >
                <div className="border rounded-lg p-2 bg-[#D0FBDE] border-transparent text-[#1BED60] group-hover:text-[#24282c]">
                    <RiAddBoxFill size={24}/>
                </div>
                <div className="text-sm text-[#24282c] font-semibold w-18">
                    Cadastrar Produto
                </div>

            </div>
            <div className=""></div>
        </div>
    )
}
