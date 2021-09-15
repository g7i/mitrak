import LandingPage from "./Pages/LandingPage";
import Navbar from "./components/Navbar";
import ContactHeader from "./components/Navbar/ContactHeader";
import AboutUsPage from "./Pages/AboutUsPage";
import LandingSectionsPage from './Pages/LandingPage/LandingSectionsPage';
import MainNav from "./components/Navbar/MainNav";
import Footer from "./components/Footer/Footer";


const App = () => {
  return (
    <>
      <div className="app-main-container">
        <ContactHeader />
        <Navbar />
        {/* <MainNav /> */}
        <LandingPage />
        <AboutUsPage />
        <LandingSectionsPage />
        <Footer />
      </div>
    </>
  );
}



export default App;
