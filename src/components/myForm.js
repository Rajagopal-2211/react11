import React, { Component } from 'react'
import './formStyle.css'

export class myForm extends Component {
    constructor(props){
        super(props)

        this.state = {
            textValue:"Skill not selected"
        }
    }
    chageTextValue = (event)=>{
        this.setState({})
    }
  render() {
    return (
      <div>
        <label className=''>collageName</label>
        
      </div>
    )
  }
}  

export default myForm
