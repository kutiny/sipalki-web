import './milestones.scss';
import { milestones } from './milestones-data';

export default function MilestonesView() {
    return (
        <div className="milestones-view">
            <h1>Hitos importantes de Sipalki-do</h1>
            <div className='milestones'>
                {milestones.map((milestone) => (
                    <div className={`milestone ${milestone.class}`} key={milestone.text}>
                        <h1 className="milestone-date">{milestone.date}</h1>
                        <p className="milestone-content">{milestone.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
