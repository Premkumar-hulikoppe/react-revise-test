
import {useState, useEffect} from "react";
export const Countries = () => {
  const [country, setcountry] = useState({});
   
  const handleChange = (e) => {
      const {id, value} = e.target;
      setcountry({
          ...country,
          [id] : value.toLowerCase()
      });
  }

  console.log(country)

  const handleAdd = () => {
      if(country.country === undefined){
          alert("Please fill details")
      }
      else{
          
          fetch("https://big-geode-ski.glitch.me/countries", {
              method: "POST",
              body: JSON.stringify({...country}),
              headers: {'content-type': 'application/json'}
            }).then(setcountry({}))
            .then(alert("Country added Successfully!"))
        }
  }

    return(
        <>
        <h2 style = {{color: "blue"}}>Add Country Of Your Choice</h2>
        <div className = "cityDiv">
            <input onChange={handleChange} id = "country" type="text" placeholder = "add country" required/>
            <button onClick = {handleAdd}>Add Country</button>
        </div>
        </>
    )
}