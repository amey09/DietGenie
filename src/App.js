import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import MainAppScreen from "./screens/MainAppScreen";
import DietPlanScreen from "./screens/DietPlanScreen";
import { useState } from "react";

function App() {
  const [dietPlan, setDietPlan] = useState(undefined);
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path={"/"}
          element={<MainAppScreen setDietPlan={setDietPlan} />}
        />
        <Route
          path={"/diet-plan"}
          element={<DietPlanScreen dietPlan={dietPlan} />}
        />
      </Routes>
    </>
  );
}

export default App;
