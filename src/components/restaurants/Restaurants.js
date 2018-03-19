import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {
  render() {
    return(
      <ul>
        {this.props.store.getState().restaurants.map( (e, i) => {return <Restaurant restaurant={e} key={i} store={this.props.store}/>})}
      </ul>
    );
  }
};

export default Restaurants;
