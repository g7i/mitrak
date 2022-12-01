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
                        <Event>
                          <div className="title">Extension of Approval by AICTE</div>
                          <div className="grid grid-cols-2">
                          <a href="https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/APIS%2FMITRC%20RELATED%2FEOA%20Report_22-23.pdf?alt=media&token=f27b35e0-b4b6-401d-884d-fc6c0b8ac339">Session 2022-23</a>
                            <a href="https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/images%2FAcademics%2FPublic%20Mandatory%20Disclosure%2FEOA_Report%2021-22.PDF?alt=media&token=1e3d9ce4-699d-4164-b6ad-c398ae3a1958">Session 2021-22</a>
                            <a href="https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/APIS%2FEOA%2FAICTE_2020-21.pdf?alt=media&token=50473e51-17a6-4d06-a42a-8905914968e3">Session 2020-21</a>
                            <a href="https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/APIS%2FEOA%2FAICTE%202019-20.PDF?alt=media&token=84319ac6-e703-44a1-9e8c-853c7851a0b3">Session 2019-20</a>
                            <a href="https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/APIS%2FEOA%2Faicte%202018-19.pdf?alt=media&token=c445a287-7741-4dc3-9631-aef5701585f6">Session 2018-19</a>
                          </div>
                        </Event>
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
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/APIS%2FAICTE%20Feedback.png?alt=media&token=bed99fc9-a8ff-4854-ad74-fc5855ad33c8"
                    alt=""/>
                </Cont>
            </Wrapper>
        </Layout>
    );
};

export default MandatoryPublicDisclosuresPage;
