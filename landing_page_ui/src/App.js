import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Industries from "./pages/Industries";
import Services from "./pages/Services";
import Cases from "./pages/Cases";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" exact element={<Home />} />
      <Route path="/services" exact element={<Services />} />
      <Route path="/industries" exact element={<Industries />} />
      <Route path="/cases" exact element={<Cases />} />
      <Route path="/contact-us" exact element={<Contact />} />

      {/* 404 routes */}
      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
