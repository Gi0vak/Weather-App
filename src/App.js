import TopBar from './components/Topbar/index.jsx';
import Hero from './components/Hero/index.jsx';
import Parameters from './components/Parameters/index.jsx';
import Details from './components/Details/index.jsx';
import { useState, useEffect } from 'react';
import './App.css';

function App() {

  const API_KEY = process.env.REACT_APP_API_KEY;
  const [datasCurrent, setDatasCurrent] = useState([]);
  const [datasMain, setDatasMain] = useState([]);
  const [datasWind, setDatasWind] = useState([]);
  const [datasDetails, setDatasDetails] = useState([]);
  const [datasDetailsList, setDatasDetailsList] = useState([]);
  const [datasDailyList, setDatasDailyList] = useState([]);
  const [datasDaily, setDatasDaily] = useState([]);
  const [cityName, setCityName] = useState('London');
  const handleFormSubmit = (value) => {
    setCityName(value);
  };

  useEffect(() => {
    const getDetails = async () => {
      try {
        const response =
          await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`);
        const data =
          await response.json();
        setDatasCurrent(data);
        setDatasMain(data.main);
        setDatasWind(data.wind);
        getHourlyDetails(data.coord.lon, data.coord.lat);
        getDailyDetails(data.coord.lon, data.coord.lat);
      } catch (err) {
        console.log(err);
      }
    };
    getDetails();

    const getHourlyDetails = async (datasLon, datasLat) => {
      try {
        const responseDetails =
          await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${datasLat}&lon=${datasLon}&appid=${API_KEY}`);
        const dataDetails =
          await responseDetails.json();
        setDatasDetails(dataDetails);
        setDatasDetailsList(dataDetails.list);
      } catch (err) {
        console.log(err);
      }
    }
    const getDailyDetails = async (datasLon, datasLat) => {
      try {
        const responseDaily =
          await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${datasLat}&lon=${datasLon}&appid=${API_KEY}`);
        const dataDaily =
          await responseDaily.json();
        setDatasDaily(dataDaily);
        setDatasDailyList(dataDaily.list);

      } catch (err) {
        console.log(err);
      }

    }

  }, [cityName]);

  const town = datasCurrent.name;
  const currentDate = new Date(datasCurrent.dt * 1000).toUTCString();
  const day = currentDate;
  const temp = datasMain.temp + " °C";
  const humidity = datasMain.humidity + " %";
  const windSpeed = datasWind.speed * 10 + " m/s";
  const visibility = datasCurrent.visibility / 1000 + " km";
  const pressure = datasMain.pressure + " hPa";
  const chanceOfRain = datasDetailsList[0] && (parseInt(datasDetailsList[0].pop) * 100) + "%";

  const hours = [];
  const pictures = [];
  datasDetailsList.slice(0, 3).map((el, index) => {
    const picture = el.weather[0].icon;
    pictures[index] = picture;
    let hour = new Date(parseInt(el.dt) * 1000).getHours();
    let minutes = "00";
    hours[index] = hour + ":" + minutes;
  });

  datasDailyList.map((el, index) => {
    let dailytDate = new Date(el.dt * 1000).toUTCString();
    console.log("element list, ", el.dt, index);
    datasDailyList[index] = dailytDate;
  });

  console.log(datasDailyList);
  const handleInput = (e) => {
    e.preventDefault();
    console.log("coucou");
    setCityName(e.target.value);
  }
  return (
    <div className="App">
      {datasCurrent && (
        <>
          <header>
            <TopBar onSearch={handleFormSubmit} />
          </header>
          <Hero
            town={town}
            day={day}
            degreeDay={temp}
            degreeHourOne={hours[0]}
            degreeHourTwo={hours[1]}
            degreeHourThree={hours[2]}
            pictureOne={pictures[0]}
            pictureTwo={pictures[1]}
            pictureThree={pictures[2]}
          />
          <Parameters
            chanceOfRain={chanceOfRain}
            humidity={humidity}
            windSpeed={windSpeed}
            visibility={visibility}
            pressure={pressure}
          />
          <Details
            day={"mocked"}
            wind={"mocked"}
            temperature={"mocked"}
            chanceOfRain={"mocked"}
          />
        </>)}
    </div>)
}

export default App;


