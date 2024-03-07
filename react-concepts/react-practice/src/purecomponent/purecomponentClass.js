import React, { PureComponent } from 'react'
import ChildComponent from './purecomponentChild'

class Purecomponent extends PureComponent {
  constructor() {
    super()
    this.state = {
      count: 0,
    }
  }
  render() {
    //No change in state and props leads to rerendering to stop it, we use pure component
    console.log('Class Pure Component Render')
    return (
      <>
        <div>Count - {this.state.count}</div>
        <ChildComponent count={this.state.count}></ChildComponent>
        <button
          type="button"
          onClick={() => this.setState({ count: this.state.count })}
        >
          Button
        </button>
      </>
    )
  }
}
export default Purecomponent
