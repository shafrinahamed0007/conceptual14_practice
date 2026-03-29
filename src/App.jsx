import "./App.css";
import NavBar from "./Components/Navbar";
import Banner from "./Components/Banner";
import Footer from "./Components/Footer";
import Models from "./Components/Models";

const getData = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

const dataPromise = getData();
console.log(dataPromise);

function App() {
  return (
    <div>
      <NavBar />
      <Banner />
      <Models dataPromise = {dataPromise} />
      <Footer />
    </div>
  );
}

export default App;
