import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Listings from "./pages/Listings";
import Post from "./pages/Post";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/listings" element={<Listings />} />
      <Route path="/post" element={<Post />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
