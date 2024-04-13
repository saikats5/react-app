import { useState } from 'react'
import NoteContext from './noteContext'

const NoteState = (props) => {
  const host = 'http://localhost:5000'
  const initialNotes = []
  const [notes, setNotes] = useState(initialNotes)
  const getNotes = async () => {
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': '',
      },
    })
  }
  const addNote = async (title, description, tag) => {
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': '',
      },
      body: JSON.stringify({ title, description, tag }),
    })
  }
  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => {
      return note._id !== id
    })
    setNotes(newNotes)
  }
  const editNote = async (id, title, description, tag) => {
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': '',
      },
      body: JSON.stringify({ title, description, tag }),
    })
    const json = response.json()
    for (let i = 0; i < notes.length; i++) {
      const data = notes[i]
      if (data._id === id) {
        data.title = title
        data.description = description
        data.tag = tag
      }
    }
  }
  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
      {props.children}
    </NoteContext.Provider>
  )
}
export default NoteState
