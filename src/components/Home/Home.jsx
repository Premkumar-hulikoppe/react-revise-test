import { Table } from "./table";
import BasicButtons from "./buttons";
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';
import {useDispatch} from "react-redux";
import {filterData} from "../../Redux/Data/action.js"
import {useState} from "react";
import { addData } from "../../Redux/Data/action.js";
import {EditWindow} from "../Home/editWindow";
import {srtPopAsc, srtPopDesc} from "../../Redux/Data/action.js";

export const Home = () => {
  const dispatch = useDispatch();
  const [item, setitem] = useState({});
  const [query, setquery] = useState(null);
  const [show, setshow] = useState(false);

  const toggleShow = (value) => {
    show ? setshow(false) : setshow(true);
    setitem({...value})
  }


  const handleFilter = (e) => {
    const str = e.toLowerCase();
    fetch(`https://big-geode-ski.glitch.me/cities/?country=${str}`).then((res) => res.json())
    .then((data) => {
      if(data.length === 0){
        alert("No Results Found!");
        console.log(data)
      }
      else{
        dispatch(addData(data))
      }
    });
  }

  return show ?  <EditWindow show = {show} setshow = {setshow} toggleShow = {toggleShow} item = {item}/> : (
    <>

      <div className="buttons">
        <Button onClick = {() => {dispatch(srtPopAsc())}} variant="contained" color="primary">
          Sort By Population (ASC)
        </Button>
        <Button onClick = {() => {dispatch(srtPopDesc())}} variant="contained" color="success">
        Sort By Population (DSC)
        </Button>

        <TextField onChange = {(e) => (setquery(e.target.value))} id="outlined-basic" label="Enter Country" variant="outlined" />
        <Button onClick = {() => {handleFilter(query)}} variant="contained" color="secondary">
          Filter By Country
        </Button>
      </div>
      <Table toggleShow = {toggleShow} show = {show} setshow = {setshow} style={{ margin: "auto" }}></Table>
    </>
  );
};
