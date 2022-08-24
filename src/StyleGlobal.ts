import { createGlobalStyle } from "styled-components";

const GlogalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding:0;
        box-sizing: border-box;
        font-family: roboto, sans-serif;
    }
    body {
        background-color: ${props => props.theme.paletteColor.background};
        color:  ${props => props.theme.paletteColor.colorText};
    }
    ol, ul {
	list-style: none;
}
`;
export default GlogalStyle;