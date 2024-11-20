import './milestones.scss';
import { milestones } from './milestones';

export default function MilestonesView() {
    return (
        <div className="milestones-view">
            <div className='milestones'>
                {milestones.map((milestone) => (
                    <div className="milestone" key={milestone.text}>
                        <h1 className="milestone-date">{milestone.date}</h1>
                        <p className="milestone-content">{milestone.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
