import "./App.css";
import LandingPage from "./Pages/HomePage";
import Navbar from "./components/Navbar";
import ContactHeader from "./components/Navbar/ContactHeader";
import LandingSectionsPage from './Pages/HomePage/LandingSectionsPage';
import Footer from "./components/Footer/Footer";
import AboutUsSection from './Pages/HomePage/sections/AboutUsSection';
import ScrollToTop from "./components/ScrollToTop";
import UpdatesCarousel from "./Pages/HomePage/UpdatesCarousel";
import 'bootstrap/dist/css/bootstrap.min.css';
import React,{Component,useState} from "react";
import Carousel from "nuka-carousel";
import { Decorator } from "typescript";
import Popup from "reactjs-popup";
import styled from "styled-components";
import {addContact} from "./utils/firebase/contacts";
import { FillButton, FillImage, Heading, HyperLink, Paragraph } from "./components/styledComponents/GlobalComponents";
// import Layout from '../../constants/Layout';
import Layout from "./constants/Layout";
import { TextField,Box,AutoComplete } from '@mui/material'
import Options from "./components/Options/Options";



const ContactsPopup = () => {
  const [loading, setLoading] = useState(false);

    const submitContactForm = async (e) => {
      e.preventDefault();
      setLoading(true);

      const name = e.target.name.value;
      const phone = e.target.phone.value;
      const message = e.target.message.value;
      const email = e.target.email.value;
      

      try {
        await addContact({ name, phone,email ,message, createdAt: Date.now(), title: "Contact" });
        e.target.reset();
      } catch (e) {
        alert("Unable to submit message");
      }

      setLoading(false);
    }

    return (       
          <div>
            <div className="contactForm">
              <Heading style={{ fontSize: "1.8rem" }}>
                Send us your enquiry
              </Heading>
              <form onSubmit={submitContactForm}>
                <TextField
                  name="name"
                  title="Full Name"
                  label="Full Name"
                  variant="outlined"
                  required
                  style={{ width: "80%", marginTop: "1em" }}
                />
                
                <TextField
                  name="phone"
                  title="Phone Number"
                  label="Phone Number"
                  variant="outlined"
                  required
                  style={{ width: "80%", marginTop: "1em" }}
                />
                <TextField 
                  name="email"
                  title="Email Address"
                  label="Email Address"
                  variant="outlined"
                  required
                  style={{ width: "80%", marginTop: "1em" }}
                  />
                <Options  />
                  
                <TextField
                  name="message"
                  title="Message"
                  label="Message"
                  placeholder="Type your message here"
                  variant="outlined"
                  multiline
                  required
                  style={{ width: "80%", marginTop: "1em" }}
                />
                <FillButton disabled={loading} type="submit" style={{ width: "40%" }}>{loading ? 'Submitting' : 'Submit'} Form</FillButton>
              </form>
            </div>
          </div>    
    );
}






const PopupModal = ({url}) => {
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
  React.useEffect(() => {
      setTimeout(() => {
          setOpen(true)
      }, 1000)
  }, [setOpen]) 
  if (!open) return null // also this line is useless, since you're using the `open` prop of the Popup component

  return (
      <Popup open={open} closeOnDocumentClick onClose={closeModal} >
          <h1 className="popupstyle"><ContactsPopup/></h1>
      </Popup>
  );
};

const App = () => {
  return (
    <>
      <div className="app-main-container">
        <PopupModal/>
        <ContactHeader />
        <Navbar />
        <LandingPage />
        <LandingSectionsPage />
        <Footer />
      </div>
    </>
  );
}

export default App;
