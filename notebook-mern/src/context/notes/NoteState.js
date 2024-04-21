import { useState } from 'react'
import NoteContext from './noteContext'

const NoteState = (props) => {
  const host = 'http://localhost:4000'
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
    const json = await response.json()
    setNotes(json)
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
  const deleteNote = async (id) => {
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': '',
      },
    })
    const json = response.json()
    const newNotes = notes.filter((note) => {
      return note._id !== id
    })
    setNotes(newNotes)
  }
  const editNote = async (id, title, description, tag) => {
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': '',
      },
      body: JSON.stringify({ title, description, tag }),
    })
    const json = await response.json()
    let newNotes = JSON.parse(JSON.stringify(notes))
    for (let i = 0; i < newNotes.length; i++) {
      const data = newNotes[i]
      if (data._id === id) {
        newNotes[i].title = title
        newNotes[i].description = description
        newNotes[i].tag = tag
        break
      }
    }
    setNotes(newNotes)
  }
  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  )
}
export default NoteState
