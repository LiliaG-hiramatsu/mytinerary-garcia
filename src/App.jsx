import NavBar from "./components/NavBar"
import Home from "./pages/Home"

function App() {
  return (
    <div className="w-full min-h-screen bg-gray-300 font-sans grid grid-rows-2 gap-y-96">
      <NavBar />
      <Home />
    </div>
  )
}

export default App
