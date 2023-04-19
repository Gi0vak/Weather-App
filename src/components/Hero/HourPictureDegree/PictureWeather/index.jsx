
import './index.css';

const PictureWeather = ({ picture }) => {
    return (
        <div className="picture">
            <img src={`https://openweathermap.org/img/wn/${picture}@2x.png`} alt="pictureWeather" />
        </div>
    )

}
export default PictureWeather;