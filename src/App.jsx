import './App.css'
import FooterComponent from './components/FooterComponent/FooterComponent'
import { NavBar } from './components/NavBar/NavBar'
import PrincipalPage  from './principal-page/PrincipalPage'

function App() {


  return (
    <>
      <NavBar> </NavBar>
      <div className="main-ctn">
        <PrincipalPage></PrincipalPage>
      </div>
      <FooterComponent></FooterComponent>
    </>
  )
}

export default App
