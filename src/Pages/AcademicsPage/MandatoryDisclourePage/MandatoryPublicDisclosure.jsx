import React from "react";
import Banner from "../../../components/Banner";
import Layout from "../../../constants/Layout";
import {RoutingData, publicRoutingData, publicTables} from "./data";
import {Link, useHistory} from "react-router-dom";
import {Cont, Event, PageHead, Wrapper} from "../../../components/styledComponents/New";

const MandatoryPublicDisclosuresPage = () => {
    const history = useHistory();

    const handleClick = (e, link) => {
        e.stopPropagation();
        e.preventDefault();
        window.location.href = link;
    }

    return (
        <Layout>
            <Banner bannerHeading="Mandatory Public Disclosures"/>
            <Wrapper>
                <Cont className="content full">
                    <PageHead>Mandatory Public Disclosures</PageHead>
                    <br/>
                    <div className="grid">
                        {publicRoutingData.map((item) => (
                            <Event
                                key={item?.link}
                                onClick={() => {}}
                            >
                                <div className="title">{item.title}</div>
                                <div className="foot">
                                    <Link to="#" onClick={e => handleClick(e, item.pdf)}>View</Link>
                                </div>
                            </Event>
                        ))}
                    </div>
                </Cont>
            </Wrapper>
            <Wrapper>
                <Cont className="content full">

                    {
                        publicTables.map(table => (
                            <div style={{ marginTop: '2rem' }}>
                                <PageHead>{table.heading}</PageHead>
                                <table border="1">
                                    <thead>
                                    <tr>
                                        {
                                            table.header.map(th => (
                                                <th>{th}</th>
                                            ))
                                        }
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        table.tableData.map(td => (
                                            <tr>
                                                {
                                                    td.map((d, index) => (
                                                        <td style={{textAlign: index === 0 || table.center === index || table.center2 === index ? 'center' : ''}}>{d}</td>
                                                    ))
                                                }
                                            </tr>
                                        ))
                                    }
                                    </tbody>
                                </table>
                            </div>
                        ))
                    }
                </Cont>
            </Wrapper>
        </Layout>
    );
};

export default MandatoryPublicDisclosuresPage;
