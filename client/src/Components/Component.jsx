// imorting modules
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import NavigationBar from "./NavigationBar/NavigationBar";
import HomeComponent from "./HomeComponent/HomeComponent";
import Scroller from "./GlobalComponent/Scroller/Scroller";

function Component() {
  return (
    <div>
      <NavigationBar />
      <HomeComponent />
      <Scroller />
    </div>
  );
}

export default Component;
