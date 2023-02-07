import "./App.css";
import AllTheBooks from "./Components/AllTheBooks";
import MyFooter from "./Components/MyFooter";
import "./Components/MyNav";
import MyNav from "./Components/MyNav";
import Welcome from "./Components/Welcome";

function App() {
  return (
    <>
      <MyNav></MyNav>
      <Welcome></Welcome>
      <AllTheBooks></AllTheBooks>
      <MyFooter></MyFooter>
    </>
  );
}

export default App;
