import React, { Component } from 'react'

export default class ErrorBoundry extends Component {
    constructor(props){
        super(props); 
        this.state = {
            error:false
        }
    }

    componentDidCatch(error, info){
        this.setState({ error:true}); 
    }
  render() {
      if(this.state.error)
      return  <div> Oops there is an error in this application</div>;
      else 
      return  this.props.children ; 
  }
}
