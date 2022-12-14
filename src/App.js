import logo from "./logo.svg";
import "./App.css";
import Home from "./page/home/home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Landing from "./page/landing/landing";
import {ToastContainer} from "react-toastify";

function App() {
    const dark = true
  return (
    <div className={`${dark ? "dark" : ""} relative `}>
      {/*<Home />*/}
        <ToastContainer
            position='top-right'
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover={false}
            theme={dark ? "dark" : "light"}
        />
      <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing/>}/>
            </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
