import React, { Component } from 'react';

class RestaurantInput extends Component {
  constructor(){
    super();
    this.state ={
      text: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(ev){
    this.setState({
      text: ev.target.value
    })
  }

  handleSubmit(ev){
    ev.preventDefault();
    this.props.store.dispatch({state: this.props.store.getState(), type: "ADD_RESTURANT", text: this.state.text})
    // console.log(this.props.store.getState().resturants[0].text)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} value={this.state.text}/>
        <button>Add Band</button>
      </form>
    );
  }
};

export default RestaurantInput;
