import { ultimasVendas } from "@/mocks/ultimasVendas";

export default function UltimasVendas() {
        return (
            <div className="p-4 bg-white rounded-lg shadow-md border border-[#E2E8F0] w-full">
                <div className="flex w-full gap-2 items-center mb-3 py-4">
                    <span className="font-bold text-lg text-[#24282c]">Atividades Recentes</span>
                </div>
                <table className="w-full table-auto">
                    <thead className="">
                        <tr className="text-left text-base font-bold text-[#64748B] border-b border-[#E2E8F0]">
                            <th className="py-2">Horário</th>
                            <th className="py-2">Nome do Produto</th>
                            <th className="py-2">Valor</th>
                            <th className="py-2">Quantidade</th>
                            <th className="py-2">Tipo de Pagamento</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ultimasVendas.map((venda) => (
                            <tr key={venda.id} className="border-b border-[#E2E8F0]">
                                <td className="py-6">{venda.horario}</td>
                                <td className="py-4">{venda.nomeProduto}</td>
                                <td className="py-4">R$ {venda.valor.toFixed(2)}</td>
                                <td className="py-4 px-8">{venda.quantidade}</td>
                                <td className="py-4">{venda.tipoPagamento}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
}