import './App.css'
import Notes from './components/note/note'
import { NotesData } from './components/note/data'

function App() {
  return (
    <div className="App">
      <h2>Notes App</h2>
      <div>
        {NotesData.map((note) => (
          <Notes key={note.id} priority={note.priority} text={note.text} />
        ))}
      </div>
    </div>
  )
}

export default App
