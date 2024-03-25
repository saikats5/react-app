import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Home = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    async function fetchData() {
      let response = await axios.get('http://localhost:3000/users')
      response = await response.data
      setData(response)
    }
    fetchData()
  }, [])
  return (
    <div className="d-flex flex-column justify-content-center align-items-center bg-light vh-100">
      <h1>List of Users</h1>
      <div className="w-75 rounded bg-white border shadow p-4"></div>
    </div>
  )
}

export default Home
