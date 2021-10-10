import styled from "styled-components";
import {
    FillImage,
  Heading,
  Paragraph,
} from "../../components/styledComponents/GlobalComponents";

export const CoporateFeedback = ({ feedback }) => {
  const { name, company, imageUrl, description } = feedback;
  return (
    <FeedBackMainContainer>
      <FeedbackImage src={imageUrl} alt="recruiter-image" />
      <FeedBackSecondContainer>
        <Heading style={{ paddingTop: 0, marginTop: 0 }}>{name}</Heading>
        <Paragraph style={{ fontSize: "1.7rem", fontWeight: 700 }}>
          {company}
        </Paragraph>
        <Paragraph>{description}</Paragraph>
      </FeedBackSecondContainer>
    </FeedBackMainContainer>
  );
};

const FeedBackMainContainer = styled.div`
  display: flex;
  width: 80%;
  background-color: #fff;

  padding: 20px;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  box-shadow: 5px 2px 10px 4px #888888;
  margin: 20px auto;
  @media (max-width: 768px) {
    flex-direction: column;
    row-gap: 20px;
  }
`;
const FeedbackImage = styled.img`
  width: 140px;
  height: 140px;
  object-fit: contain;
`;

const FeedBackSecondContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  flex: 1;
`;

export const PlcaementSummary = ({obj}) => {
    const {heading , description , imageUrl} = obj;
  return (
    <PlacementSummaryContainer>
      <Heading>{heading}</Heading>
      <Paragraph>{description}</Paragraph>
      <FillImage src={imageUrl} alt={"placement-image"}/>
    </PlacementSummaryContainer>
  );
};

const PlacementSummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;
