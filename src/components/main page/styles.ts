import styled from "styled-components";

export const Container = styled.div`
display: flex;
justify-content: space-evenly;

@media screen and (max-width: 1045px) {
  flex-direction: column;
  align-items: center; 
}
`;

export const ContainerLeft = styled.div`
width: 650px;
height: 720px;
display: flex;
flex-direction: column;
border: 2px solid ${props => props.theme.paletteColor.colorBorder};
border-radius: 30px;
background-color: ${props => props.theme.paletteColor.background};
box-shadow: 6px 7px 4px 0px ${props => props.theme.paletteColor.colorShadow};
margin-top: 36px;

@media screen and (max-width:800px) {
  width: 90%;
}
`;

export const TitleContainerLeft = styled.div`
height: 70px;
background-color: ${props => props.theme.paletteColor.defoultGreen};
border-radius: 30px 30px 0px 0px;
display: flex;
align-items: center;
justify-content: center;
`;

export const TitleLeft = styled.h2`
font-size: 20px;
color: #FFFFFF;
text-transform: uppercase;
font-weight: bold;

@media screen and (max-width: 480px) {
  margin-left: 8px;
  font-size: 14px;
}
`;

export const ContainerRight = styled.div`
width: 365px;
height: 720px;
display: flex;
flex-direction: column;
border: 2px solid ${props => props.theme.paletteColor.colorBorder};
background-color: ${props => props.theme.paletteColor.background};
box-shadow: 6px 7px 4px 0px ${props => props.theme.paletteColor.colorShadow};
border-radius: 30px;
margin-top: 36px;

@media screen and (max-width:480px) {
  width: 90%;
}
`;

export const TitleRight = styled.h2`
font-size: 20px;
color: #FFFFFF;
text-transform: uppercase;
font-weight: bold;
`;

export const TitleContainerRight = styled.div`
height: 70px;
background-color: ${props => props.theme.paletteColor.defoultGreen};
border-radius: 30px 30px 0px 0px;
display: flex;
align-items: center;
justify-content: center;
`;

export const BoxInput = styled.div`
display: flex;
align-items: center;
margin-top: 20px;
flex-wrap: wrap;

@media screen and (max-width: 560px) {
  justify-content: center; 
}

`;

export const DivInput = styled.div `
display: inline-flex;
flex-direction: column;
margin-left: 67px;

@media screen and (max-width:480px) {
 margin-left: 0;
 width: 85%;
}
`;

export const Input = styled.input`
width: 273px;
height: 50px;
border: none;
border-radius: 15px;
box-shadow: 1px 4px 4px 0px ${props => props.theme.paletteColor.colorShadow};
padding: 12px;
outline: 0;
font-size: 24px;
background-color: ${props => props.theme.paletteColor.colorInput};
color: ${props => props.theme.paletteColor.colorParagraph};

@media screen and (max-width:480px) {
 width: 100%;
}

`;

export const LabelDefault = styled.label`
font-weight: bold;
margin-left: 12px;
font-size: 20px;
`;

export const ButtonCalcular = styled.button`
width: 120px;
height: 54px;
background-color: #27ae60;
border-radius: 8px;
border-style: none;
box-shadow: rgba(39, 174, 96, .15) 0 4px 9px;
color: #fff;
cursor: pointer;
font-size: 16px;
font-weight: 600;
padding: 13px 20px;
text-align: center;
margin-left: 50px;
margin-top: 28px;
 &:hover {
  background-color: #1e8449;
  opacity: 1;
  transform: translateY(0);
  transition-duration: .35s;
}:active {
  transform: translateY(2px);
  transition-duration: .35s;
}
@media screen and (max-width:480px) {
 margin-left: 0;
}
`;

export const BoxResultDiv = styled.div`
display: flex;
flex-direction: column;
height: 60%;
justify-content: space-around;
margin-left: 67px;

@media screen and (max-width: 480px) {
  margin-left: 10px; 
}
`;

export const ResultCalcuP = styled.p`
width: 70%;
height: 80px;
background-color: ${props => props.theme.paletteColor.colorInput};
display: flex;
align-items: center;
justify-content: center;
font-size: 36px;
box-shadow: 4px 4px 4px 0px ${props => props.theme.paletteColor.colorShadow};
border-radius: 25px;
color: ${props => props.theme.paletteColor.colorParagraph};

@media screen and (max-width:480px) {
  width: 95%; 
}
`;

export const Error = styled.p`
font-size: 16px;
margin-top: 15px;
margin-bottom: 15px;
font-weight: bold;
color: red;
margin-left: 15px;
`;

export const SelectOptions = styled.select`
height: 32px;
border-radius: 12px;
border: none;
margin-top: 12px;
padding-left: 12px;
font-size: 16px;
font-weight: bold;
box-shadow: 1px 4px 4px 0px ${props => props.theme.paletteColor.colorShadow};
outline: 0;
background-color: ${props => props.theme.paletteColor.colorInput};
color: ${ props => props.theme.paletteColor.colorParagraph}
`;

export const ResponseBoxDiv = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
height: 100vh;
overflow:auto;
`;

export const DivResponse = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 90px;
`;

export const BoxText = styled.div`
display: flex;
justify-content: space-around;
`;
export const TextUnitRight = styled.p`
font-size: 20px;
font-weight: bold;
`;

export const TextHistorico = styled.p`
font-size: 16px;
font-weight: 600;
color: ${props => props.theme.paletteColor.defoultGreen};
`;