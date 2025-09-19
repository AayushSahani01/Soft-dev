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
    <div>
      <BrowserRouter basename="/">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />{" "}
              </>
            }
          />
        </Routes>
      </BrowserRouter>

      <div className="grid grid-cols-12">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="col-span-9 p-4">
          {/* Banner */}
          <Banner />
          {/* Products */}
          <ProductCard />
          <ProductCard />

          {/* Pagination */}
          <Pagination />
        </main>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
