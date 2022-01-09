import React from 'react';
import styled from 'styled-components';

const BusChart = () => {

    const data = [
        {
            title: "BUS ROUTE NUMBER 3",
            route: "GOVINDGARH TO MITRC",
            link: ""
        },
        {
            title: "BUS ROUTE NUMBER 4",
            route: "BHIWADI TO MITRC",
            link: ""
        },
        {
            title: "BUS ROUTE NUMBER 5",
            route: "KHAIRTHAL TO MITRC",
            link: ""
        },
        {
            title: "BUS ROUTE NUMBER 6",
            route: "KAMLA NURSING TO MITRC",
            link: ""
        },
        {
            title: "BUS ROUTE NUMBER 8",
            route: "ASHOKA TALKIES TO MITRC",
            link: ""
        },
        ,
        {
            title: "BUS ROUTE NUMBER 9",
            route: "NEB THANA TO MITRC",
            link: ""
        },
        {
            title: "BUS ROUTENUMBER 10",
            route: "IPS SCHOOL TO MITRC",
            link: ""
        },
        {
            title: "BUS ROUTENUMBER 11",
            route: "DAUDPUR TO MITRC",
            link: ""
        },
        {
            title: "BUS ROUTENUMBER 12",
            route: "RAJGARH TO MITRC",
            link: ""
        },
        {
            title: "BUS ROUTENUMBER 13",
            route: "RAJGARH TO MITRC",
            link: ""
        }
    ]

    return (
        <Container>
            <table>
                <tr>
                    <th>Bus Route</th>
                    <th>Route</th>
                    <th>Stops & Timings</th>
                </tr>
                {
                    data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.title}</td>
                            <td>{item.route}</td>
                            <td><a href="#">View</a></td>
                        </tr>
                    ))
                }
            </table>
        </Container>
    );
};

export default BusChart;

const Container = styled.div`
  
`;

const Table = styled.table `
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
`

