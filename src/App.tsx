
import { Main } from './App'
import AboutUs from './components/AboutUs'
import Header from './components/Header'
import Profile from './components/Profile'
import { GlobalStyles } from './styles'

function App() {

  return (
    <>
    
    <GlobalStyles />
      <Header/>
      <Main>
        <AboutUs/>
        <Profile/>
      </Main>
    </>

  )
}

export default App
