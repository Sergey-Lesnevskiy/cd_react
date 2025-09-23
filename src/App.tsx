
import { Main } from './App'
import AboutUs from './components/AboutUs'
import Certificate from './components/Certificate'
import Education from './components/Education'
import Header from './components/Header'
import Profile from './components/Profile'
import Skills from './components/Skills'
import { GlobalStyles } from './styles'

function App() {

  return (
    <>
    
    <GlobalStyles />
      <Header/>
      <Main>
        <AboutUs/>
        <Profile/>
        <Certificate/>
        <Skills/>
        <Education/>
      </Main>
    </>

  )
}

export default App
