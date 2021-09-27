import React from "react";
import styled from "styled-components";
import { CardImage } from "../../components/styledComponents/Courses";

export const NewsImage = ({ imageUrl }) => {
  const [seeMoreVisible, setSeeMoreVisible] = React.useState(false);
  return (
    <div
      style={{ width: "100%", height: "100%", position: "relative" }}
      onMouseEnter={() => setSeeMoreVisible(true)}
      onMouseLeave={() => setSeeMoreVisible(false)}
    >
      <CardImageNews src={imageUrl} blur={seeMoreVisible} />
      {seeMoreVisible && (
        <SeeMore>
          <span>See More</span>
        </SeeMore>
      )}
    </div>
  );
};

const CardImageNews = styled(CardImage)`
  ${(props) => props.blur && `filter: blur(6px);`}
  transition: filter 400ms linear;
`;

const SeeMore = styled.div`
  background-color: white;
  position: relative;
  top: -140px;
  margin: auto auto;
  width: 150px;
  height: 50px;
  z-index: 100000;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 200ms linear;
  padding: 10px 5px ;

  span {
    color: black;
    font-size: 20px;
  }
`;

