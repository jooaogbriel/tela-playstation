import { HeaderNav } from "./components/HeaderNav/HeaderNav"
import { Logo } from "./components/Logo/Logo"
import './index.css'

function App() {

  return (
    <div>
        <Logo />
        <HeaderNav />
        <h1 className="text-3xl font-bold underline text-red-600">Hello</h1>
    </div>
  )
}

export default App
