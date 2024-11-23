import { NavLink } from "react-router-dom";
import { techiniques } from "./techniques-list"
import './techniques.scss';

export default function TechniquesView() {
    return (
        <div className='techniques-view'>
            <NavLink className='back-btn' to='/v/area-de-formacion'>Volver al área de formación</NavLink>
            <h1 className='view__title'>18 Técnicas</h1>

            <table className='concepts-table table'>
                <thead>
                    <tr className='table__headrow'>
                        <th>Nombre</th>
                        <th>Significado</th>
                    </tr>
                </thead>
                <tbody className='table__body'>
                    {techiniques.map((concept) => (
                        <tr key={concept.name}>
                            <td>{concept.name}</td>
                            <td>{concept.meaning}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
