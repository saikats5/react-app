import React, { Component } from 'react'
import loader from './spinner.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className="text-center">
        <img src={loader} alt="loading..." />
      </div>
    )
  }
}

export default Spinner
