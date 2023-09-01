import Navbar from "./components/Navbar";
import {Route, Routes} from "react-router-dom";
import MainAppScreen from "./screens/MainAppScreen";
import DietPlanScreen from "./screens/DietPlanScreen";

function App() {
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path={'/'} element={<MainAppScreen/>}/>
                <Route path={'/diet-plan'} element={<DietPlanScreen/>}/>
            </Routes>
        </>
    )
}

export default App;
