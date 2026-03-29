import "./App.css";
import NavBar from "./Components/Navbar";
import Banner from "./Components/Banner";
import Footer from "./Components/Footer";
import Models from "./Components/Models";
import Cart from "./Components/Cart";
import { useState } from "react";

const getData = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

const dataPromise = getData();
console.log(dataPromise);

function App() {
  const [activeTab, setActiveTab] = useState("model");
  const [carts, setCarts] = useState([]);
  console.log(carts);
  console.log(activeTab);
  return (
    <div>
      <NavBar />
      defaultChecked
      <Banner />
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-box justify-center bg-transparent ">
        <input
          type="radio"
          name="my_tabs_1"
          className={`tab rounded-full w-40 ${activeTab == "model" ? "bg-black" : ""}`}
          aria-label="Models"
          onClick={() => setActiveTab("model")}
          defaultChecked
        />
        <input
          type="radio"
          name="my_tabs_1"
          className={`tab rounded-full w-40 ${activeTab == "cart" ? "bg-black" : ""}`}
          aria-label="Cart"
          onClick={() => setActiveTab("cart")}
        />
      </div>
      {activeTab === "model" && (
        <Models dataPromise={dataPromise} carts={carts} setCarts={setCarts} />
      )}
      {activeTab === "cart" && <Cart carts={carts} />}
      <Footer />
    </div>
  );
}

export default App;
