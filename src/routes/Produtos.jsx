import { Link } from "react-router-dom";
import { ListaProdutos } from "../components/ListaProdutos";
import {AiFillEdit as EditObj} from "react-icons/ai";
import {RiDeleteBin2Fill as DelObj} from "react-icons/ri";
import style from "./Produtos.module.css";

export default function Produtos() {
  return (
      <>
          <h1>Produtos Informáticos - FIAPO</h1>

          <table className={style.tableStyle} >
              <thead>
                <tr className={style.tableHeaderStyle}>
                  <th className={style.tableHeaderStyle}>ID</th>
                  <th className={style.tableHeaderStyle}>NOME</th>
                  <th className={style.tableHeaderStyle}>DESCRIÇÃO</th>
                  <th className={style.tableHeaderStyle}>PREÇO</th>
                  <th className={style.tableHeaderStyle}>Editar/Excluir</th>
                </tr>
              </thead>

              <tbody>
                {ListaProdutos.map((produto,indice)=>(
                    <tr key={indice} className={style.tableLineStyle}>
                      <td className={style.tableDataStyle}>{produto.id}</td>
                      <td className={style.tableDataStyle}>{produto.nome}</td>
                      <td className={style.tableDataStyle}>{produto.desc}</td>
                      <td className={style.tableDataStyle}>{produto.preco}</td>
                      <td className={style.tableDataStyle}><Link to={`/editar/produtos/${produto.id}`}><EditObj/></Link> | <Link to={`/excluir/produtos/${produto.id}`}><DelObj/></Link></td>
                    </tr>
                ))}
              </tbody>

              <tfoot>
                <tr>
                  <td colSpan={5} style={{textAlign:"center"}}>Total Produtos: {ListaProdutos.length}</td>
                </tr>
              </tfoot>
          </table>

      </>
    )
  }
  