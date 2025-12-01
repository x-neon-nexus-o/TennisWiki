import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Footer from "./components/Footer";
import Products from "./components/Products";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from "./pages/About";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import ErrorPage from "./components/ErrorPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Partners from "./components/Partners";

function App() {
  return (
    <div className="app">
      <Router basename={import.meta.env.BASE_URL}>
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-12">
              <Header></Header>
            </div>
          </div>

          <Routes>
            <Route
              path="/"
              element={
                <>
                  <div className="row mb-2">
                    <div className="col-12">
                      <Slider></Slider>
                    </div>
                  </div>

                  <div className="container-fluid my-2 gap-1 p-3 rounded shadow">
                    <div className="row mb-3 text-center g-4">
                      <div className="col-sm-6 col-md-4 col-lg-3">
                        <Products
                          img="imgs/NovakHead.png"
                          title="Novak Djokovic"
                          description="Tennis Legend"
                          buttonText="Discover More"
                          link="https://www.wikipedia.org/wiki/Novak_Djokovic"
                        />
                      </div>
                      <div className="col-sm-6 col-md-4 col-lg-3">
                        <Products
                          img="imgs/NadalHead.png"
                          title="Rafael Nadal"
                          description="Clay King"
                          buttonText="Discover More"
                          link="https://www.wikipedia.org/wiki/Rafael_Nadal"
                        />
                      </div>
                      <div className="col-sm-6 col-md-4 col-lg-3">
                        <Products
                          img="imgs/AlcarazHead.png"
                          title="Carlos Alcaraz"
                          description="Young Tennis Prodigy"
                          buttonText="Discover More"
                          link="https://www.wikipedia.org/wiki/Carlos_Alcaraz"
                        />
                      </div>
                      <div className="col-sm-6 col-md-4 col-lg-3">
                        <Products
                          img="imgs/SinnerHead.png"
                          title="Jannik Sinner"
                          description="Future Star"
                          buttonText="Discover More"
                          link="https://www.wikipedia.org/wiki/Jannik_Sinner"
                        />
                      </div>
                    </div>
                  </div>


                  <div className="container-fluid my-2 gap-1 p-3 rounded shadow">
                    <div className="row mb-2 justify-content-center">
                      <div className="col-12">
                        <Partners></Partners>
                      </div>
                    </div>
                  </div>


                </>
              }
            ></Route>
            <Route path="/About" element={<About />}></Route>
            <Route path="/Contact" element={<Contact />}></Route>
            <Route path="/Service" element={<Service />}></Route>
            <Route path="*" element={<ErrorPage />} />
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
          </Routes>

          <div className="row ">
            <div className="col-12">
              <Footer></Footer>
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
