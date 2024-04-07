import './App.css'
import 'react-toastify/dist/ReactToastify.css'
import Home from './components/Home'
import Cart from './components/Cart'
import Navbar from './components/Navbar'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import NotFound from './components/NotFound'

function App() {
  return (
    <div className="App">
      <Router>
        <ToastContainer />
        <Navbar />
        <Routes>
          <Route exact path="/cart" element={<Cart />}></Route>
          <Route exact path="/not-found" element={<NotFound />}></Route>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="*" element={<Navigate to="/not-found" />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
