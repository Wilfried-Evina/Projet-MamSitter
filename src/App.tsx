import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./components/Home";
import ProfileMamaSitter from "./pages/ProfileMamaSitter";
import Messaging from "./pages/Messaging";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profil-mamasitter" element={<ProfileMamaSitter />} />
          <Route path="/messagerie" element={<Messaging />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
