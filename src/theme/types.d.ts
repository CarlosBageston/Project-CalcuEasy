import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        title: string,

        paletteColor: {
            background: string;
            defoultGreen: string;
            colorBorder: string;
            colorText: string;
            colorShadow: string;
            colorParagraph: string;
            colorInput: string;
        }
    }
}