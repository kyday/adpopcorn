import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./components/Common/Navbar/Navbar";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <>
      <Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Navbar>
    </>
  );
}

export default App;
