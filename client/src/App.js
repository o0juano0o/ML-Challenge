import { Routes, Route } from "react-router-dom";
import Header from "./containers/Header";
import Main from "./containers/Main";
import Products from "./components/Products";
function App() {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
