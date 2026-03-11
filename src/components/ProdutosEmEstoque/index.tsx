import { produtosEmEstoque } from "../../mocks/produtosEmEstoque";
import { Pencil, Trash2, X, AlertTriangle, Plus } from "lucide-react";
import { useState } from "react";

type Produto = {
    id: number;
    nome: string;
    quantidade: number;
    precoCusto: number;
    precoVenda: number;
};

export default function ProdutosEmEstoque() {
    const [produtos, setProdutos] = useState<Produto[]>(produtosEmEstoque);
    const [modalAberto, setModalAberto] = useState(false);
    const [modalExcluirAberto, setModalExcluirAberto] = useState(false);
    const [produtoEditando, setProdutoEditando] = useState<Produto | null>(null);
    const [produtoExcluindo, setProdutoExcluindo] = useState<Produto | null>(null);
    const [modoCriacao, setModoCriacao] = useState(false);

    const abrirModalCriar = () => {
        setProdutoEditando({
            id: Math.max(...produtos.map(p => p.id)) + 1,
            nome: "",
            quantidade: 0,
            precoCusto: 0,
            precoVenda: 0
        });
        setModoCriacao(true);
        setModalAberto(true);
    };

    const abrirModal = (produto: Produto) => {
        setProdutoEditando({ ...produto });
        setModoCriacao(false);
        setModalAberto(true);
    };

    const fecharModal = () => {
        setModalAberto(false);
        setProdutoEditando(null);
        setModoCriacao(false);
    };

    const abrirModalExcluir = (produto: Produto) => {
        setProdutoExcluindo(produto);
        setModalExcluirAberto(true);
    };

    const fecharModalExcluir = () => {
        setModalExcluirAberto(false);
        setProdutoExcluindo(null);
    };

    const handleSalvar = () => {
        if (produtoEditando) {
            if (modoCriacao) {
                // Adicionar novo produto
                setProdutos([...produtos, produtoEditando]);
                console.log("Produto criado:", produtoEditando);
            } else {
                // Editar produto existente
                setProdutos(produtos.map(p => 
                    p.id === produtoEditando.id ? produtoEditando : p
                ));
                console.log("Produto editado:", produtoEditando);
            }
            fecharModal();
        }
    };

    const confirmarExclusao = () => {
        if (produtoExcluindo) {
            setProdutos(produtos.filter(produto => produto.id !== produtoExcluindo.id));
            fecharModalExcluir();
        }
    };

    const handleChange = (campo: keyof Produto, valor: string | number) => {
        if (produtoEditando) {
            setProdutoEditando({
                ...produtoEditando,
                [campo]: valor
            });
        }
    };

    return (
        <>
        <div className="p-4 bg-white rounded-lg shadow-md border border-[#E2E8F0] w-full">
            <div className="flex w-full justify-between items-center mb-3 py-4">
                <span className="font-bold text-lg text-[#24282c]">Produtos em Estoque</span>
                <button
                    onClick={abrirModalCriar}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                    <Plus size={20} />
                    Adicionar Produto
                </button>
            </div>
            <table className="w-full table-auto">
                <thead>
                    <tr className="text-left text-base font-bold text-[#64748B] border-b border-[#E2E8F0]">
                        <th className="py-2">Produto</th>
                        <th className="py-2 text-center">Quantidade</th>
                        <th className="py-2 text-right">Preço de Custo</th>
                        <th className="py-2 text-right">Preço de Venda</th>
                        <th className="py-2 text-right">Valor de Custo Total</th>
                        <th className="py-2 text-center">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {produtos.map((produto) => {
                        const valorCustoTotal = produto.quantidade * produto.precoCusto;
                        return (
                            <tr key={produto.id} className="border-b border-[#E2E8F0]">
                                <td className="py-4 text-[#24282c]">{produto.nome}</td>
                                <td className="py-4 text-center text-[#24282c]">{produto.quantidade}</td>
                                <td className="py-4 text-right text-[#24282c]">
                                    R$ {produto.precoCusto.toFixed(2).replace('.', ',')}
                                </td>
                                <td className="py-4 text-right text-[#24282c]">
                                    R$ {produto.precoVenda.toFixed(2).replace('.', ',')}
                                </td>
                                <td className="py-4 text-right text-[#24282c]">
                                    R$ {valorCustoTotal.toFixed(2).replace('.', ',')}
                                </td>
                                <td className="py-4 text-center">
                                    <div className="flex gap-2 justify-center">
                                        <button 
                                            className="p-2 hover:bg-blue-50 rounded-lg transition-colors"
                                            title="Editar produto"
                                            onClick={() => abrirModal(produto)}
                                        >
                                            <Pencil size={18} className="text-blue-600" />
                                        </button>
                                        <button 
                                            className="p-2 hover:bg-red-50 rounded-lg transition-colors"
                                            title="Excluir produto"
                                            onClick={() => abrirModalExcluir(produto)}
                                        >
                                            <Trash2 size={18} className="text-red-600" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>

        {/* Modal de Edição */}
        {modalAberto && produtoEditando && (
            <div className="fixed inset-0 bg-black/20 flex items-center justify-center z-50">
                <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 border border-[#E2E8F0]">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-bold text-[#24282c]">
                            {modoCriacao ? "Adicionar Produto" : "Editar Produto"}
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
                                Nome do Produto
                            </label>
                            <input
                                type="text"
                                value={produtoEditando.nome}
                                onChange={(e) => handleChange('nome', e.target.value)}
                                className="w-full px-3 py-2 border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-[#24282c]"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-[#64748B] mb-1">
                                Quantidade em Estoque
                            </label>
                            <input
                                type="number"
                                value={produtoEditando.quantidade}
                                onChange={(e) => handleChange('quantidade', Number(e.target.value))}
                                className="w-full px-3 py-2 border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-[#24282c]"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-[#64748B] mb-1">
                                Preço de Custo (R$)
                            </label>
                            <input
                                type="number"
                                step="0.01"
                                value={produtoEditando.precoCusto}
                                onChange={(e) => handleChange('precoCusto', Number(e.target.value))}
                                className="w-full px-3 py-2 border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-[#24282c]"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-[#64748B] mb-1">
                                Preço de Venda (R$)
                            </label>
                            <input
                                type="number"
                                step="0.01"
                                value={produtoEditando.precoVenda}
                                onChange={(e) => handleChange('precoVenda', Number(e.target.value))}
                                className="w-full px-3 py-2 border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-[#24282c]"
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
                            className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            Salvar
                        </button>
                    </div>
                </div>
            </div>
        )}

        {/* Modal de Confirmação de Exclusão */}
        {modalExcluirAberto && produtoExcluindo && (
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
                            Tem certeza que deseja excluir este produto?
                        </p>
                        
                        <p className="text-[#24282c] font-semibold mb-6">
                            {produtoExcluindo.nome}
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