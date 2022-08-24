import styled from "styled-components";
import {Link} from "react-router-dom";

export const Container = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
box-shadow: 0px 13px 19px -8px ${props => props.theme.paletteColor.colorShadow};
height: 100px;
background-color: ${props => props.theme.paletteColor.background};
width: 100%;

@media screen and (max-width:900px) {
    flex-wrap: wrap;
}
`;

export const ContainerLeft = styled.div`
display: flex;
align-items: center;

@media screen and (max-width: 480px) {
    justify-content: space-around;
    margin-left: 5px;
    width: 10em;
}
`;

export const ImageLogo = styled.img`
width: 72px;
height: 72px;

@media screen and (max-width: 900px) {
    width: 52px;
    height: 52px;
}
`;

export const Title = styled.h1`
margin-left: 15px;
font-size: 34px;


@media screen and (max-width: 480px) {
    font-size: 20px;
    margin-left: -5px;
}
`;

export const ListUL = styled.ul `
display: flex;
align-items: center;
`;

export const ListLi = styled.li`
padding: 20px;
margin-left: 10px;
font-size: 24px;

@media screen and (max-width: 480px) {
    padding: 5px;
    font-size: 18px;
    width: 6em;
    margin-left: 5px;
}
`;

export const NavbarLink = styled(Link)`
 color: ${props => props.theme.paletteColor.colorText};
 text-decoration: none;
 font-weight: 600;
&:hover{
    color: ${props => props.theme.paletteColor.defoultGreen};
    opacity: 1;
    transform: translateY(0);
    transition-duration: .35s;
}:active {
  color: gray;
}
`;

export const BoxModoDark = styled.div`
display: flex;
width: 13em;
justify-content: space-around;
margin-left: 32px;

@media screen and (max-width:900px) {
    width: 9em;
    margin-left: 0;
    justify-content: flex-start;
}
`;

export const Paragraph = styled.label`
font-weight: 600;
font-size: 20px;

@media screen and (max-width:900px) {
    font-size: 16px;
    margin-right: 4px;
}
`;