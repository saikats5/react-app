import './notes.css'

type NoteProps = {
  text: string
  priority?: 'high' | 'medium' | 'low'
}
const Notes = (props: NoteProps) => {
  return <div className={`note ${props.priority}`}>{props.text}</div>
}

export default Notes
