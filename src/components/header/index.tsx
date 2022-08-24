import { Container, ContainerLeft, Title, ListUL, ListLi, ImageLogo, NavbarLink, Paragraph, BoxModoDark } from "./style";
import  Switch  from "react-switch";
import { useContext } from "react";
import { ThemeContext } from "styled-components";

interface Props {
    togglerTheme: () => void
}

export default function Header({togglerTheme}: Props) {
    const routes = [{
        label: "Calculadora",
        to: "/"
    }, {
        label: "Sobre nós",
        to: "/Sobrenos"
    }];

    const { title } = useContext(ThemeContext);

    return(
        <Container>
            <ContainerLeft>
                <ImageLogo src={require("assets/LogoCalculadora.png")} alt="Logo Calculadora"/>
                <Title>CalcuEasy</Title>
            </ContainerLeft>
            <div>
                <ListUL>
                    {routes.map((rota, index) => (
                        <ListLi key={index}>
                            <NavbarLink to={rota.to}>
                                {rota.label}
                            </NavbarLink>
                        </ListLi>
                    ))}
                    <BoxModoDark>
                        <Paragraph htmlFor="switch" >Modo Dark ?</Paragraph>
                        <Switch
                            onChange={togglerTheme}
                            checked={title === "Dark"}
                            width={50}
                            height={20}
                            id="switch"
                        /> 
                    </BoxModoDark>
                    
                </ListUL>
            </div>
        </Container>
    );
}