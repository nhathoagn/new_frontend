
import "./App.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Landing from "./page/landing/landing";

import Register from "./page/landing/register";
import Login from "./page/landing/login";

function App() {
    const dark = true
  return (
    <div className={`${dark ? "dark" : ""} relative `}>
      <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
