import './index.css';
import TownDayDegree from './TownDayDegree/index.jsx';
import HourPictureDegree from './HourPictureDegree/index.jsx';

const Hero = ({
    town,
    day,
    degreeDay,
    pictureOne,
    pictureTwo,
    pictureThree,
    hourOne,
    hourTwo,
    hourThree,
    degreeHourOne,
    degreeHourTwo,
    degreeHourThree
}) => {
    return (
        <div className="hero">
            <div className="per-day">
                <TownDayDegree
                    town={town}
                    day={day}
                    degreeDay={degreeDay} />
            </div>
            <div className="per-hour">
                <HourPictureDegree
                    hour={hourOne}
                    picture={pictureOne}
                    degreeHour={degreeHourOne} />
                <HourPictureDegree
                    hour={hourTwo}
                    picture={pictureTwo}
                    degreeHour={degreeHourTwo} />
                <HourPictureDegree
                    hour={hourThree}
                    picture={pictureThree}
                    degreeHour={degreeHourThree} />
            </div>
        </div>
    )

}
export default Hero;