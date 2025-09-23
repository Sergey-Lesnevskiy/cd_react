

import { Container, Main } from './App'
import AboutUs from './components/AboutUs'
import Certificate from './components/Certificate'
import Education from './components/Education'
import Header from './components/Header'
import Profile from './components/Profile'
import Skills from './components/Skills'
import { GlobalStyles } from './styles'
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { lightTheme, darkTheme } from "./theme";

function App() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
    
    <GlobalStyles />
      <Header currentTheme={theme} toggleTheme={() => setTheme(theme === "light" ? "dark" : "light")}/>
      <Main>
        <Container>

        <AboutUs/>
        <Profile/>
        <Certificate/>
        <Skills/>
        <Education/>
        </Container>
      </Main>
    </ThemeProvider>

  )
}

export default App
