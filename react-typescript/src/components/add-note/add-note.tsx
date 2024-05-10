import './add-note.css'
import { useState } from 'react'

type AddNoteProps = {
  addNote
}

const AddNote = () => {
  const [text, setText] = useState('')
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }
  return (
    <div>
      <form className="add-note">
        <input type="text" onChange={(e) => handleChange} />
        <button>Add</button>
      </form>
    </div>
  )
}

export default AddNote
