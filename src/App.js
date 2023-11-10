import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import MainAppScreen from "./screens/MainAppScreen";
import DietPlanScreen from "./screens/DietPlanScreen";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} />
      <Routes>
        <Route path={"/"} element={<MainAppScreen />} />
        <Route path={"/diet-plan"} element={<DietPlanScreen />} />
      </Routes>
    </>
  );
}

export default App;
