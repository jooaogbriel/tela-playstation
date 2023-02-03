import { Cards } from "./components/Cards"
import { PS5 } from './components/PS5/PS5'
import { HeaderNav } from "./components/HeaderNav/HeaderNav"
import { Logo } from "./components/Logo/Logo"
import './index.css'
import { Show } from "./components/Show/Show"
import { Dashboard } from "./components/Dashboard/Control/Dashboard"

function App() {

  return (
    <div>
        <Logo />
        <HeaderNav />
         {/* <Dashboard />  */}
        {/* <PS5 /> */}
         <Show /> 
        <Cards />
    </div>
  )
}

export default App
