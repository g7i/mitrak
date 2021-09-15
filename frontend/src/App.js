import LandingPage from "./Pages/LandingPage";
import Navbar from "./components/Navbar";
import ContactHeader from "./components/Navbar/ContactHeader";
import AboutUsPage from "./Pages/AboutUsPage";
import LandingSectionsPage from './Pages/LandingPage/LandingSectionsPage';
import MainNav from "./components/Navbar/MainNav";


const App = () => {
  return (
    <>
        <ContactHeader />
        <Navbar />
        {/* <MainNav /> */}
        <LandingPage />
        <AboutUsPage />
        <LandingSectionsPage />
    </>
  );
}



export default App;
