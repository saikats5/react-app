import './App.css'
import Notes from './components/notes'
import { NotesData } from './data'

function App() {
  return (
    <div className="App">
      <h2>Notes App</h2>
      <div>
        <Notes priority="high" text="This is Text Note" />
      </div>
    </div>
  )
}

export default App
