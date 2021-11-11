import { SalePage } from "types/sale";

type Props = {
    page: SalePage;
    onPageChange: Function;
}
//comunicação entre componentes atraves da função onPageChange, 
//em poucas palavras um componente roda uma função de outro.
const Pagination = ({page, onPageChange} : Props) => {

    return (
        <div className="row d-flex justify-content-center">
            <nav>
                <ul className="pagination">
                    <li className={`page-item ${page.first ? 'disabled' : ''}`}>
                        <button className="page-link" onClick={() => onPageChange(page.number - 1)}>Anterior</button>
                    </li>
                    <li className="page-item disabled">
                        <span className="page-link">{page.number + 1}</span>
                    </li>
                    <li className={`page-item ${page.last ? 'disabled' : ''}`}>
                        <button className="page-link" onClick={() => onPageChange(page.number + 1)}>Próxima</button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default Pagination;