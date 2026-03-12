import AtalhosRapidos from "@/components/AtalhosRapidos";
import CardDetails from "@/components/CardsDatails/CardDetails";
import DicaDoDia from "@/components/DicaDoDia";
import Pagina from "@/components/Pagina/Pagina";
import UltimasVendas from "@/components/UltimasVendas";

export default function Dashboard() {
    return (
        <div>
            <Pagina>
                <div className="flex flex-col gap-6 lg:flex-row">
                    <div className="min-w-0 flex-1">
                        <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
                            <CardDetails 
                                nome="Vendas do dia"
                                valor="R$ 1.250,00"
                                percentual="+15%"
                                descricao="em relação a ontem"
                                />
                            <CardDetails 
                                nome="Lucro do dia"
                                valor="R$ 250,00"
                                percentual="+10%"
                                descricao="em relação a ontem"
                                />
                            <CardDetails 
                                nome="Vendas do Mês"
                                valor="R$ 1.250,00"
                                percentual="+15%"
                                descricao="em relação a ontem"
                                />
                            <CardDetails 
                                nome="Produtos Vendidos"
                                valor="30"
                                percentual="+15%"
                                descricao="em relação a ontem"
                                />
                        </div>
                        <UltimasVendas />
                    </div>
                    <div className="hidden md:flex flex-col gap-6">
                        <AtalhosRapidos />
                        <DicaDoDia />
                    </div>
                </div>
            </Pagina>
        </div>
    )
}