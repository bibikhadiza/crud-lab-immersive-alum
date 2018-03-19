
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
  restaurants: [],
  reviews: []
}, action) {
  switch (action.type) {
    case "ADD_RESTURANT":
      let newState = state;
      newState.restaurants.push({id: cuidFn(), text: action.text})
      return newState;
    case 'DELETE_RESTAURANT':
      return {restaurants: state.restaurants.filter(e => e.id !== action.id)};

    case "ADD_REVIEW":
      let reviewState = state;
      reviewState.reviews.push({id: cuidFn(), restaurantId: action.restaurantId, text: action.text})
      return reviewState;
    case "DELETE_REVIEW":
      let deleteReviewState = state;
      return {reviews: state.reviews.filter(e => e.id !== action.id)};
    default:
      return state;
  }
}
