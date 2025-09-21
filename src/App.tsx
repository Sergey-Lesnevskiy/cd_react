
import { Main } from './App'
import AboutUs from './components/AboutUs'
import Header from './components/Header'
import { GlobalStyles } from './styles'

function App() {

  return (
    <>
    
    <GlobalStyles />
      <Header/>
      <Main>
        <AboutUs/>
      </Main>
    </>

  )
}

export default App
