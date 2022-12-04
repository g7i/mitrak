import styled from "styled-components";
import { Colors } from "../../constants/UiConstants";

// export const FooterMainContainer = styled.div`
//   width: 100vw;
//   flex-direction: column;
//   display: flex;
//   align-items: center;
//   background-color: #003F87;
//   position: relative;
//   margin-top: 130px;
//   .waveTop {
//     background-image: url('https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/images%2Ffooter%2F2.png?alt=media&token=c3b85640-1278-45be-a601-054eac2761b0')
//   }
//   .waveMiddle {
//     background-image: url('https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/images%2Ffooter%2F1.png?alt=media&token=fe17169e-5ae8-4916-8d14-fd10a695001c')
//   }
//   .waveBottom {
//     background-image: url('https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/images%2Ffooter%2F2.png?alt=media&token=c3b85640-1278-45be-a601-054eac2761b0')
//   }
//   @keyframes move_wave {
//     0% {
//       transform: translateX(0) translateZ(0) scaleY(1);
//     }
//     50% {
//       transform: translateX(-25%) translateZ(0) scaleY(0.55);
//     }
//     100% {
//       transform: translateX(-50%) translateZ(0) scaleY(1);
//     }
//   }
//   .waveWrapper {
//     overflow: hidden;
//     position: absolute;
//     left: 0;
//     top: 0;
//     height: 130px;
//     width: 100%;
//     transform: translateY(-130px);
//   }
//   .waveWrapperInner {
//     position: absolute;
//     width: 100%;
//     overflow: hidden;
//     height: 100%;
//     bottom: -1px;
//   }
//   .bgTop {
//     z-index: 15;
//     opacity: 0.8;
//   }
//   .bgMiddle {
//     z-index: 10;
//     //opacity: 0.75;
//   }
//   .bgBottom {
//     z-index: 5;
//   }
//   .wave {
//     position: absolute;
//     left: 0;
//     width: 200%;
//     height: 100%;
//     background-repeat: repeat no-repeat;
//     background-position: 0 bottom;
//     transform-origin: center bottom;
//   }
//   .waveTop {
//     background-size: 50% 100px;
//   }
//   .waveAnimation .waveTop {
//     animation: move-wave 3s;
//     -webkit-animation: move-wave 3s;
//     -webkit-animation-delay: 1s;
//     animation-delay: 1s;
//   }
//   .waveMiddle {
//     background-size: 50% 120px;
//   }
//   .waveAnimation .waveMiddle {
//     animation: move_wave 10s linear infinite;
//   }
//   .waveBottom {
//     background-size: 50% 100px;
//   }
//   .waveAnimation .waveBottom {
//     animation: move_wave 15s linear infinite;
//   }
// `;

export const FooterSecondMainContainer = styled.div`
  padding: 2rem 2rem 5rem 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  border-bottom: 0.4px solid rgb(167, 174, 180, 0.4);
  row-gap: 40px;
  position: relative;
`;

export const FooterSectionContainer = styled.div`
  display: flex;
  margin: 10px 0px;
  min-width: 270px;
  flex-direction: column;
  @media (max-width: 768px) {
    min-width: 200px;
  }
`;

export const FooterSecondSectionContainer = styled.div`
  display: grid;
  grid-template-columns: ${({ numberOfRow }) =>
    numberOfRow == 2 ? "1fr 1fr" : "1fr"};
`;

export const SectionHeading = styled.h2`
  font-size: 1.4rem;
  color: white;
  margin-bottom: 1rem;
`;
export const SectionText = styled.a`
  font-size: 1.2rem;
  font-weight: 400;
  margin: 5px 0px;
  color: #a7aeb4;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: #fff;
  }
`;

export const CopyRightContainer = styled.div`
  padding: 1rem;
  h4 {
    color: #a7aeb4;
    font-weight: 300;
  }
`;

export const SocailMediaContainer = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 10px;
  span {
    margin: 10px;
  }
`;
export const SocialMediaIcon = styled.a`
  svg {
    width: 40px;
    height: 40px;
    color: white;
    padding:8px;
    border-radius:100px;
    border: 1px solid blue;
    background-color: blue ;
    margin: 20px 20px 0px 20px;
    &:hover {
      scale:1.1;
      color: #FFFFAA;
    }
  }
`;

export const CustomInputContainer = styled.div`
  display: flex;
  width: 300px;
  input {
    width: 250px;
    height: 40px;
    padding: 1rem;
    font-size: 1.2rem;
    &:focus {
      outline: none;
    }
  }
  div {
    width: 50px;
    height: 40px;
    background-color: #327b5c;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      color: white;
      width: 30px;
      height: 30px;
    }
  }
`;

export const LogoImage = styled.img`
  width : 200px;
  height: 50px;
  object-fit: contain;
`
