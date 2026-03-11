import Pagina from "@/components/Pagina/Pagina";
import ProdutosEmEstoque from "@/components/ProdutosEmEstoque";

export default function Produto() {
    return (
        <div>
            <Pagina>
               <div className="">
                    <ProdutosEmEstoque />
               </div>
            </Pagina>
        </div>
    )
}