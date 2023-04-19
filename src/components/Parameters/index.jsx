import './index.css';
import Parameter from './Parameter/index.jsx';

const Parameters = ({ chanceOfRain,
    humidity,
    windSpeed,
    visibility,
    pressure }) => {
    return (
        <div className="color-parameters">
            <h2 className="now">Now</h2>
            <div className="parameters">
                <Parameter parameterText="Chance of rain" parameterNumber={chanceOfRain} />
                <Parameter parameterText="Humidity" parameterNumber={humidity} />
                <Parameter parameterText="Wind Speed" parameterNumber={windSpeed} />
                <Parameter parameterText="Visiblity" parameterNumber={visibility} />
                <Parameter parameterText="Pressure" parameterNumber={pressure} />
            </div>
        </div>
    )
}
export default Parameters;