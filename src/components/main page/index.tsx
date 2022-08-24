import {
    Container,
    ContainerLeft,
    TitleContainerLeft,
    TitleLeft,
    ContainerRight,
    TitleRight,
    TitleContainerRight,
    DivInput,
    Input,
    LabelDefault,
    ButtonCalcular,
    BoxInput,
    BoxResultDiv,
    ResultCalcuP,
    SelectOptions,
    ResponseBoxDiv,
    DivResponse,
    TextUnitRight,
    BoxText,
    TextHistorico,
    Error
} from "./styles";
import useCalculate from "hooks/useCalculate";

export default function MainPage() {

    const { 
        setoperations,
        valueInput,
        setValueInput, 
        resultUnitUp,
        resultUnitDown,
        unidade1,
        unidade2,
        unidade3,
        responseUp,
        responseDown,
        calcular,
        error
    } = useCalculate();
    
    return(
        <Container>
            <ContainerLeft>
                <TitleContainerLeft>
                    <TitleLeft>Convertendo de {unidade1} para { unidade2 } e {unidade3}</TitleLeft>
                </TitleContainerLeft>
                <BoxInput>
                    <DivInput>
                        <LabelDefault htmlFor="medidas">{unidade1}:</LabelDefault>
                        <Input type="number"
                            name="medidas"
                            id="medidas"
                            value={valueInput}
                            onChange={(e) => setValueInput(parseFloat(e.target.value))}
                        />
                        <Error>{error}</Error>
                        <SelectOptions onChange={(e) => setoperations(e.target.value)}>
                            <option>Litros</option>
                            <option>Metros</option>
                            <option>Quilos</option>
                            <option>Graus Celcios</option>
                        </SelectOptions>
                    </DivInput>
                    <ButtonCalcular onClick={calcular}>Calcular</ButtonCalcular>

                </BoxInput>
                <BoxResultDiv>
                    <div>
                        <LabelDefault>{unidade2}:</LabelDefault>
                        <ResultCalcuP>{ unidade2 === "Milhas" ?  responseUp.toFixed(5) : responseUp.toFixed(2)}</ResultCalcuP>
                    </div>
                    <div>
                        <LabelDefault>{unidade3}:</LabelDefault>
                        <ResultCalcuP>{responseDown.toFixed(2)}</ResultCalcuP>
                    </div>
                </BoxResultDiv>
            </ContainerLeft>
            <ContainerRight>
                <TitleContainerRight>
                    <TitleRight>Historico de calculo</TitleRight>
                </TitleContainerRight>
                <BoxText>
                    <TextUnitRight>{unidade2}:</TextUnitRight>
                    <TextUnitRight>{unidade3}:</TextUnitRight>
                </BoxText>
                <ResponseBoxDiv>
                    <DivResponse>
                        {resultUnitUp.map(response => 
                            <TextHistorico key={response.id}>
                                {unidade2 === "Milhas" ? response.title.toFixed(5) : response.title.toFixed(2) }
                            </TextHistorico>
                        )}

                    </DivResponse>
                    
                    <hr />
                    <DivResponse>
                        {resultUnitDown.map(value => 
                            <TextHistorico key={value.id}>
                                {value.title.toFixed(2)}
                            </TextHistorico>
                        )}
                    </DivResponse>
                    
                </ResponseBoxDiv>
            </ContainerRight>
        </Container>
    );
}