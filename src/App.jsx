import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Photos from "./pages/Photos";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/all" element={<Photos />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
