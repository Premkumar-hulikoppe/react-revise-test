import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResponsiveAppBar from "./Home/NavBar";
import {Cities} from "./cities/cities";
import {Countries} from "./country/country";
import {Home} from "./Home/Home";
import {Default} from "./Default";


export const Routers = () => {
  return (
      <>
    <ResponsiveAppBar />
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/cities/"} element={<Cities />} />
      <Route path={"/countries/"} element={<Countries />} />
      <Route path={"*"} element={<Default />} />
    </Routes>
    </>
  );
};
