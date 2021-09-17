import React from 'react'
import Navbar from '../components/Navbar';
import ContactHeader from '../components/Navbar/ContactHeader';
import Footer from '../components/Footer/Footer';

const Layout = ({children}) => {
    return (
        <div style={{overflow: 'hidden'}}>
            <ContactHeader />
            <Navbar />
            <div>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout
