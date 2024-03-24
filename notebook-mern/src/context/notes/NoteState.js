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
      _id: '65fe7bd2d9a38186457a0771',
      user: '65fd1efc680f0e6616df1c2a',
      title: 'My Title',
      description: 'This is a test data to check',
      tag: 'general',
      date: '2024-03-23T06:50:58.007Z',
      __v: 0,
    },
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
      _id: '65fe7bd2d9a38186457a0771',
      user: '65fd1efc680f0e6616df1c2a',
      title: 'My Title',
      description: 'This is a test data to check',
      tag: 'general',
      date: '2024-03-23T06:50:58.007Z',
      __v: 0,
    },
    {
      _id: '65fe7bd2d9a38186457a0771',
      user: '65fd1efc680f0e6616df1c2a',
      title: 'My Title',
      description: 'This is a test data to check',
      tag: 'general',
      date: '2024-03-23T06:50:58.007Z',
      __v: 0,
    },
  ]
  const [notes, setNotes] = useState(initialNotes)
  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </NoteContext.Provider>
  )
}
export default NoteState
