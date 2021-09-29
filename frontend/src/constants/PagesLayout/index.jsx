import React from 'react'
import styled from 'styled-components'
import { Heading, HyperLink } from '../../components/styledComponents/GlobalComponents'
import { Link } from 'react-router-dom'
const PagesLayout = ({children, rightNavLinks, currentRoute, pageName}) => {

    console.log(rightNavLinks);

    return (
        <Container>
            <div style={{width: '75%'}}>{children}</div>
            <RightNav>
                <Heading>Related Links</Heading>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    {
                        rightNavLinks?.map(link => (
                            <Link className={currentRoute === link.title.toLowerCase() ? 'activelink' : "hyperlink"} key={link?.title} to={`/${pageName}/${currentRoute}/${link.title.toLowerCase()}`}>{link?.title}</Link>
                        ))
                    }
                </div>
            </RightNav>
        </Container>
    )
}

export default PagesLayout

const Container = styled.div`
    flex: 1;
    display: flex;
`;

const RightNav = styled.div`
    height: 100%;
    background-color: #F7F6F2;
    width: 25%;
    padding: 2rem;
`;
 