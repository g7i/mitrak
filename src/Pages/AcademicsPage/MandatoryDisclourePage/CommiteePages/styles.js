import styled from "styled-components";
export const Heading2 = styled.h3`
  font-size: 1.5rem;
  color: ${(props) => props.color || "#1b1b1b"};
  width: fit-content;
  margin: 1rem 0;
`;

export const ComplaintButton = styled.button`
  width: ${(props) => props.width || "400px"};
  height: ${(props) => props.height || "fit-content"};
  background-color: blue;
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  margin: 0.5rem 0;
  color: white;
  font-size: 1rem;
  padding: 10px 30px;
  :hover {
    background-color: #4169e1;
  }
`;

export const BulletPoint = styled.ul`
  li{
    font-size : 1.2rem ;
    margin : 0;
    text-align : left ; 
    color : rgba(0,0,0,0.7); 
  }
`

export const PdfLinks = styled.a`
  text-decoration: none;
  font-size: 1.2rem;
  color: blue;
  text-align: left;
  margin: 0;
  width: 100%;
  margin : 20px 0;
  :hover {
    color: #434892;
  }
`;
