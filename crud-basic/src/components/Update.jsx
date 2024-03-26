import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'

const Update = () => {
  const [values, setValues] = useState({ name: '', email: '', phone: '' })
  const { id } = useParams()
  const navigate = useNavigate()
  useEffect(() => {
    async function fetchData() {
      let response = await axios.get(`http://localhost:3000/users/${id}`)
      response = response.data
      setValues(response)
    }
    fetchData()
  }, [])
  const handleUpdate = async (event) => {
    event.preventDefault()
    await axios.put(`http://localhost:3000/users/${id}`, values)
    navigate('/')
  }
  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
      <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
        <h3>Update User</h3>
        <form onSubmit={handleUpdate}>
          <div className="mb-2">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter Name"
              value={values.name}
              onChange={(e) => {
                setValues({ ...values, name: e.target.value })
              }}
            ></input>
          </div>
          <div className="mb-2">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter Email"
              value={values.email}
              onChange={(e) => {
                setValues({ ...values, email: e.target.value })
              }}
            ></input>
          </div>
          <div className="mb-2">
            <label htmlFor="phone">Phone:</label>
            <input
              type="text"
              name="phone"
              className="form-control"
              placeholder="Enter Phone"
              value={values.phone}
              onChange={(e) => {
                setValues({ ...values, phone: e.target.value })
              }}
            ></input>
          </div>
          <button className="btn btn-success">Update</button>
          <Link to="/" className="btn btn-primary ms-3">
            Back
          </Link>
        </form>
      </div>
    </div>
  )
}

export default Update
