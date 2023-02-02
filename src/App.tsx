import { Cards } from "./components/Cards"
import { Dashboard } from "./components/Dashboard/Dashboard"
import { HeaderNav } from "./components/HeaderNav/HeaderNav"
import { Logo } from "./components/Logo/Logo"
import './index.css'

function App() {

  return (
    <div>
        <Logo />
        <HeaderNav />
        <Dashboard />
        <Cards />
    </div>
  )
}

export default App
