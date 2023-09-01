import React, { Component } from 'react'


export class myComponent extends Component {

  state = {
    name: 'le dat',
    age: 22
  };


  handleChangeName = (Event) => {
    this.setState({ name: Event.target.value });
  }
  render() {
    return (
      <>
        <div>
          <input value={this.state.name} type='text' onChange={(Event) => this.handleChangeName(Event)}></input>
        </div>
        <div>
          {this.state.name}<br />
          {this.state.age}
        </div>
      </>
    )
  }
}

export default myComponent