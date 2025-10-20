import { Routes, Route } from "react-router-dom";
import { MovieProvider } from "./contexts/MovieContext";
import { Home, Favorites, NotFound } from "./pages";
import { Navigation, Footer } from "./components/ui";
import "./css/index.css";

function App() {
  return (
    <MovieProvider>
      <Navigation />
      <main className="mainContent">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </MovieProvider>
  );
}

export default App;
