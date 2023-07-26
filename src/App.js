import logo from './logo.svg';
import './App.css';
import ListTouris from "./component/ListTouris";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes} from "react-router";
import Edit from "./component/Edit";
import Add from "./component/add";
import Detail from "./component/detail";


function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<ListTouris/>}/>
          <Route path="/edit/:id" element={<Edit/>}/>
          <Route path="/add" element={<Add/>}/>
          <Route path="/detail/:id" element={<Detail/>}/>
      </Routes>
    </>
  );
}

export default App;
