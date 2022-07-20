import React,{useState,useEffect} from 'react';
import Navbar from "../../components/Navbar/index";
import ContactHeader from "../../components/Navbar/ContactHeader";
import Footer from "../../components/Footer/Footer";
import { listDocuments } from "../../utils/firebase/db";
import {PageHead } from "../../components/styledComponents/New";
import { CircularProgress } from "@mui/material";
import {
    govtSelectionImages,
    placementActivitiesImages,
    studentPlacementImages,
    testimonialImages,
    mitrcnews  
  } from "./staticData/doc";


function Mitrcnews() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      (async () => {
        setLoading(true);
        setData(await listDocuments('placementsData', 'mitrcNews'))
        setLoading(false);
      })();
    }, []);   
  
    return (
      <div>
        <h1 className="pagehead" style={{border:"none",fontSize:'3em',textAlign:'center',fontWeight:'500',marginBottom:'0.5em' }}>MITRC NEWS </h1>
        <para style={{fontsize:'1em',textAlign:'center',padding:'5em',fontWeight:'200'}}>
          At MITRC, placement cell focus a lot on industry readiness of budding technocrats, other than the technical education Training and Placement department runs mandatory programs for students.
        </para>
        <div className="grid" style={{padding:'6em',paddingTop:'2em',justifyContent:'center',textAlign:'center'}} >
          {mitrcnews.map(item => (
            <img key={item.url} src={item.url} alt="" onLoad={e => e.target.classList.add('loaded')} style={{width:'40%', height:'50%',objectFit:'contain',margin:'1em'}}/>
          ))}
          {/* {data.map(item => (
            <img key={item.photo} src={item.photo} alt="" onLoad={e => e.target.classList.add('loaded')}  style={{width:'40%', height:'50%',objectFit:'contain',margin:'1em'}}/>
          ))} */}
        </div>
        <div className="loader">
          {loading && <CircularProgress size={30} />}
        </div>
      </div>
    );
  }
  

function MitrcNewses(){
    
    return (
        <div className="mitrcnews">
            <ContactHeader/>
            <Navbar/>
            <Mitrcnews/>
            
            <Footer/>
        </div>
    );
};


export default MitrcNewses;