import { NoteType } from '../note/note-type'
import './add-note.css'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

type AddNoteProps = {
  addNote: (note: NoteType) => void
}

const AddNote = (props: AddNoteProps) => {
  const [text, setText] = useState('')
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    props.addNote({
      text,
      priority: 'low',
      id: uuidv4(),
    })
  }
  // const handleSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   console.log()
  // }
  return (
    <div>
      <form className="add-note">
        <input type="text" onChange={handleChange} />
        {/* <select onChange={(e) => handleSelect}>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select> */}
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  )
}

export default AddNote
