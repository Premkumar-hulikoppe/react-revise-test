import { Table } from "./table";
import BasicButtons from "./buttons";
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';
import {useDispatch} from "react-redux";
import {filterData} from "../../Redux/Data/action.js"
import {useState} from "react";
import { addData } from "../../Redux/Data/action.js";
import {EditWindow} from "../Home/editWindow";

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
    fetch(`http://localhost:3004/cities/?country=${e}`).then((res) => res.json())
    .then((data) => {
      if(data.length === 0){
        // alert("No Results Found!");
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
        <Button variant="contained" color="primary">
          Sort By Population (ASC)
        </Button>
        <Button variant="contained" color="success">
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
