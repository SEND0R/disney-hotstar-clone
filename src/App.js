import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "./components/detail/Detail";
import Login from "./components/login/Login";
import Disney from "./components/disney/Disney";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
        <Routes>
          <Route path="/detail/:id" element={<Detail />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/disney" element={<Disney />}></Route>
        </Routes>
      </BrowserRouter>
      ,
    </div>
  );
}

export default App;
