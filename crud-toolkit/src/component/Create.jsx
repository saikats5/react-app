import React from 'react'

function Create() {
  return (
    <div>
      <form className="w-50 mx-auto my-5">
        <div className="mb-3">
          <label for="lblname" className="form-label">
            Name
          </label>
          <input type="text" className="form-control" id="lblname" />
        </div>
        <div className="mb-3">
          <label for="lblemail" className="form-label">
            Email
          </label>
          <input type="text" className="form-control" id="lblemail" />
        </div>
        <div className="mb-3">
          <label for="lblage" className="form-label">
            Age
          </label>
          <input type="text" className="form-control" id="lblage" />
        </div>
        <div className="mb-3">
          <input className="form-check-input" type="radio" />
          <label className="form-check-label" for="flexRadioDefault1">
            Male
          </label>
        </div>
        <div className="mb-3">
          <input className="form-check-input" type="radio" />
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
