import Day from './Day';
import DegreeDay from './DegreeDay';
import Town from './Town';
import './index.css'

const TownDayDegree = ({ town, day, degreeDay }) => {
    return (
        <div className="town-day-degree">
            <Town town={town} />
            <Day day={day} />
            <DegreeDay degreeDay={degreeDay} />
        </div>
    )

}
export default TownDayDegree;