import './App.css'
//import About from './components/About'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'

function App() {
  return (
    <>
      <Navbar title={'Main Utils'} />
      <div className="container my-3">
        <TextForm heading="Enter the text to analyse" />
        {/* <About /> */}
      </div>
    </>
  )
}

export default App
