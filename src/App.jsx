import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Sidebar from "./components/Home/Sidebar";
import Banner from "./components/Home/Banner";
import ProductCard from "./components/Home/ProductCards";
import Pagination from "./components/Home/Pagination";
import Footer from "./components/Footer";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              {/* Left Side Bar */}
              <div className="grid grid-cols-12 pt-12 ">
                <Sidebar />

                {/* Main home Section here */}
                <main className="col-span-9 p-4 max-sm:col-span-12
                 max-md:col-span-12 ">
                  <Banner />
                   <ProductCard />
                  <Pagination />
                </main>
              </div>
              {/* Footer */}
              <Footer />
            </>
          }
        />

        {/* <Route
          path="/bags"
          element={
            <>
              <Navbar />
              <ProductCard />
              <Pagination />
              <Footer />
            </>
          }
        />
        <Route
          path="/sneakers"
          element={
            <>
              <Navbar />
              <div className="p-4">Sneakers</div>
              <Footer />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Navbar /> <div>Contract us</div>
            </>
          }
        /> */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
