import LandingPage from "./Pages/LandingPage";
import Navbar from "./components/Navbar";
import ContactHeader from "./components/Navbar/ContactHeader";
import AboutUsPage from "./Pages/AboutUsPage";


const App = () => {
  return (
    <>
        <ContactHeader />
        <Navbar />
        <LandingPage />
        {/* <AboutUsPage /> */}
    </>
  );
}



export default App;
