import styled, { keyframes } from "styled-components";


// export const Box = styled.div`
//    display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
 
//   width: 100vw;
//   height: 100vh;
 
//   background: ${(props) => props.theme.primary};
// `;


export const Banner = styled.div`
  display: flex;
  height: 100vh;
 
`;

export const BannerEsquerdo = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const BannerDireito= styled.div`
  flex: 1;

  .MinhaFoto{
    width: 100%;
    height: 100%;
    margin-left: -51px;
  
  }
`;

export const BannerWrapper = styled.div`
  padding: 50px;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

`;

export const Descri= styled.h2`
  font-size: 60px;
  margin-top: -36px;
  color: ${(props) => props.theme.secundary};
`;

export const Intro= styled.h2`
  font-size:30px;
  font-weight: 300;
  color: ${(props) => props.theme.secundary};

`;


export const BannerTitle= styled.div`
  height: 90px;
  
`;


export const TitleItem= styled.div`
  height: 80px;
  font-size: 30px;
  font-weight: bold;
  color: #cc2fff;
  display: flex;
  align-items: center;

  .emoji{
    color: purple;
  }

`;
export const Bio= styled.div`
    font-size: 14px;
    width: 419px;
    margin-top: 60px;
`;


export const Icons = styled.div`
  display: flex;
`;

export const IconsInstagram = styled.button`
margin-top: 38px;
color: #cc2fff;
cursor: pointer;
border: none;
transition: all 0.4s ease;
background: transparent;

.link{
  color: #cc2fff;

  &:hover{
  color: purple;
  transform: translateY(-4px);
  }

  &:active{
    color: purple;
    transform: translateY(-4px);
  }
}
`;

export const IconsGithub = styled.button`
margin-top: 38px;
color: #cc2fff;
cursor: pointer;
border: none;
transition: all 0.4s ease;
background: transparent;
.link{
  color: #cc2fff;

  &:hover{
  color: purple;
  transform: translateY(-4px);
  }
  
  &:active{
    color: purple;
    transform: translateY(-4px);
  }
}
`;

export const IconsLinkedin = styled.button`
margin-top: 38px;
color: #cc2fff;
cursor: pointer;
border: none;
transition: all 0.4s ease;
background: transparent;
.link{
  color: #cc2fff;

  &:hover{
  color: purple;
  transform: translateY(-4px);
  }
  
  &:active{
    color: purple;
    transform: translateY(-4px);
  }
}
`;



// export const Button = styled.button`
//   transition: all 0.2s ease;
//   margin: 8px 0px;
//   border: none;
//   background: ${(props) => (props.color ? props.color : "black")};
//   color: white;
//   padding: 8px 20px;
//   border-radius: 24px;
//   font-size: 24px;

//   &:hover {
//     background: yellowgreen;
//     cursor: pointer;
//     transform: translateY(-4px);
//   }

//   &:active {
//     background: olivedrab;
//     transform: translateY(-2px);
//   }
// `;

// export const ButtonAlt = styled(Button)`
//   font-family: "Times New Roman";
//   color: black;
// `;
