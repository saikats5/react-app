import './note.css'
import { NoteProps } from './note-type'

const Notes = (props: NoteProps) => {
  return <div className={`note ${props.priority}`}>{props.text}</div>
}

export default Notes
