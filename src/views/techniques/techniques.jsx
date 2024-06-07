import { techiniques } from "./techniques-list"
import './techniques.scss';

export default function TechniquesView() {
    return (
        <div className='techniques-view'>
            <h2 className='concept__title'>18 Técnicas</h2>

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
