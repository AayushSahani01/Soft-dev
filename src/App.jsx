import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Home/SideBar";
import Banner from "./components/Home/Banner";
import ProductCard from "./components/Home/ProductCard";
import Pagination from "./components/Home/Pagination";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <div className="grid grid-cols-12 pt-12">
                <Sidebar />

                <main className="col-span-9 p-4">
                  <Banner />
                  <ProductCard />
                   <ProductCard />
                  <Pagination />
                </main>
              </div>
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
