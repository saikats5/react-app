import { useState } from 'react'
import NoteContext from './noteContext'

const NoteState = (props) => {
  const initialNotes = [
    {
      _id: '65fe7bd2d9a38186457a0771',
      user: '65fd1efc680f0e6616df1c2a',
      title: 'My Title',
      description: 'This is a test data to check',
      tag: 'general',
      date: '2024-03-23T06:50:58.007Z',
      __v: 0,
    },
    {
      _id: '65fe7bd2d9a38186457a0772',
      user: '65fd1efc680f0e6616df1c2a',
      title: 'My Title',
      description: 'This is a test data to check',
      tag: 'general',
      date: '2024-03-23T06:50:58.007Z',
      __v: 0,
    },
    {
      _id: '65fe7bd2d9a38186457a0773',
      user: '65fd1efc680f0e6616df1c2a',
      title: 'My Title',
      description: 'This is a test data to check',
      tag: 'general',
      date: '2024-03-23T06:50:58.007Z',
      __v: 0,
    },
    {
      _id: '65fe7bd2d9a38186457a0774',
      user: '65fd1efc680f0e6616df1c2a',
      title: 'My Title',
      description: 'This is a test data to check',
      tag: 'general',
      date: '2024-03-23T06:50:58.007Z',
      __v: 0,
    },
    {
      _id: '65fe7bd2d9a38186457a0775',
      user: '65fd1efc680f0e6616df1c2a',
      title: 'My Title',
      description: 'This is a test data to check',
      tag: 'general',
      date: '2024-03-23T06:50:58.007Z',
      __v: 0,
    },
  ]
  const [notes, setNotes] = useState(initialNotes)
  const addNote = (title, description, tag) => {
    //setNotes(notes.concat(note))
  }
  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => {
      return note._id !== id
    })
    setNotes(newNotes)
  }
  const editNote = (id, title, description, tag) => {
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
