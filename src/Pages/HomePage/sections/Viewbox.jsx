import React from 'react'
import "./viewbox.css";
import {GrView} from "react-icons/gr";

function Viewbox() {
  return (
    <div className='lg:m-10 m-10 '>
        <div className='box' style={{color:'yellow'}}>
            <div className="section section1">
            
                <a href="https://mitrc.ac.in/placements/activities" style={{textDecoration:'none',color:'orange',fontSize:'30px',alignSelf:'center'}}> 
                    <div className='m-auto justify-center '>
                      <img src="https://icones.pro/wp-content/uploads/2021/05/icone-oeil-beurre-jaune.png" alt=""  className="m-auto justify-center" style={{width:'40px'}}/>
                      View
                    </div>
                    <div style={{color:"white",fontWeight:'bold'}}>
                    Placements @ MITRC
                    </div>
                </a>
            </div>
            <div className="section section2">
                <a href="https://mitrc.ac.in/placements/news" style={{textDecoration:'none',color:'orange',fontSize:'30px'}}> 
                <div className='m-auto justify-center '>
                        
                      <img src="https://icones.pro/wp-content/uploads/2021/05/icone-oeil-beurre-jaune.png" alt=""  className="m-auto justify-center" style={{width:'40px'}}/> View
                    </div>
                    <div style={{color:"white",fontWeight:'bold'}}>
                    Placement News
                    </div>
                </a>
        </div>
        <div className="section section3">
            
            <a href="https://mitrc.ac.in/campus-life/national-level-events" style={{textDecoration:'none',color:'orange',fontSize:'30px'}}> 
            <div className='m-auto justify-center '>
                      
            <img src="https://icones.pro/wp-content/uploads/2021/05/icone-oeil-beurre-jaune.png" alt="" className="m-auto justify-center" style={{width:'40px'}}/>  View
                    </div>
                    <div style={{color:"white",fontWeight:'bold'}}>
                        National & State Level Events
                    </div>
            </a>
        </div>
        </div>
    </div>
  )
}



export default Viewbox