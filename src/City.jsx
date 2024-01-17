const City = ({ city }) => {
  console.log(city);

  if (!city) {
    return <div></div>;
  }

  // main değeri undefined olduğunda bu kontrol hatayı önler
  if (!city.main) {
    return <div>City data is incomplete</div>;
  }
  var iconcode = city.weather[0].icon;
  var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
  console.log("test", iconcode);
  console.log(iconurl);
  return (
    <div>
      <div className="cardContainer">
        <div className="card">
          <p className="city">{city.name}</p>
          <p className="weather">{city.weather[0].main}</p>
          <img
            className="weather"
            version="1.1"
            id="Layer_1"
            x="0px"
            y="0px"
            width="50px"
            height="50px"
            viewBox="0 0 100 100"
            src={iconurl}
          ></img>
          <p className="temp">{Math.round(city.main.temp)}°C</p>
          <div className="minmaxContainer">
            <div className="min">
              <p className="minHeading">Min</p>
              <p className="minTemp">{Math.round(city.main.temp_min)}°C</p>
            </div>
            <div className="max">
              <p className="maxHeading">Max</p>
              <p className="maxTemp">{Math.round(city.main.temp_max)}°C</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default City;
