import React, { PureComponent } from 'react'

class ChildComponent extends PureComponent {
  render() {
    console.log('The Child is rendering')
    return (
      <>
        <div>ChildComponent --- {this.props.count}</div>
      </>
    )
  }
}
export default ChildComponent
