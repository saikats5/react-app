import './App.css'
import Notes from './components/note/note'
import { NotesData } from './components/note/data'
import AddNote from './components/add-note/add-note'
import { useState } from 'react'
import { NoteType } from './components/note/note-type'

function App() {
  const [notes, setNotes] = useState(NotesData)
  const addNote = (note: NoteType) => {
    setNotes([note, ...notes])
  }
  return (
    <div className="App">
      <h2>Notes App</h2>
      <AddNote addNote={addNote} />
      <div>
        {notes.map((note) => (
          <Notes key={note.id} priority={note.priority} text={note.text} />
        ))}
      </div>
    </div>
  )
}

export default App
