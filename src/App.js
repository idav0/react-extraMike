
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import TableP5 from "./components/TableP5";
import TableFabricantes from "./components/TableFabricantes";
import TableFabricantes2 from "./components/TableFabricantes2";
import TableFabricantes3 from "./components/TableFabricantes3";
import TableFabricantes4 from "./components/TableFabricantes4";
import TableP610 from "./components/TableP610";


function App() {
  return (
   <BrowserRouter>
     <ResponsiveAppBar/>
     <Routes>
         <Route exact path={"/"}/>
         <Route path={"/punto1"} element={<TableFabricantes/>}/>
         <Route path={"/punto2"} element={<TableFabricantes2/>}/>
         <Route path={"/punto3"} element={<TableFabricantes3/>}/>
         <Route path={"/punto4"} element={<TableFabricantes4/>}/>
         <Route path={"/punto5"} element={<TableP5/>}/>
         <Route path={"/punto6-10"} element={<TableP610/>}/>
     </Routes>
   </BrowserRouter>
  );
}

export default App;
