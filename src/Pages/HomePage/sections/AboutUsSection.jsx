import React from "react";
import { HalfScreenContainer, Heading, Paragraph, Wrapper, HalfWrapper, VideoFrameContainer } from "../../../components/styledComponents/GlobalComponents";

const AboutUsPage = () => {
    return (
        <div  haveSvg={true}>
            <div className="bg-gray-100 py-20">
              <div className="m-auto w-10/12 ">
                <div className="lg:flex mt-30 items-center" >
                <div className="text-center mb-8" >
                      <p className="uppercase font-bold text-3xl lg:hidden" >About Us</p> 
                      {/* add link of about us */}
                    </div>
                  <div className="lg:w-[50%] w-full " >
                    <div style={{
                      position: "relative",
                      height: 0,
                      overflow: "hidden",
                      width: "100%",
                    }}
                    className="rounded-[20px] pt-[30px] pb-[50%]"
                    >
                      <iframe
                        style={{position: "absolute", top: "50%", left: "50%", width: "90%", height: "100%", maxHeight: '315px',borderRadius:'20px',padding:'1px',boxShadow:'25px', transform: "translate(-50%, -50%)" }}
                        width="560" height="315" src="https://www.youtube.com/embed/5L-sLqaJefs" title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
                    </div>
                  </div>
                  <div  className="lg:w-[50%] w-full ml-[15px] mb-[20px]" >
                    <div className="lg:-mb-4" >
                      <p className="lg:uppercase lg:font-bold lg:opacity-70 hidden" >About Us</p> 
                      {/* add link of about us */}
                    </div>
                  <div className="lg:justify-left text-center leading-3 " >
                  <p className="lg:text-3xl text-2xl lg:font-bold font-semibold capitalize -mb-0.5  lg:mt-0 mt-8">Welcome to</p>
                  <p className="lg:text-3xl text-xl lg:font-bold font-semibold  capitalize">Modern institute Of technology & research centre, alwar (Raj.)</p> </div>
               
                    <p className="opacity-95">
                      MITRC Alwar 
                      add another feather in the already colorful cap of Alwar, Rajasthan. Since its inception in 2007,
                      Modern Institute of Technology & Research Centre (An Engineering and Management College),
                       Alwar  has been known to enable students to carve a niche for themselves and develop
                      a  personality. Ranked as one of the best private engineering and management colleges of
                       MITRC Alwar 
                      provides students with state-of-the art infrastructure which helps them to attain understanding of
                      their chosen engineering discipline. Engineering transforms scientific discoveries into technological solutions for
                      the benefit of humanity. Everything we rely on for work, life and play has been touched by Engineering.
                    </p>
                  </div>
                </div>
              </div>
            </div>
        </div>
    )
}

export default AboutUsPage;
