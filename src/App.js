import { computeHeadingLevel } from "@testing-library/react";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import City from "./City";
function App() {
  const key = "dd57cad6922cc79d77887fce50c95930";
  const [search, setSearch] = useState("");
  const [city, setCtiy] = useState();
  const [searchs, setSearchs] = useState();

  useEffect(() => {
    async function getApi() {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${searchs}&appid=${key}&units=metric`
        );
        console.log(response);
        setCtiy(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getApi();
  }, [searchs]);
  console.log(searchs);

  const handleOnSubmit = e => {
    e.preventDefault();
    setSearchs(search);
    setSearch("");
  }
  const handleOnChange = e => {
    setSearch(e.target.value);
  }
  return (
    <>
      <div className="container">
      <form onSubmit={handleOnSubmit}>
        <div className="input-container">
          <input 
          type="text" 
          placeholder="Search" 
          onChange={handleOnChange}   
          value={search}
          />
          <button className="button">Search</button>
          
        </div>
        </form>

      </div>
      <City city={city}/>

    </>
  );
}

export default App;
