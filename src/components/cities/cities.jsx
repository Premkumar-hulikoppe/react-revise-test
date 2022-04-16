import { useState, useEffect } from "react";
import {addCountry} from "../../Redux/Country/action.js"
import {addData} from "../../Redux/Data/action.js"
import {useSelector, useDispatch} from "react-redux";


export const Cities = () => {
  const [city, setcity] = useState({});
  const {countries} = useSelector((store) => (store.country))
  const dispatch = useDispatch();

  const getCountries = () => {
    fetch("http://localhost:3004/countries")
      .then((res) => res.json())
      .then((data) => dispatch(addCountry(data)));
  };

  useEffect(() => {
    getCountries();
  }, []);

  const handleChange = (e) => {
    setcity({
      ...city,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3004/cities", {
      method: "POST",
      body: JSON.stringify(city),
      headers: {
        "content-type": "application/json",
      },
    })
      .then(setcity({}))
      .then(getCountries())
      .then(alert("City Added Successfully!"));
  };
  return (
    <>
      <h2 style={{ color: "blue" }}>Add City Of Your Choice</h2>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          id="city"
          type="text"
          placeholder="Add City Name"
          required
        />
          <select onChange={handleChange} id="country">
            <option value="Select Country">Select Country</option>
            {countries.map((e) => (
              <option key={e.id} value={e.country}>
                {e.country}
              </option>
            ))}
          </select>
        <input
          onChange={handleChange}
          id="population"
          type="text"
          placeholder="Add Population"
          required
        />
        <input type="submit" />
      </form>
    </>
  );
};
