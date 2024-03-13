import React, { useState } from 'react'

const TextForm = (props) => {
  const [text, setText] = useState('')
  const handleChange = (e) => {
    setText(e.target.value)
  }
  const captalizeText = () => {
    setText(text.toUpperCase())
  }
  const minimizeText = () => {
    setText(text.toLowerCase())
  }
  const clearText = () => {
    setText('')
  }
  const copyText = () => {
    let text = document.getElementById('myBox')
    text.select()
    navigator.clipboard.writeText(text.value)
  }
  const handleExtraSpaces = () => {
    let newText = text.split(/[]+/)
    setText(newText.join(' '))
  }
  return (
    <>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="myBox"
          value={text}
          onChange={handleChange}
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={captalizeText}>
        Convert to Uppercase
      </button>
      <button className="btn btn-primary mx-2" onClick={minimizeText}>
        Convert to Lowercase
      </button>
      <button className="btn btn-primary mx-2" onClick={clearText}>
        Clear Text
      </button>
      <button className="btn btn-primary mx-2" onClick={copyText}>
        Copy Text
      </button>
      <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>
        Remove Extra Space
      </button>
      <h2>Counting the current text</h2>
      <div>
        {text.split(' ').length} words and {text.length} letters
      </div>
      <h2>Read time for text</h2>
      <div>{0.008 * text.split(' ').length}</div>
    </>
  )
}

export default TextForm
