import { NoteType } from '../note/note-type'
import './add-note.css'
import { useState } from 'react'
import {v4 as uuidv4} from 'uuid'

type AddNoteProps = {
  addNote = (note: NoteType) => void
}

const AddNote = (props: AddNoteProps) => {
  const [text, setText] = useState('')
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }
  const handleClick = () => {
    props.addNote({
      text,
      priority: 'low',
      id: uuidv4
    })
  }
  return (
    <div>
      <form className="add-note">
        <input type="text" onChange={(e) => handleChange} />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  )
}

export default AddNote
