import { useState, useEffect } from "react";
import { addData } from "../../Redux/Data/action.js";
import {useSelector, useDispatch} from "react-redux";


 export const Table = ({toggleShow, show, setshow}) => {
  const {data} = useSelector((store) => (store.data))
  const dispatch = useDispatch();

  const getData = () => {
    fetch("https://big-geode-ski.glitch.me/cities")
      .then((res) => res.json())
      .then((value) => dispatch(addData(value)));
  };

  const handleDelete = (id) => {
    fetch(`https://big-geode-ski.glitch.me/cities/${id}`, {
      method: "DELETE"
    })
    .then(alert("Proceed To Delete ?"))
    .then(getData())
  }

  useEffect(() => {
    getData();
  }, []);
  console.log(data)
  return (
    <table border="1px solid black">
      <thead>
        <tr>
          <th>id</th>
          <th>Country</th>
          <th>City</th>
          <th>Population</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {data.map((e) => (
          <tr key={e.id}>
            <td>{e.id}</td>
            <td>{e.country}</td>
            <td>{e.city}</td>
            <td>{e.population}</td>
            <td>
              <button onClick = {() => {toggleShow(e)}} style = {{backgroundColor: "green", color: "white", fontWeight: "bold", fontSize: "14px", borderRadius:"3px"}}>Edit</button>
            </td>
            <td>
              <button onClick = {() => {handleDelete(e.id)}} style = {{backgroundColor: "red", color: "white", fontWeight: "bold", fontSize: "14px", borderRadius:"3px"}}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
