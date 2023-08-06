import Footer from "./components/Footer"
import NavLayout from "./layouts/NavLayout"
import Home from "./pages/Home"

function App() {
  return (
    <>
      <NavLayout>
        <Home />
      </NavLayout>
      <Footer />
    </>
  )
}

export default App
