import styled , {keyframes} from "styled-components";
import { FaArrowAltCircleDown} from "react-icons/fa";
import { Colors } from '../../constants/UiConstants'

const IconAnimation = keyframes`
 0% {}
 50% { transform : translateY(5px)}
 
`;


export const ExploreMoreContainer = styled.a`
  width: 200px;
  height: 50px;
  text-decoration: none;
  color: ${Colors.PRIMARY};
  border-radius: 40px;
  background-color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  padding: 10px;
  box-shadow: -4px 1px 35px -4px rgba(92,68,68,0.75);
-webkit-box-shadow: -4px 1px 35px -4px rgba(92,68,68,0.75);
-moz-box-shadow: -4px 1px 35px -4px rgba(92,68,68,0.75);
cursor: pointer;
  
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


