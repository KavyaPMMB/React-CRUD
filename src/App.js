import "./App.css";
import Table from "./Pages/Table";
import Data from "./Data";
import { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Viewpage from "./Pages/Viewpage";
import Editpage from "./Pages/Editpage";
import Deletepage from "./Pages/Deletepage";
import Adddetails from "./Pages/Adddetails";
import Table1 from "./Pages/Table";

const Newcontext = createContext();

function App() {
  const [data, setData] = useState(Data);

  return (
    <div>
      <Newcontext.Provider value={[data, setData]}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Table />}></Route>
            <Route path="/viewpage/:user" element={<Viewpage />}></Route>
            <Route path="/editpage/:user" element={<Editpage />}></Route>
            <Route path="/deletepage/:user" element={<Deletepage />}></Route>
            <Route path="/Adddetails" element={<Adddetails />}></Route>
          </Routes>
        </BrowserRouter>
      </Newcontext.Provider>
    </div>
  );
}
export default App;
export { Newcontext };
