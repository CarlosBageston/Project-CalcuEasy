import { DefaultTheme, ThemeProvider } from "styled-components";
import GlogalStyle from "StyleGlobal";
import Router from "routes/routes";
import { Ligth } from "theme/Ligth";
import useSaveState from "hooks/useSaveState";

function App() {
    const [ theme, setTheme ] = useSaveState<DefaultTheme> ( "theme" , Ligth);

    return (
        <div>
            <ThemeProvider theme={theme}>
                <Router setTheme={setTheme} theme={theme} />
                <GlogalStyle />
            </ThemeProvider>
        </div>
    );
}

export default App;
