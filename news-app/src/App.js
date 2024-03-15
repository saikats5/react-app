import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import News from './components/News'

class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <News />
      </>
    )
  }
}

export default App
