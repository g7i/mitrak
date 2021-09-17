import styled , {keyframes} from "styled-components";
import { FaArrowAltCircleDown} from "react-icons/fa";

const IconAnimation = keyframes`
 0% {}
 50% { transform : translateY(5px)}
 
`;


export const ExploreMoreContainer = styled.div`
  width: 200px;
  height: 50px;
  border-radius: 40px;
  background-color: white;
  box-shadow: 5px 2px 10px 4px #888888;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  padding: 10px;
  
  &:hover{
      transform: scale(1.1);
      transition: all 100ms linear;
  }
`;

export const ExploreIcon = styled(FaArrowAltCircleDown)`
  width: 30px;
  height: 30px;
  color: #7b7fda;
  animation: ${IconAnimation} 2s infinite;

`;

export const ExploreText = styled.p`
    font-size: 20px;
    
`


