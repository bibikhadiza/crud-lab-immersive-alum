import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  constructor(){
    super();
    this.state ={
      text: ''
    }
  }

  handleChange(ev){
    this.setState({text: ev.target.value});
  }

  handleSubmit(ev){
    ev.preventDefault();
    this.props.store.dispatch({type: "ADD_REVIEW", text: this.state.text, restaurantId: this.props.restaurantId})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input value={this.state.text} onChange={this.handleChange.bind(this)}/>
          <button>Submit</button>
        </form>
        <Reviews store={this.props.store} restaurantId={this.props.restaurantId}/>
      </div>
    );
  }
};

export default ReviewInput;
