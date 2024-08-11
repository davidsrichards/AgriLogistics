import Component from "../Components/Component";
import { Routes, Route, HashRouter } from "react-router-dom";
function RoutComponent() {
  return (
    <HashRouter basename="">
      <Component />
    </HashRouter>
  );
}

export default RoutComponent;
