import styled from "styled-components";

export const Container = styled.div`
display: flex;
margin-top: 100px;
height: 67vh;
`;

export const BoxButton = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
flex-direction: column;
`;
export const TitleAboutUs = styled.p`
margin-bottom: 30px;
font-size: 40px;
font-weight: bold;

@media screen and (max-width:480px) {
    font-size: 22px;
}
`;

export const ButtonAboutUs = styled.button`
display: flex;
align-items: center;
justify-content: center;
height: 100px;
width: 300px;
background-color: #ffdeda;
border: 2px solid #111;
border-radius: 8px;
cursor: pointer;
font-size: 24px;
position: relative;
font-weight: bold;

:after {
content: "";
background-color: #111;
border-radius: 8px;
height: 100px;
width: 300px;
position: absolute;
transform: translate(15px, 15px);
transition: transform .2s ease-out;
z-index: -1;
}

:hover:after {
  transform: translate(0, 0);
}

:active {
  background-color: #ffdeda;
  outline: 0;
}

:hover {
outline: 0;
animation: cor 3s linear;
animation-iteration-count: infinite
}
@keyframes cor {
    0% {
        background-color: #ffdeda;
    }
    50% {
        background-color: #fac633;
    }
    100% {
        background-color: #ffdeda;
    }
}

@media screen and (max-width: 480px) {
    height: 80px;
    width: 200px;
:after {
    height: 80px;
    width: 200px;
}
}

`;


export const BoxUp = styled.div`
width: 60%;
display: inline-block;
position: relative;
text-align: center;

@media screen and (max-width:915px) {
 width:100% ;
 padding: 8px;
}
`;

export const ImageLogo = styled.img `
margin-left: 345px;
animation: logo 2s linear;
opacity: 0.8;

@keyframes logo {
    0% {
        width: 5px;
        height: 5px;
        margin-top: -150px;
        transform: rotate(360deg);
    }
    100% {
        width: 250px;
        height: 250px;
        margin-top: 0;
        transform: rotate(0deg);
    }
}
@media screen and (max-width:915px) {
    width: 200px;
    height: 200px;
    margin-left: 90px;
@keyframes logo {
    0% {
        width: 5px;
        height: 5px;
        margin-top: -150px;
        transform: rotate(360deg);
    }
    100% {
        width: 200px;
        height: 200px;
        margin-top: 0;
        transform: rotate(0deg);
    }
}
}
`;

export const Title = styled.h2`
position: absolute;
top: 115px;
font-size: 64px;
color:  #d1b155;
text-shadow: 2px 2px 5px black;
text-align: start;
animation: title 2s linear;

@keyframes title {
    0% {
        font-size: 0px;
        margin-top: -150px;
        transform: rotate(0deg);
    } 
    100% {
        font-size: 64px;
        margin-top: 0;
        transform: rotate(720deg);
    }
}

@media screen and (max-width:480px) {
    font-size: 28px;

    @keyframes title {
    0% {
        font-size: 0px;
        margin-top: -150px;
        transform: rotate(0deg);
    } 
    100% {
        font-size: 28px;
        margin-top: 0;
        transform: rotate(720deg);
    }
}
}

`;
export const Paragraph = styled.p`
position: absolute;
top: 200px;
font-size: 28px;
color: ${props => props.theme.paletteColor.colorText};
font-weight: bold;
text-align: start;
animation: paragraph 2s linear ;

@keyframes paragraph {
    from {
        margin-left: -1140px;
    } 
    to {
        margin-left: 0px;
    }
}

@media screen and (max-width:480px) {
    font-size: 16px;
    top: 165px;
}

`;

export const BoxDown = styled.div`
width: 40%;
display: flex;
align-items: flex-start;
justify-content: center;

@media screen and (max-width:915px){
 display: none ;
}
`;
export const ImageChildren = styled.img`
animation: child 2s linear;

@keyframes child {
    from {
        opacity: 0;
        width: 5px;
        height: 5px;
    }to {
        opacity: 1;
        width: 400px;
        height: 400px;
    }
}

@media screen and (max-width:915px) {
    display: none;
}
`;

export const Risco = styled.hr`
@media screen and (max-width:915px) {
 display: none ;
}
`;