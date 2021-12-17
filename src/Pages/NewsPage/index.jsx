import React, { useEffect, useState } from 'react'
import { Container, Heading } from '../../components/styledComponents/GlobalComponents'
import Layout from '../../constants/Layout'
import { listNews } from '../../utils/firebase/news';
import { NewsComponent } from '../HomePage/sections/News';
import styled from 'styled-components'

const NewsScreen = () => {

    const [newsList, setNewsList] = useState([]);
    useEffect(() => {
        try {
            listNews().then((data) => {
                setNewsList(data);
            });
        } catch (error) { }
    }, []);

    return (
        <Layout>
            <Container>
                <Heading>Latest News From The Campus</Heading>
                <GridContainer>
                    {newsList
                        ?.filter((item) => item.type == "new")
                        .map((item) => (
                            <NewsComponent
                                news={item}
                                width={
                                    newsList?.filter((item) => item.type == "new").length === 1
                                        ? "100%"
                                        : "50%"
                                }
                            />
                        ))}
                </GridContainer>
            </Container>
        </Layout>
    )
}

export default NewsScreen

const GridContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;