import {Routes, Route, BrowserRouter} from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register.jsx";
import Market from "./pages/market/Market.jsx";
import Yields from "./pages/yields/Yields.jsx";
import Property from "./pages/property/Property.jsx";
import Education from "./pages/education/Education.jsx";
import About from "./pages/about/About.jsx";
import EducationContent from "./pages/EducationContent/EducationContent.jsx";


const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Home/>
                    }
                />
                <Route
                    path="/login"
                    element={
                        <Login/>
                    }
                />
                <Route
                    path="/register"
                    element={
                        <Register/>
                    }
                />
                <Route
                    path="/market"
                    element={
                        <Market category="property"/>
                    }
                />
                <Route
                    path="/property"
                    element={
                        <Property/>
                    }
                />
                <Route
                    path="/yields"
                    element={
                        <Yields/>
                    }
                />
                <Route
                    path="/education"
                    element={
                        <Education/>
                    }
                />
                <Route
                    path="/content"
                    element={
                        <EducationContent/>
                    }
                />
                <Route
                    path="/about"
                    element={
                        <About/>
                    }
                />
            </Routes>
        </BrowserRouter>
    )
};

export default App;