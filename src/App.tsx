import { Cards } from "./components/Cards"
import { PS5 } from './components/PS5/PS5'
import { HeaderNav } from "./components/HeaderNav/HeaderNav"
import { Logo } from "./components/Logo/Logo"
import './index.css'
import { Show } from "./components/Show/Show"
import { Dashboard } from "./components/Dashboard/Control/Dashboard"
import { DeadSpace } from "./components/DeadSpace/DeadSpace"
import { VR2 } from "./components/VR2/VR2"
import { Forspoken } from "./components/Forspoken/Forspoken"

function App() {

  return (
    <div>
        <Logo />
        <HeaderNav />
         {/* <Dashboard />  */}
        {/* <PS5 /> */}
        {/* <Show />  */}
        <DeadSpace />
        {/* <VR2 /> */}
        {/* <Forspoken /> */}
        <Cards />
    </div>
  )
}

export default App
