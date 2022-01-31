import {Cont, H4, PageHead} from "../../../components/styledComponents/New";
import React, {useEffect} from "react";
import {getImagesLab} from "../../../utils/firebase/department";
import {Collections} from "../../../utils/firebase/storage";
import ImageSlider from "./components/imageSlider";
import {useHistory} from "react-router-dom";


export function CSE() {
  const {push} = useHistory();
  useEffect(() => {
    push('/academics/departments/cse/home');
  }, []);
  return null;
}

export function EE() {
  return (
    <Cont>
      <PageHead>Electrical Engineering</PageHead>
      <p>The Electrical Engineering program prepares engineers to enter into a dynamic and rapidly changing world with
        career opportunities in Electrical Power Systems, Integrated Circuits, Electrical Industry, Robotics and
        Controls. </p>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/images%2F2020-8%2Ffront-1024x502.jpg?alt=media&token=9a736de7-a30f-4faf-a4a5-e7b05bc41fef"
        alt="img"/>
      <H4>Vision</H4>
      <p>The vision of the department is to produce comprehensively confident, technically strong, socially responsible
        and innovative electrical engineers in the region.</p>
      <H4>Mission</H4>
      <p>The Electrical Engineering program prepares engineers to enter into a dynamic and rapidly changing world with
        career opportunities in Electrical Power Systems, Integrated Circuits, Electrical Industry, Robotics and
        Controls. The demand for Electrical power is increasing rapidly and thereby electrical engineers are in great
        demand to meet the requirements. The Electrical Engineering Department was established in the year 2010 with 60
        students intake and it was doubled in 2012. At present the department offers undergraduate Course in Electrical
        Engineering. The Department has well equipped laboratories such as Electrical Machines laboratory, Power Systems
        Laboratory, Control Systems laboratory, Electrical Measurements laboratory, Power Electronics & Drives
        Laboratory, Electrical Workshop, Computer laboratory, Electrical and Electronics laboratory. The infrastructure
        and lab facilities are upgraded timely to provide opportunities to students to learn and innovate and keep them
        in sync with the industry advancements.</p>
      <p>The Electrical department of MITRC Alwar has visited to 220 kv GSS and various industries which manufacturing
        transformers, motors and switch gears for the practical exposure. The department also provides short term
        training with the association of industry expert to make the skillful engineers. The department has
        distinguished faculties, all holding M. Tech. degrees from renowned institutes in India and some are pursuing
        PhD. The department also undertakes research projects sponsored by both the government and/or the industry. The
        staff members and students of the department are actively involved in extracurricular activities including blood
        donation, ‘services to community’ and energy awareness programs etc.</p>
      <H4>Labs at MITRC</H4>
      <ul>
        {[
          "Machine Lab", "High Voltage Engg. Lab", "Power System Lab", "Control System Lab", "EEE Lab", "Measurement Lab", "Power Electronics Lab", "Circuit Analysis Lab etc"
        ].map(f => <li key={f}>{f}</li>)}
      </ul>
    </Cont>
  );
}

export function EC() {
  return (
    <Cont>
      <PageHead>Electronics & Communication</PageHead>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/images%2F2020-8%2Ffront-1024x502.jpg?alt=media&token=9a736de7-a30f-4faf-a4a5-e7b05bc41fef"
        alt="img"/>
      <H4>Vision</H4>
      <p>The vision of the department is to produce comprehensively confident, technically strong, socially responsible
        and innovative electrical engineers in the region.</p>
      <H4>Mission</H4>
      <p>The Electronics & Communication program prepares engineers to enter into a dynamic and rapidly changing world with
        career opportunities in Electrical Power Systems, Integrated Circuits, Electrical Industry, Robotics and
        Controls. The demand for Electrical power is increasing rapidly and thereby electrical engineers are in great
        demand to meet the requirements. The Electrical Engineering Department was established in the year 2010 with 60
        students intake and it was doubled in 2012. At present the department offers undergraduate Course in Electrical
        Engineering. The Department has well equipped laboratories such as Electrical Machines laboratory, Power Systems
        Laboratory, Control Systems laboratory, Electrical Measurements laboratory, Power Electronics & Drives
        Laboratory, Electrical Workshop, Computer laboratory, Electrical and Electronics laboratory. The infrastructure
        and lab facilities are upgraded timely to provide opportunities to students to learn and innovate and keep them
        in sync with the industry advancements.</p>
      <p>The Electrical department of MITRC Alwar has visited to 220 kv GSS and various industries which manufacturing
        transformers, motors and switch gears for the practical exposure. The department also provides short term
        training with the association of industry expert to make the skillful engineers. The department has
        distinguished faculties, all holding M. Tech. degrees from renowned institutes in India and some are pursuing
        PhD. The department also undertakes research projects sponsored by both the government and/or the industry. The
        staff members and students of the department are actively involved in extracurricular activities including blood
        donation, ‘services to community’ and energy awareness programs etc.</p>
      <H4>Labs at MITRC</H4>
      <ul>
        {[
          "Hydraulic Engineering Lab"
        ].map(f => <li key={f}>{f}</li>)}
      </ul>
    </Cont>
  );
}

export function CE() {
  const [labImages, setLabImages] = React.useState([]);
  React.useEffect(() => {
    getImagesLab(Collections.departments.civil).then((imageList) => {
      setLabImages(imageList);
    });
  }, []);

  return (
    <Cont>
      <PageHead>Civil Engineering</PageHead>
      <p>
        <i>“Civil Engineering is a professional engineering discipline that deals with the design, construction and maintenance of the physically and naturally built environment.”</i>
      </p>
      <p>Civil Engineering has been since the dawn of humanity. Since, the civilizations of Ancient Egypt, Indus Valley and Mesopotamia (ancient Iraq), civil engineering has been the driver of the socio-economic development of the human race. One of the earliest examples of scientific approach to civil engineering dates back to 7 AD. Civil engineering is a broad field of engineering covering many specialties. It includes construction engineering, environmental engineering, fire protection engineering, geotechnical engineering, hydraulic engineering, structural engineering, and transportation engineering. The term "civil engineering" was first used in the eighteenth century, to distinguish it from military engineering. Most civil engineering projects today deal with the planning, construction, and maintenance of power plants, bridges, roads, railways, structures, water supply systems, irrigation, pollution control systems, sewer systems.</p>
      <img src="https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/images%2F2020-8%2Ffront-1024x502.jpg?alt=media&token=9a736de7-a30f-4faf-a4a5-e7b05bc41fef" alt="img"/>
      <H4>About The Department</H4>
      <p>The Civil Department of the MITRC College, Alwar was founded in 2011 with the mission of providing quality education in the field of Civil Engineering. The Civil Engineering is an evergreen and a booming sector and one of the major driving industries of the Indian economy. A civil engineer requires a fine balance of theoretical knowledge and practical experience. The Civil Department of MITRC boasts of well qualified faculty and well-equipped laboratories for the same. The students are also frequently taken to industrial trips to expose them to the industry and real world situations. Seminars, talk shows and guest lectures from prominent practicing engineers, professors and scholars are also held. The students are given complete opportunity to learn from their experience and inculcate professional values in their lives.</p>
      <H4>Civil Engineering Labs at MITRC</H4>
      <ul>
        {[
          "Hydraulic Engineering Lab",
          "Geo Technical Engineering Lab",
          "Structural Lab",
          "Geology Lab",
          "Turbo Lab",
          "Surveying Lab",
          "Auto Cad Lab",
          "Building Drawing Lab",
          "Concrete Technology Lab",
          "RMT Lab Environmental Lab",
          "Water Resource Engineering Lab",
          "Estimating & Costing Lab",
          "Civil Engineering & Material Lab"
        ].map(f => <li key={f}>{f}</li>)}
      </ul>
      <ImageSlider imageArray={labImages}/>
      <H4>Career in Civil Engineering</H4>
      <p>Civil Engineering is the oldest branch of engineering &incorporate the design & construction of roads, airport, tunnel, bridges, water supply & sewage system, dams, harbors, Railroad system, Nuclear & Thermal Power plants. Civil engineer works us construction engineer, Environmental Engineer, Public Work Engineer.</p>
      <H4>Job Profile</H4>
      <ul>
        <li>Object Oriented Analysis & Design.</li>
        <li>Test theoretical design.</li>
        <li>Discuss proposals with clients.</li>
        <li>Carry out project planning & prepare budget.</li>
        <li>Civil engineer work in public & private sector in all branches of design construction, maintenance of road, highway, bridges, dams, canals etc.</li>
      </ul>
      <H4>Start-Up Schemes for Engineers</H4>
      <p>A comprehensive list of start-up schemes introduced by Govt. of India in Last few years. The Indian govt. has introduced over 50+ start-up for engineers, each startup scheme is boosting towards New Era & Dream. There are closed to 4400 technology start-up exist in India & the No. is expected to reach over 10,000 by 2020. India is also at 3rd place behind US & Britain in terms of start-up.</p>
    </Cont>
  );
}

export function ME() {
  return (
    <Cont>
      <PageHead>Mechanical Engineering</PageHead>
      <p>One of the oldest and broadest fields of engineering, Mechanical engineering deals with the design, construction, and use of machines. The programme endows students with the basic understanding and knowledge of how heavy tools and machinery work. A student pursuing a mechanical engineering programme will acquire knowledge about designing of automobiles, electric motors, aircraft and other heavy vehicles. Mechanical engineers design everything from new batteries, athletic equipment to medical devices and from personal computers, air conditioners, automobile engines to electric power plants. These engineers also design machines that produce these innovations. The scope of mechanical engineering in India and abroad is huge for every aspect of our lives are touched by mechanical engineering in one way of the other. Spanning multiple industries, the career opportunities for students pursuing the programme is huge.</p>
      <img src="https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/images%2F2020-8%2Ffront-1024x502.jpg?alt=media&token=9a736de7-a30f-4faf-a4a5-e7b05bc41fef" alt="img"/>
      <H4>About The Department</H4>
      <p>The Mechanical Department of the MITRC College, Alwar was founded in 2007 with the mission of providing quality education in the field of Mechanical Engineering. The Mechanical Engineering is One of the most diverse and versatile engineering fields, mechanical engineering is the study of objects and systems in motion. As such, the field of mechanical engineering touches virtually every aspect of modern life, including the human body, a highly complex machine. A mechanical engineer requires a fine balance of theoretical knowledge and practical experience. The Mechanical Engineering Department of MITRC boasts of well qualified faculty and well-equipped laboratories for the same. The students are also frequently taken to industrial visits to expose them to the industry and real-world situations. Seminars, talk shows and guest lectures from prominent practicing engineers, professors and scholars are also held time to time. Faculties are providing complete opportunity to learn from their experience and inculcate professional values in student’s lives.</p>
      <H4>Mechanical Engineering Labs at MITRC</H4>
      <ul>
        {[
          "Mechanical Workshop",
          "Thermal Engineering Lab",
          "Thermal Engineering Lab",
          "Basic Mechanical Engineering Lab",
          "Turbo Lab",
          "Auto Cad Lab",
          "Machine Drawing Lab",
          "Production Engineering Lab",
          "Heat Transfer Lab",
          "Vibration Lab",
          "Automobile Engineering Lab",
          "Fluid Machinery Lab",
          "Dynamics of Machines Lab",
        ].map(f => <li key={f}>{f}</li>)}
      </ul>
      <H4>Career in Mechanical Engineering</H4>
      <p>Society depends on mechanical engineering. The need for this expertise is great in so many fields, and as such, there is no real limit for the freshly minted mechanical engineer. Jobs are always in demand, particularly in the automotive, aerospace, electronics, biotechnology, and energy industries.</p>
      <p>Here are a handful of mechanical engineering fields.</p>
      <p>In statics, research focuses on how forces are transmitted to and throughout a structure. Once a system is in motion, mechanical engineers look at dynamics, or what velocities, accelerations and resulting forces come into play. Kinematics then examines how a mechanism behaves as it moves through its range of motion.</p>
      <p>Materials science delves into determining the best materials for different applications. A part of that is materials strength—testing support loads, stiffness, brittleness and other properties—which is essential for many constructions, automobile, and medical materials.</p>
      <p>How energy gets converted into useful power is the heart of thermodynamics, as well as determining what energy is lost in the process. One specific kind of energy, heat transfer, is crucial in many applications and requires gathering and analyzing temperature data and distributions.</p>
      <p>Fluid mechanics, which also has a variety of applications, looks at many properties including pressure drops from fluid flow and aerodynamic drag forces. Manufacturing is an important step in mechanical engineering. Within the field, researchers investigate the best processes to make manufacturing more efficient. Laboratory methods focus on improving how to measure both thermal and mechanical engineering products and processes. Likewise, machine design develops equipment-scale processes while electrical engineering focuses on circuitry. All this equipment produces vibrations, another field of mechanical engineering, in which researchers’ study how to predict and control vibrations.</p>
      <p>Engineering economics makes mechanical designs relevant and usable in the real world by estimating manufacturing and life cycle costs of materials, designs, and other engineered products.</p>
      <H4>Job Profile</H4>
      <ul>
        <li>Object Oriented Analysis & Design.</li>
        <li>Test theoretical design.</li>
        <li>Discuss proposals with clients.</li>
        <li>Carry out project planning & prepare budget.</li>
        <li>Mechanical engineer work in public & private sector in all branches of design construction, maintenance of road, highway, bridges, dams, canals etc.</li>
      </ul>
      <H4>Start-Up Schemes for Engineers</H4>
      <p>A comprehensive list of start-up schemes introduced by Govt. of India in Last few years. The Indian govt. has introduced over 50+ start-up for engineers, each startup scheme is boosting towards New Era & Dream. There are closed to 4400 technology start-up exist in India & the No. is expected to reach over 10,000 by 2020. India is also at 3rd place behind US & Britain in terms of start-up.</p>
    </Cont>
  );
}
