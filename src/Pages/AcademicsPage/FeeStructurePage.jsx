import React from 'react';
import Layout from '../../constants/Layout';
import Banner from "../../components/Banner";
import {Link, useHistory} from "react-router-dom";
import {Container, Heading, Paragraph} from "../../components/styledComponents/GlobalComponents";
import {PageHead} from "../../components/styledComponents/New";

const FeeStructurePage = () => {
    return (
        <Layout>
            <Banner bannerHeading="Fees Structure" />
            <Container>
                <table border="1">
                    <thead>
                    <tr>
                        <th>PROGRAMME</th>
                        <th>TUTION FEES
                            (PER SEMESTER)</th>
                        <th>DEVELOPMENT FEES</th>
                        <th>UDF</th>
                        <th>CM</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr style={{ textAlign: "center" }}>
                        <td>B.TECH – AI & DS</td>
                        <td>24500</td>
                        <td>21000</td>
                        <td>2500</td>
                        <td>7500</td>
                    </tr>
                    <tr style={{ textAlign: "center" }}>
                        <td>B.TECH- AI & ML</td>
                        <td>24500</td>
                        <td>21000</td>
                        <td>2500</td>
                        <td>7500</td>
                    </tr>
                    <tr style={{ textAlign: "center" }}>
                        <td>B.TECH-CSE</td>
                        <td>24500</td>
                        <td>21000</td>
                        <td>2500</td>
                        <td>7500</td>
                    </tr>
                    <tr style={{ textAlign: "center" }}>
                        <td>B.TECH-CE</td>
                        <td>24500</td>
                        <td>21000</td>
                        <td>2500</td>
                        <td>7500</td>
                    </tr>
                    <tr style={{ textAlign: "center" }}>
                        <td>B.TECH- CE</td>
                        <td>24500</td>
                        <td>21000</td>
                        <td>2500</td>
                        <td>7500</td>
                    </tr>
                    <tr style={{ textAlign: "center" }}>
                        <td>B.TECH-EE</td>
                        <td>24500</td>
                        <td>21000</td>
                        <td>2500</td>
                        <td>7500</td>
                    </tr>
                    <tr style={{ textAlign: "center" }}>
                        <td>B.TECH-ME</td>
                        <td>24500</td>
                        <td>21000</td>
                        <td>2500</td>
                        <td>7500</td>
                    </tr>
                    <tr style={{ textAlign: "center" }}>
                        <td>M.TECH-PE</td>
                        <td>24500</td>
                        <td>21000</td>
                        <td>2500</td>
                        <td>7500</td>
                    </tr>
                    <tr style={{ textAlign: "center" }}>
                        <td>M.TECH-CSE</td>
                        <td>24500</td>
                        <td>21000</td>
                        <td>2500</td>
                        <td>7500</td>
                    </tr>
                    <tr style={{ textAlign: "center" }}>
                        <td>MBA</td>
                        <td>39500</td>
                        <td>21000</td>
                        <td>2500</td>
                        <td>7500</td>
                    </tr>
                    </tbody>
                </table>
                <div style={{ marginTop: '2rem' }} />
                <PageHead>UDF : UNIVERSITY DEVELOPEMENT FEES </PageHead>
                <Paragraph>( ONE TIME -ONLY IN FIRST YEAR )</Paragraph>
                <div style={{ marginTop: '2rem' }} />

                <PageHead>CM : CAUTION MONEY</PageHead>
                <Paragraph>( ONE TIME – REFUNDABLE )</Paragraph>
            </Container>
        </Layout>
    );
};

export default FeeStructurePage;