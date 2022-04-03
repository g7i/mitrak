import LandingPage from "./Pages/HomePage";
import Navbar from "./components/Navbar";
import ContactHeader from "./components/Navbar/ContactHeader";
import LandingSectionsPage from './Pages/HomePage/LandingSectionsPage';
import Footer from "./components/Footer/Footer";
import AboutUsSection from './Pages/HomePage/sections/AboutUsSection';
import ScrollToTop from "./components/ScrollToTop";
import UpdatesCarousel from "./Pages/HomePage/UpdatesCarousel";


const App = () => {
  return (
    <>
      <div className="app-main-container">
        <ContactHeader />
        <Navbar />
        <LandingPage />
        <LandingSectionsPage />
        <UpdatesCarousel />
        <Footer />
      </div>
    </>
  );
}

export default App;
