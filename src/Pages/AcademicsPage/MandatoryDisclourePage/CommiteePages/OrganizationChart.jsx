import React from "react";
import {
    FillImage,
  Heading,
  Paragraph,
} from "../../../../components/styledComponents/GlobalComponents";
import { ComplaintButton, Heading2 } from "./styles";

const OrganizationaChartPage = () => {
  return (
    <div>
      <Heading>ORGANIZATIONAL CHART AND PROCESSES</Heading>
      <Paragraph>
        The hierarchical arrangement of the lines of authority, communications,
        rights and duties of MITRC
      </Paragraph>
      <FillImage
        src={
          "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/images%2Forganization-chart-mitrc.jpg?alt=media&token=b298fd5d-282d-43de-b786-1cd86e37af8c"
        }
      />
      <FillImage
        src={
          "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/ACADEMICS%2FMANDATORY%20DISCLOSURE%2FORGANISATION%20CHART.jpg?alt=media&token=43f30aef-93af-48c0-a429-5746dfbd60cf"
        }
      />
    </div>
  );
};

export default OrganizationaChartPage;
