import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  render() {
    const reviews = this.props.store.getState().reviews.filter(e => e.restaurantId == this.props.restaurantId)
    return (
      <ul>
        {reviews.map( e => <Review store={this.props.store} review={e}/>)}
      </ul>
    );
  }
};

export default Reviews;
