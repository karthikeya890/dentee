import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Auth from "./utils/auth/auth";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Services from "./pages/Services/Services";
import Clinics from "./pages/Clinics/Clinics";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Auth></Auth>} />
        <Route
          path="/Services"
          element={
            <Auth>
              <Services />
            </Auth>
          }
        />
        <Route
          path="/Clinics"
          element={
            <Auth>
              <Clinics />
            </Auth>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
