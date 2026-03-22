"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import Menu from "../Menu/Menu"
import { Store } from "lucide-react";
import { usePathname } from "next/navigation";

interface PaginaProps {
    children?: any
}

export default function Pagina(props: PaginaProps) {
    const pathname = usePathname();
    const [isMenuExpanded, setIsMenuExpanded] = useState(true)
    const router = useRouter()

    let  cabeçalho = "";

    switch (pathname) {
        case "/dashboard":
         cabeçalho = "Dashboard";
        break;
        case "/produtos":
         cabeçalho = "Cadastro de Produtos";
        break;
        case "/vendas":
         cabeçalho = "Realizar Vendas";
        break;
        case "/relatorios":
         cabeçalho = "Relatórios";
        break;
        case "/tipoPagamento":
         cabeçalho = "Tipo de Pagamento";
        break;
        default:
         cabeçalho = "Página";
    }

   
    return (
        <div className="flex min-h-screen">
            <div className={`sticky top-0 flex min-h-screen flex-col bg-white transition-all duration-300 ${isMenuExpanded ? 'w-62' : 'w-20'} border-r`}>
                <div className={`h-20 text-green-500 flex items-center gap-2 ${isMenuExpanded ? 'pl-2' : 'justify-center'}`}>
                   <div className="bg-[#D0FBDE] px-3 py-3 rounded-xl shrink-0">
                    <Store strokeWidth={2.5}/>
                   </div>
                   {isMenuExpanded && (
                       <div className="flex flex-col items-start">
                           <span className="font-bold text-lg">Mercadinho</span>
                           <span className="text-[12px] text-[#61896F]">Gestão Inteligente</span>
                       </div>
                   )}
                </div>
                <nav className="flex-1">
                  <Menu onExpandChange={setIsMenuExpanded} />
                </nav>
                <div className=" h-20 w-full flex justify-center items-center border-t">
                    <div className="h-6 w-6 rounded-full bg-gray-400 m-2 flex items-center justify-center shrink-0">
                        B
                    </div>
                    {isMenuExpanded && (
                        <>
                            <div className="flex flex-col justify-center items-center pl-5">
                                <div className="text-lg font-bold">Nome</div>
                                <div className="text-sm">Cargo</div>
                            </div>
                            <div className="flex-1 flex items-center justify-end">
                                sair
                            </div>
                        </>
                    )}
                </div>
            </div>
            <main className="flex min-h-screen w-full flex-1 flex-col">
                <header className=" bg-white w-full border-b px-6 py-2 flex items-center justify-between">
                    <div className="flex flex-col">
                        <span className="text-black font-bold text-xl">
                            {cabeçalho}
                        </span>
                       
                        <span className="text-zinc-500 text-[13px]">
                            {new Date().toLocaleDateString('pt-BR', {
                                day: '2-digit',
                                month: 'long',
                                year: 'numeric'
                            })}
                        </span>
                    </div>
                     {cabeçalho === "Dashboard" && (
                            <span className="text-zinc-800 text-[16px] font-semibold">
                               Visão geral do seu Mercado !
                            </span>
                        )}
                    <button
                        onClick={() => router.push("/vendas")}
                        className="bg-[#13EC5B] p-1.5 px-4 rounded text-white hover:bg-green-500 hover:text-black transition-colors flex items-center font-semibold gap-2 cursor-pointer">
                        + Nova Venda
                    </button>
                </header>
                <div className="bg-[#F6F8F6] w-full flex-1 text-black p-6">
                    {props.children}
                </div>
            </main>
        </div>
    )
}