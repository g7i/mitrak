import React, { useState, useEffect } from 'react'
import Banner from '../../components/Banner'
import Layout from '../../constants/Layout'
import PagesLayout from '../../constants/PagesLayout'
import { useParams } from 'react-router-dom';
import { amenities, studentaffair, clubandactivities } from './staticData/doc';
import { FillImage, HalfImage, Heading, HyperLink, ListItem, PageContainer, Paragraph } from '../../components/styledComponents/GlobalComponents';
import ComplaintForm from './ComplaintForm';
import BusChart from "./BusChart";
import Slider from "react-slick";

const CampusLife = () => {

    const { routename, child } = useParams();
    const [obj, setObj] = useState();
    const [index, setIndex] = useState(0);

console.log('child', child)

    useEffect(() => {
        if (routename === 'amenities')
            setObj(amenities);
        else if (routename === 'studentaffair' || routename === "madatory-disclosures")
            setObj(studentaffair)
        else if (routename === 'clubandactivities')
            setObj(clubandactivities)
        return () => {

        }
    }, [routename])

    useEffect(() => {
        if(child === 'hostel') setIndex(0)
        else if(child === 'laundary') setIndex(1)
        else if(child === 'conveyance') setIndex(2)
        else if(child === 'canteen') setIndex(3)
        else if(child === 'mess') setIndex(4)
        else if(child === 'gym') setIndex(5)
        else if(child === 'medical') setIndex(6)
        else if(child === 'library') setIndex(7)
        else if(child === 'seminar hall') setIndex(8)
        else if(child === 'language lab') setIndex(9)
    },[child])

    const relatedLinks = {
        "amenities": [
            { title: "Hostel" },
            { title: "Laundary" },
            { title: "Conveyance" },
            { title: "Canteen" },
            { title: "Mess" },
            { title: "Gym" },
            { title: "Medical"},
            { title: "Library"},
            { title: "Seminar Hall"},
            { title: "Language Lab"},
        ],
        "studentaffair": [
            { title: "Anti Ragging" },
            { title: "Dress Code" },
            { title: "Identity Card" },
            { title: "Safety & Security" },
            { title: "Substance Abuse" },
            { title: "Grievance" },
            { title: "Medicare" },
            { title: "Student Wellbeing" },
            { title: "College Commitees" }
        ],
        "madatory-disclosures": [
            { title: "Anti Ragging" },
            { title: "Dress Code" },
            { title: "Identity Card" },
            { title: "Safety & Security" },
            { title: "Substance Abuse" },
            { title: "Grievance" },
            { title: "Medicare" },
            { title: "Student Wellbeing" },
            { title: "College Commitees" }
        ],
        "clubandactivities": [
            { title: "AadharClub" },
            { title: "Healthfulness Science & Spirituality Club" },
            { title: "Mech. Contours Club" },
            { title: "IGnight Robotics Club" },
            { title: "Tech Wizard Club" },
            { title: "ElectroCrew Club" }
        ]
    }

    const hostelLinks = [
        {title: "HOSTEL REGISTRATION", path: "/campus-life/hostel-registeration"},
        {title: "HOSTEL RULES", path: "/"},
        {title: "HOSTEL NOTICES", path: "/"},
        {title: "HOSTEL NEWS & ACTIVITIES", path: "/"},
        {title: "PERMISSION FOR ACCESSORIES & CELEBRATIONS", path: "/campus-life/pacform"},
        {title: "PERMISSION FOR GOING OUTSIDE /HOME", path: "/campus-life/permission-going-outside"},
        {title: "WARDEN INFORMATION", path: "/campus-life/hostel-warden"},
        {title: "HOSTEL GRIEVANCE", path: "/campus-life/hostel-grievance"},
    ]


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true
    };

    return (
        <Layout>
            <Banner
                bannerHeading={routename === "madatory-disclosures" ? "Mandatory Disclosures" : "Campus Life @MITRC"}
                bannerDescription={routename}
            />
            <PagesLayout rightNavLinks={relatedLinks[routename]} currentRoute={routename} pageName='campus-life' secondaryLinks={child === "hostel" && hostelLinks}>
                <PageContainer>
                    <Slider {...settings}>
                        {
                            amenities[index]?.images?.map(item => (
                                <HalfImage src={item} alt="image carousel" />
                            ))
                        }

                    </Slider>
                    {
                        obj?.map(item => item.title === child && (
                            <>
                                {/*{item?.imageUrl && (<FillImage src={item?.imageUrl} alt="mitrc image" />)}*/}
                                {
                                    Object.keys(item).map(key => (
                                        <>
                                            <Heading>{item[key]?.contentHeading}</Heading>
                                            <Paragraph>{item[key]?.para}</Paragraph>
                                            {item[key]?.list?.map(listItem => (
                                                <ListItem>{listItem}</ListItem>
                                            ))}

                                            {item[key]?.links?.map(link => (
                                                <div style={{ marginTop: '2vh' }}>
                                                    <HyperLink href={link?.link}>{link?.title}</HyperLink>
                                                </div>
                                            ))}
                                        </>
                                    ))
                                }
                            </>
                        ))
                    }
                    {
                        (child === 'grievance' || child ===  'complaint of caste base descrimination') && (<ComplaintForm title={child} />)
                    }
                    {
                        child === 'conveyance' && <BusChart />
                    }
                </PageContainer>
            </PagesLayout>
        </Layout>
    )
}

export default CampusLife
