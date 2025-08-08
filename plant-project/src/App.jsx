
import { BrowserRouter, Routes, Route, Form } from "react-router-dom";
import LandingPageApp from "./pages/LandingPageApp";
import FormName from "./pages/FormName"; 
import InfoPage from "./pages/InfoPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPageApp />} />
        <Route path="/info-page" element={<InfoPage />} />
        <Route path="/form-name" element={<FormName />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;