import { useNavigate, useParams } from "react-router-dom";
import { ListaProdutos } from "../components/ListaProdutos";
import { useState } from "react";

export default function ExcluirProdutos() {
  const { id } = useParams();
  const navigate = useNavigate();

  //Filtrando o produto pelo ID recuperado.
  const produtoRecuperado = ListaProdutos.filter((produto) => produto.id == id);

  const [produto, setProduto] = useState({
    id: produtoRecuperado[0].id,
    nome: produtoRecuperado[0].nome,
    desc: produtoRecuperado[0].desc,
    preco: produtoRecuperado[0].preco,
  });

  document.title = "Excluir Produtos";
  
  const handleSubmit = (event) => {
    event.preventDefault();
    ListaProdutos.splice(produto.id - 1, 1);
    alert("Produto excluído com sucesso!");
    navigate("/produtos");
  };

  return (
    <>
      <h1>TEM CERTEZA QUE DESEJA EXCLUIR O PRODUTO</h1>

      <div>
        <form>
          <fieldset>
            <legend>EXCLUIR PRODUTO</legend>
            <div>
              <label htmlFor="idProd">Nome do Produto:</label>
              <input type="text" name="nome" id="idProd" value={produto.nome} readOnly />
            </div>
            <div>
              <label htmlFor="idDesc">Descrição do Produto:</label>
              <input type="text" name="desc" id="idDesc" value={produto.desc} readOnly />
            </div>
            <div>
              <label htmlFor="idPreco">Preço do Produto:</label>
              <input type="number" name="preco" id="idPreco" value={produto.preco} readOnly />
            </div>
            <div>
              <button onClick={handleSubmit}>Excluir</button>
              <button onClick={()=>navigate("/produtos")}>Cancelar</button>
            </div>
          </fieldset>
        </form>
      </div>

    </>
  );
}
