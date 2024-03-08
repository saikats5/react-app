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
      </div>
    </div>
  )
}

export default DataTable
