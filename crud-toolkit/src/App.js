import './App.css'
import Create from './component/Create'
import Navbar from './component/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Create />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
