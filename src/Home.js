import React,{useState} from "react";
import axios from "axios"
import weather from "./assets/weather2.jpg"
import "./Home.css"
const Home = () => {
  const [data,setData] = useState({})
  const [location,setLocation] = useState('')
   const url=`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=51ef69b4b17a8a20f49e7b8235c2c928`

  const searchLocation = (event) =>{
    if(event.key === 'Enter') {
    axios.get(url).then((response) => {
      setData(response.data)
      console.log(response.data)
    })
    setLocation('')
  }
  }
  return (
      <div className="container">
        <div className="search">
          <input
           value={location} 
           onChange={event => setLocation(event.target.value)} onKeyDown={searchLocation}
           placeholder="Enter location Here"
           type="text" />
        </div>
        <div className="img-container">
          <img src={weather} alt="weather1" className="img1" />
        </div>
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null }
          </div>
        </div>


          {data.name != undefined && 
                <div className="bottom">
                  <div className="feels">
                    {data.main ? <p>{data.main.feels_like}°C</p>: null}
                    <p>Feels Like</p>
                  </div>
                  <div className="humidity">
                    <p className="bold">
                      {data.main ? <p>{data.main.humidity}°C</p>:null }
                    </p>
                    <p>Humidity</p>
                  </div>
                  <div className="wind">
                    {data.wind ? <p>{data.wind.speed} km/h</p>:null}
                  
                    <p>Wind Speed</p>
                  </div>
                </div>
          }
        
      </div>
  )
}

export default Home
