import React, { Component } from 'react'

export class ClassComponents extends Component {
    constructor(props){
        super(props)
        this.state = {
            message:'Hi I am attending react class'
        }
    }
    changemeassage = () =>{
        this.setState()

    }
  render() {
    return (
      <div ClassNmae="App">{this.state.message}
      <button onClick={this.chageMessage}>onClick </button>
        
      </div>
    )
  }
}

export default ClassComponents
