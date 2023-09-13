import { useNavigate, useParams } from "react-router-dom";
import { ListaProdutos } from "../components/ListaProdutos";
import { useState } from "react";

export default function EditarProdutos() {
    
    //Utilizar o HOOK useParams() para recuperar o ID passado no path
    const {id} = useParams();

    document.title = "EDITAR PRODUTOS " + id;

    const navigate = useNavigate();

    const produtoRetornadoDoFiltro = ListaProdutos.filter( produto => produto.id == id )[0];

    //useState()
    const [produto, setProduto] = useState(produtoRetornadoDoFiltro); 

    const handleChange = (e) => {
      const { name, value } = e.target;
      setProduto({ ...produto, [name]:value})
    }


    const handleSubmit = (event) =>{
      event.preventDefault();
 
      let indice;
 
      ListaProdutos.forEach((item,index)=>{
         if(item.id == id){
           indice = index;
         }
      });

      ListaProdutos.splice(indice,1,produto);
      navigate("/produtos");
   }

    return (
      <div>
          <h1>EditarProdutos</h1>
          <div>
            <form onSubmit={handleSubmit}>
              <fieldset>
                <legend>Produto Selecionado</legend>
                <input type="hidden" name="id" value={produto.id} onChange={handleChange}/>
                <div>
                  <label htmlFor="idProd">Nome do Produto</label>
                  <input type="text" name="nome" id="idProd" value={produto.nome} onChange={handleChange}/>
                </div>
                <div>
                  <label htmlFor="idDesc">Descrição</label>
                  <input type="text" name="desc" id="idDesc" value={produto.desc} onChange={handleChange}/>
                </div>
                <div>
                  <label htmlFor="idPreco">Preço</label>
                  <input type="text" name="preco" id="idPreco" value={produto.preco} onChange={handleChange}/>
                </div>
                <div>
                  <button type="submit">EDITAR</button>
                </div>
              </fieldset>
            </form>
          </div>
          <div>
            <p>Nome : {produto.nome}</p>
            <p>Desc : {produto.desc}</p>
            <p>Preço : {produto.preco}</p>
        </div>


      </div>
    )
  }
  