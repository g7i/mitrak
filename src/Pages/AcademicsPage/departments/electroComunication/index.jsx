import React from 'react'
import { FillImage, Heading, Paragraph } from '../../../../components/styledComponents/GlobalComponents'
import styled from "styled-components"
import { ListItem } from '../components/imageSlider'

const ElectroCommunicationPage = () => {
    return (
        <>
      <FillImage
        src={
          "https://www.mitrc.ac.in/wp-content/uploads/2020/08/front-1024x502.jpg"
        }
      />
      <Section>
        <Heading>{`Vision`}</Heading>
        <Paragraph>
          {`The vision of the department is to produce comprehensively confident, technically strong, socially responsible and innovative electrical engineers in the region.`}
        </Paragraph>
      </Section>

      <Section>
        <Heading>{`Mission`}</Heading>
        <Paragraph>
          {`The Electrical Engineering program prepares engineers to enter into a dynamic and rapidly changing world with career opportunities in Electrical Power Systems, Integrated Circuits, Electrical Industry, Robotics and Controls. The demand for Electrical power is increasing rapidly and thereby electrical engineers are in great demand to meet the requirements. The Electrical Engineering Department was established in the year 2010 with 60 students intake and it was doubled in 2012. At present the department offers undergraduate Course in Electrical Engineering. The Department has well equipped laboratories such as Electrical Machines laboratory, Power Systems Laboratory, Control Systems laboratory, Electrical Measurements laboratory, Power Electronics & Drives Laboratory, Electrical Workshop, Computer laboratory, Electrical and Electronics laboratory. The infrastructure and lab facilities are upgraded timely to provide opportunities to students to learn and innovate and keep them in sync with the industry advancements.`}
        </Paragraph>
        <Paragraph>
          {`The Electrical department of MITRC Alwar has visited to 220 kv GSS and various industries which manufacturing transformers, motors and switch gears for the practical exposure. The department also provides short term training with the association of industry expert to make the skillful engineers. The department has distinguished faculties, all holding M. Tech. degrees from renowned institutes in India and some are pursuing PhD. The department also undertakes research projects sponsored by both the government and/or the industry. The staff members and students of the department are actively involved in extracurricular activities including blood donation, ‘services to community’ and energy awareness programs etc.`}
        </Paragraph>
      </Section>

      <Section>
          <Heading>{`Labs`}</Heading>
           <ul>
            <ListItem style={{ marginTop: "0.4rem", color: "#152D35" }}>
              Hydraulic Engineering Lab
            </ListItem>
            </ul>
      </Section>
    </>
    )
}

export default ElectroCommunicationPage


const Section = styled.div`
  margin: 4rem 0;
`;

