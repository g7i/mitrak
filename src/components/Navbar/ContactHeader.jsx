import React from 'react';
import { Nav,Text,Wrapper } from '../styledComponents/Navbar';
import { AiOutlineMail, AiFillPhone, AiFillFacebook, AiFillLinkedin, AiFillTwitterCircle, AiOutlineGooglePlus, AiOutlineYoutube } from 'react-icons/ai'

const ContactHeader = () => {
    return (
        <Nav background="#32404D" flexType="space-around">
            <Wrapper>
                <Wrapper>
                    <AiOutlineMail color={"#FFFFFF"} />
                    <Text color="#FFFFFF">info@mitrc.ac.in</Text>
                </Wrapper>
                <Wrapper>
                    <AiFillPhone color={"#FFFFFF"} />
                    <Text color="#FFFFFF">info@mitrc.ac.in</Text>
                </Wrapper>
            </Wrapper>
            <Wrapper>
                <AiFillFacebook color="#FFFFFF" style={{marginLeft: '1rem'}} size={20}/>
                <AiFillLinkedin color="#FFFFFF" style={{marginLeft: '1rem'}} size={20}/>
                <AiFillTwitterCircle color="#FFFFFF" style={{marginLeft: '1rem'}} size={20}/>
                <AiOutlineGooglePlus color="#FFFFFF" style={{marginLeft: '1rem'}} size={20}/>
                <AiOutlineYoutube color="#FFFFFF" style={{marginLeft: '1rem'}} size={20}/>
            </Wrapper>
        </Nav>
    )
};



export default ContactHeader;