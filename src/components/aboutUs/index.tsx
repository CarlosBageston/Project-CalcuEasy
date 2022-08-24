import ImageChild from "assets/educacao.png";
import { useState } from "react";
import { 
    BoxDown,
    BoxUp,
    Container,
    ImageLogo,
    Paragraph,
    Title,
    ImageChildren,
    BoxButton,
    TitleAboutUs,
    ButtonAboutUs,
    Risco 
} from "./styles";

export default function AboutUs() {

    const [ ShowInfo, setShowIndo] = useState(true);

    const HandleInfo = () => {
        setShowIndo(false);
    };

    return(
        <Container>
            {ShowInfo === true ? 
                <BoxButton>
                    <TitleAboutUs>Quer saber mais sobre nós ?</TitleAboutUs>
                    <ButtonAboutUs onClick={HandleInfo}> Clique Aqui </ButtonAboutUs>
                </BoxButton> 
                : 
                <>
                    <BoxUp>
                        <ImageLogo src={require("assets/LogoCalculadora.png")} alt="Logo do site" width={250} />
                        <Title>Sobre nós</Title>
                        <Paragraph>
                            Somos um site focado em trazer rápidos resultados para você, resultados este que talvez <br />
                            você demoraria muito tempo para resolver, nós calculamos e entregamos a resposta para <br />
                            você em segundos, nós somos a CALCUEASY, sua calculadora online que calcula de modo <br />
                            fácil e rápido...
                        </Paragraph>
                    </BoxUp>
                    <Risco />
                    <BoxDown>
                        <ImageChildren src={ImageChild} alt="Criança Aprendendo" width={400}/>
                    </BoxDown>
                </>
            }
        </Container>
    );
}