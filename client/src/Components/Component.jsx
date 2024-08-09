// imorting modules
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import NavigationBar from "./NavigationBar/NavigationBar";
import HomeComponent from "./HomeComponent/HomeComponent";

function Component() {
  return (
    <div>
      <NavigationBar />
      <HomeComponent />
    </div>
  );
}

export default Component;
