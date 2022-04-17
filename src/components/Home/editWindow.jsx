import { useState, useEffect } from "react";
import { addData } from "../../Redux/Data/action.js";
import {useDispatch} from "react-redux";

export const EditWindow = ({ item, show, setshow, toggleShow }) => {
  const [query, setquery] = useState({});
  const dispatch = useDispatch();

  const getData = () => {
    fetch("https://big-geode-ski.glitch.me/cities")
      .then((res) => res.json())
      .then((value) => dispatch(addData(value)));
  };

//   useEffect(() => {
//     getData();
//   }, [])
  

  const handleChange = (e) => {
    var { id, value } = e.target;
    if(id === "city" || id === "country"){
      value = value.toLowerCase();
    }
    setquery({
      ...query,
      [id]: value,
    });
  };
console.log(query);
console.log(item.id);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://big-geode-ski.glitch.me/cities/${item.id}`, {
      method: "PATCH",
      body: JSON.stringify({...query}),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    .then(getData())
    .then(toggleShow())
    .then(alert("Updated Successfully"))
  };
  return (
    <div id="window">
      <h2>Edit the Credentials Required</h2>
      <form onSubmit= {handleSubmit} >
        <div>
          <label>Country</label>
          <input
            onChange={handleChange}
            className="editables"
            type="text"
            id="country"
            placeholder={item.country}
            required
          />
        </div>
        <div>
          <label>City</label>
          <input
            onChange={handleChange}
            className="editables"
            type="text"
            id="city"
            placeholder={item.city}
            required
          />
        </div>
        <div>
          <label>Population</label>
          <input
            className="editables"
            onChange={handleChange}
            type="text"
            id="population"
            placeholder={item.population}
            required
          />
        </div>
        <input type="submit" value="Update" />
      </form>
    </div>
  );
};
