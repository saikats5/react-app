const DataTable = () => {
  return (
    <div className="container">
      <div className="add-container">
        <div className="info-container">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={''}
            onChange={() => {}}
          />
          <input
            type="text"
            placeholder="Gender"
            name="gender"
            value={''}
            onChange={() => {}}
          />
          <input
            type="text"
            placeholder="Age"
            name="age"
            value={''}
            onChange={() => {}}
          />
        </div>
        <button className="add">ADD</button>
      </div>
      <div className="search-table-container">
        <input
          type="text"
          placeholder="Search by name"
          name="age"
          value={''}
          onChange={() => {}}
          className="search-input"
        />
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Gender</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Saikat</td>
              <td>Male</td>
              <td>36</td>
              <td>
                <button className="edit">Edit</button>
                <button className="delete">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="pagination"></div>
      </div>
    </div>
  )
}

export default DataTable
