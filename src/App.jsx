import './App.css'
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
    </div>
  )
}

export default App
