import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createUser } from '../features/userDetailSlice'

function Create() {
  const [users, setUsers] = useState({})
  const dispatch = useDispatch()
  const getUserData = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('===============>>>', users)
    dispatch(createUser(users))
  }

  return (
    <div>
      <form className="w-50 mx-auto my-5" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label for="lblname" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            name="name"
            id="lblname"
            onChange={getUserData}
          />
        </div>
        <div className="mb-3">
          <label for="lblemail" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            id="lblemail"
            onChange={getUserData}
          />
        </div>
        <div className="mb-3">
          <label for="lblage" className="form-label">
            Age
          </label>
          <input
            type="text"
            className="form-control"
            name="age"
            id="lblage"
            onChange={getUserData}
          />
        </div>
        <div className="mb-3">
          <input
            className="form-check-input"
            name="gender"
            value="Male"
            type="radio"
            onChange={getUserData}
          />
          <label className="form-check-label" for="flexRadioDefault1">
            Male
          </label>
        </div>
        <div className="mb-3">
          <input
            className="form-check-input"
            name="gender"
            value="Female"
            type="radio"
            onChange={getUserData}
          />
          <label className="form-check-label" for="flexRadioDefault1">
            Female
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  )
}

export default Create
