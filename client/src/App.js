import "swiper/swiper.min.css";
import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "boxicons";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Routes_ from "./config/Routes_";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="*"
            element={
              <>
                <Header />
                <Routes_ />
                <Footer />
              </>
            }
          ></Route>
          {/* <Route path="/tv" element={<Header />}></Route> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
