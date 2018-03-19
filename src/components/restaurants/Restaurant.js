import React, { Component } from 'react';
import ReviewInput from '../reviews/ReviewInput'

class Restaurant extends Component {

  handleButtonClick(ev){
    this.props.store.dispatch({state: this.props.state, type: 'DELETE_RESTAURANT', id: this.props.restaurant.id})
  }

  render() {
    return (
      <li>
        {this.props.restaurant.text}
        <button onClick={this.handleButtonClick.bind(this)}>Dont Delete Me!</button>
        <ReviewInput store={this.props.store} restaurantId={this.props.restaurant.id}/>
      </li>
    );
  }
};

export default Restaurant;
