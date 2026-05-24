import { Footer, Header } from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AboutPage, HomePage, LetterboxdPage, MadeToPlayPage } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/made-to-play" element={<MadeToPlayPage />} />
        <Route path="/letterboxd" element={<LetterboxdPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
