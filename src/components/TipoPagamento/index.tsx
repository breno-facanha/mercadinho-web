"use client"

import { tipoPagamento as tipoPagamentoMock } from "@/mocks/tipoPagamento";
import { Pencil, Trash2, X, AlertTriangle, Plus } from "lucide-react";
import { useState } from "react";

type TipoPagamentoType = {
    id: number;
    nome: string;
    taxa: number;
};

export default function TipoPagamento() {
    const [tipos, setTipos] = useState<TipoPagamentoType[]>(tipoPagamentoMock);
    const [modalAberto, setModalAberto] = useState(false);
    const [modalExcluirAberto, setModalExcluirAberto] = useState(false);
    const [tipoEditando, setTipoEditando] = useState<TipoPagamentoType | null>(null);
    const [tipoExcluindo, setTipoExcluindo] = useState<TipoPagamentoType | null>(null);
    const [modoCriacao, setModoCriacao] = useState(false);

    const abrirModalCriar = () => {
        setTipoEditando({
            id: Math.max(...tipos.map(t => t.id), 0) + 1,
            nome: "",
            taxa: 0.0
        });
        setModoCriacao(true);
        setModalAberto(true);
    };

    const abrirModal = (tipo: TipoPagamentoType) => {
        setTipoEditando({ ...tipo });
        setModoCriacao(false);
        setModalAberto(true);
    };

    const fecharModal = () => {
        setModalAberto(false);
        setTipoEditando(null);
        setModoCriacao(false);
    };

    const abrirModalExcluir = (tipo: TipoPagamentoType) => {
        setTipoExcluindo(tipo);
        setModalExcluirAberto(true);
    };

    const fecharModalExcluir = () => {
        setModalExcluirAberto(false);
        setTipoExcluindo(null);
    };

    const handleSalvar = () => {
        if (tipoEditando) {
            if (!tipoEditando.nome.trim()) {
                alert("Por favor, insira um nome de pagamento");
                return;
            }
            
            if (modoCriacao) {
                setTipos([...tipos, tipoEditando]);
                console.log("Tipo de pagamento criado:", tipoEditando);
            } else {
                setTipos(tipos.map(t => 
                    t.id === tipoEditando.id ? tipoEditando : t
                ));
                console.log("Tipo de pagamento editado:", tipoEditando);
            }
            fecharModal();
        }
    };

    const confirmarExclusao = () => {
        if (tipoExcluindo) {
            setTipos(tipos.filter(tipo => tipo.id !== tipoExcluindo.id));
            console.log("Tipo de pagamento excluído:", tipoExcluindo);
            fecharModalExcluir();
        }
    };

    const handleChange = (campo: keyof TipoPagamentoType, valor: string | number) => {
        if (tipoEditando) {
            setTipoEditando({
                ...tipoEditando,
                [campo]: campo === 'taxa' ? Number(valor) : valor
            });
        }
    };

    return (
        <>
            <div className="p-4 bg-white rounded-lg shadow-md border border-[#E2E8F0] w-full">
                <div className="flex w-full justify-between items-center mb-3 py-4">
                    <span className="font-bold text-lg text-[#24282c]">Tipos de Pagamento</span>
                    <button
                        onClick={abrirModalCriar}
                        className="flex items-center gap-2 px-4 py-2 bg-[#61896F] text-white rounded-lg hover:bg-green-500 transition-colors"
                    >
                        <Plus size={20} />
                        Adicionar Tipo
                    </button>
                </div>
                <table className="w-full table-auto">
                    <thead>
                        <tr className="text-left text-base font-bold text-[#64748B] border-b border-[#E2E8F0]">
                            <th className="py-2">Nome do Pagamento</th>
                            <th className="py-2 text-right">Taxa (%)</th>
                            <th className="py-2 text-center">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tipos.map((tipo) => (
                            <tr key={tipo.id} className="border-b border-[#E2E8F0] hover:bg-[#F8FAFB]">
                                <td className="py-4 text-[#24282c] capitalize">{tipo.nome}</td>
                                <td className="py-4 text-right text-[#24282c]">
                                    {tipo.taxa.toFixed(1)}
                                </td>
                                <td className="py-4 text-center">
                                    <div className="flex gap-2 justify-center">
                                        <button 
                                            className="p-2 hover:bg-blue-50 rounded-lg transition-colors"
                                            title="Editar tipo de pagamento"
                                            onClick={() => abrirModal(tipo)}
                                        >
                                            <Pencil size={18} className="text-blue-600" />
                                        </button>
                                        <button 
                                            className="p-2 hover:bg-red-50 rounded-lg transition-colors"
                                            title="Excluir tipo de pagamento"
                                            onClick={() => abrirModalExcluir(tipo)}
                                        >
                                            <Trash2 size={18} className="text-red-600" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {tipos.length === 0 && (
                    <div className="text-center py-8 text-[#64748B]">
                        Nenhum tipo de pagamento cadastrado
                    </div>
                )}
            </div>

            {/* Modal de Edição */}
            {modalAberto && tipoEditando && (
                <div className="fixed inset-0 bg-black/20 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 border border-[#E2E8F0]">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-bold text-[#24282c]">
                                {modoCriacao ? "Adicionar Tipo de Pagamento" : "Editar Tipo de Pagamento"}
                            </h2>
                            <button 
                                onClick={fecharModal}
                                className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
                            >
                                <X size={24} className="text-[#64748B]" />
                            </button>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-[#64748B] mb-1">
                                    Nome do Pagamento
                                </label>
                                <input
                                    type="text"
                                    value={tipoEditando.nome}
                                    onChange={(e) => handleChange('nome', e.target.value)}
                                    className="w-full px-3 py-2 border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#61896F] text-[#24282c]"
                                    placeholder="Ex: Dinheiro, Débito, Crédito..."
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-[#64748B] mb-1">
                                    Taxa (%)
                                </label>
                                <input
                                    type="number"
                                    step="0.1"
                                    value={tipoEditando.taxa}
                                    onChange={(e) => handleChange('taxa', e.target.value)}
                                    className="w-full px-3 py-2 border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#61896F] text-[#24282c]"
                                    placeholder="Ex: 0.0, 1.5, 2.5..."
                                />
                            </div>
                        </div>

                        <div className="flex gap-3 mt-6">
                            <button
                                onClick={fecharModal}
                                className="flex-1 px-4 py-2 border border-[#E2E8F0] text-[#64748B] rounded-lg hover:bg-gray-50 transition-colors"
                            >
                                Cancelar
                            </button>
                            <button
                                onClick={handleSalvar}
                                className="flex-1 px-4 py-2 bg-[#61896F] text-white rounded-lg hover:bg-green-500 transition-colors"
                            >
                                Salvar
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Modal de Confirmação de Exclusão */}
            {modalExcluirAberto && tipoExcluindo && (
                <div className="fixed inset-0 bg-black/20 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 border border-[#E2E8F0]">
                        <div className="flex flex-col items-center text-center">
                            <div className="mb-4 p-3 bg-red-50 rounded-full">
                                <AlertTriangle size={48} className="text-red-600" />
                            </div>
                            
                            <h2 className="text-xl font-bold text-[#24282c] mb-2">
                                Confirmar Exclusão
                            </h2>
                            
                            <p className="text-[#64748B] mb-2">
                                Tem certeza que deseja excluir este tipo de pagamento?
                            </p>
                            
                            <p className="text-[#24282c] font-semibold mb-6 capitalize">
                                {tipoExcluindo.nome}
                            </p>

                            <div className="flex gap-3 w-full">
                                <button
                                    onClick={fecharModalExcluir}
                                    className="flex-1 px-4 py-2 border border-[#E2E8F0] text-[#64748B] rounded-lg hover:bg-gray-50 transition-colors"
                                >
                                    Cancelar
                                </button>
                                <button
                                    onClick={confirmarExclusao}
                                    className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                                >
                                    Excluir
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
