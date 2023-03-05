import Home from "./components/Home";
import Navbar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReadBlog from "./components/ReadBlog";
import NotFound from "./components/NotFound";
import CreateBlog from "./components/CreateBlog";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/createBlog" element={<CreateBlog />} />

          <Route path="/blogs/:id" element={<ReadBlog />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
