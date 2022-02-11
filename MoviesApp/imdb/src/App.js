import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Movies from "./components/Movies";
import Pagination from "./components/Pagination";
import Favourities from "./components/Favourities";

import { BrowserRouter, Route, Routes } from "react-router-dom"; //do routing install these function
/*
1) wrap the app function return statement with BrowserRouter
2) <Routes> -> iske andr hm apne routes denge
3) <Route path="/" element ={ jsx ik div me wrap krke sare element bhjege} -> 

4) click par page change ho to hm jidr click krna chahte hai uss tag wrap krege Link from react router dom
eg:  <Link to="/" className="text-blue-700 font-bold text-xl md:text-3xl pl-8"> movies  </Link>
*/

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar></Navbar>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner></Banner>
                <Movies></Movies>
                <Pagination></Pagination>
              </>
            }
          ></Route>
          <Route path="/favourite" element={<Favourities/> }></Route>
        </Routes>
        {/* <Banner></Banner>
      <Movies></Movies>
      <Pagination></Pagination> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
