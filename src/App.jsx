import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Home/SideBar";
import Banner from "./components/Home/Banner";
import ProductCard from "./components/Home/ProductCard";
import Pagination from "./components/Home/Pagination";
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <><Navbar /> </>} />
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

          {/* Pagination */}
          <Pagination />
        </main>
      </div>
    </div>
  );
}

export default App;
