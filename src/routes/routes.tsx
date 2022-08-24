import AboutUs from "components/aboutUs";
import Footer from "components/footer";
import Header from "components/header";
import MainPage from "components/main page";
import { Dispatch, SetStateAction} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DefaultTheme } from "styled-components";
import { Dark } from "theme/dark";
import { Ligth } from "theme/Ligth";

interface props {
    theme: DefaultTheme,
    setTheme: Dispatch<SetStateAction<DefaultTheme>>
}

export default function Router({setTheme, theme}:props) {
    

    const togglerTheme = () => {
        setTheme(theme.title === "Ligth" ? Dark : Ligth);
    };
    return(
        <main>
            <BrowserRouter>
                <Header  togglerTheme={togglerTheme}/>
                <Routes>
                    <Route path="/" element={<MainPage/>} />
                    <Route path="/Sobrenos" element={<AboutUs/>} />
                </Routes>
                <Footer/>
            </BrowserRouter>

        </main>
    );
}
