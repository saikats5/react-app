import React, { useContext, useEffect, useState, useRef } from 'react'
import noteContext from '../context/notes/noteContext'
import Noteitem from './Noteitem'
import AddNote from './AddNote'
import { useNavigate } from 'react-router-dom'

const Notes = (props) => {
  const context = useContext(noteContext)
  const navigate = useNavigate()
  const [note, setNote] = useState({
    id: '',
    editTitle: '',
    editDescription: '',
    editTag: '',
  })
  const ref = useRef(null)
  const refClose = useRef(null)
  const { notes, getNotes, editNote } = context
  useEffect(() => {
    if (localStorage.getItem('token')) {
      getNotes()
    } else {
      navigate('login')
    }
  }, [])
  const updateNote = (currentNote) => {
    ref.current.click()
    setNote({
      id: currentNote._id,
      editTitle: currentNote.title,
      editDescription: currentNote.description,
      editTag: currentNote.tag,
    })
  }
  const handleClick = (e) => {
    editNote(note.id, note.editTitle, note.editDescription, note.editTag)
    refClose.current.click()
    props.showAlert('Updated successfully', 'success')
  }
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value })
  }
  return (
    <>
      <AddNote showAlert={props.showAlert} />
      <button
        type="button"
        ref={ref}
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Note
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form className="my-3">
                <div className="mb-3">
                  <label htmlFor="editTitle" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="editTitle"
                    name="editTitle"
                    value={note.editTitle}
                    onChange={onChange}
                    minLength={5}
                    required
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="editDescription" className="form-label">
                    Description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="editDescription"
                    name="editDescription"
                    value={note.editDescription}
                    onChange={onChange}
                    minLength={5}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="editTag" className="form-label">
                    Tag
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="editTag"
                    name="editTag"
                    value={note.editTag}
                    onChange={onChange}
                    minLength={5}
                    required
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                ref={refClose}
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                disabled={
                  note.editTitle.length < 5 || note.editDescription.length < 5
                }
                onClick={handleClick}
                type="button"
                className="btn btn-primary"
              >
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-3">
        <h2>You Notes</h2>
        <div className="container">
          {notes.length === 0 && 'No notes to display'}
        </div>
        {notes.map((note) => {
          return (
            <Noteitem
              key={note._id}
              updateNote={updateNote}
              showAlert={props.showAlert}
              note={note}
            />
          )
        })}
      </div>
    </>
  )
}

export default Notes
