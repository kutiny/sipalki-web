import { Fragment, useEffect } from 'react';
import { conceptList } from './concepts-list';
import './concepts.scss';
import { NavLink, useLocation } from 'react-router-dom';

export default function ConceptsView() {
    const location = useLocation();

    useEffect(() => {
        if (location.hash === '') {
            window.location.hash = '#sumario';
        }
    }, [location]);

    return (
        <div className='concepts-view'>
            <NavLink className='back-btn' to='/v/area-de-formacion'>Volver al área de formación</NavLink>
            <h1 id="sumario" className='view__title'>Sumario</h1>

            <ul className='summary-list'>
                {conceptList.map(item => (
                    <li key={item.hash} className='summary-list__item'>
                        <a href={`#${item.hash}`}>{item.title}</a>
                    </li>
                ))}
            </ul>

            {conceptList.map(item => (
                <Fragment key={item.title}>
                    <h2 id={item.hash} className='concept__title'>{item.title}</h2>
                    {item.message &&
                        <p className='concept__message'>{item.message}</p>
                    }

                    <table className='concepts-table table'>
                        <thead>
                            <tr className='table__headrow'>
                                {item.columns.map(col => (
                                    <th key={col}>{col}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className='table__body'>
                            {item.list.map((concept, index) => (
                                <tr key={index}>
                                    {concept.map(c => (
                                        <td key={c}>{c}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </Fragment>
            ))}
        </div>
    );
}
