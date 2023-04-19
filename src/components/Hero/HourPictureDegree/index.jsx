import DegreeHour from './DegreeHour/index.jsx';
import Hour from './Hour/index.jsx';
import PictureWeather from './PictureWeather/index.jsx';

const HourPictureDegree = ({ hour, picture, degreeHour }) => {
    return (
        <div className="hour-picture-degree">
            <Hour hour={hour} />
            <PictureWeather picture={picture} />
            <DegreeHour degreeHour={degreeHour} />
        </div>
    )

}
export default HourPictureDegree;