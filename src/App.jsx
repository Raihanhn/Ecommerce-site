import './App.css'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from "./components/Navbar/Navbar"
import Product from './components/Product'
import Review from './components/Review'

function App() {

  return (
    <div>
      <Navbar />
      <Home/>
      <Product/>
      <Review/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
