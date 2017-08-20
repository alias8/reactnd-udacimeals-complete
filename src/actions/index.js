export const ADD_RECIPE = 'ADD_RECIPE';
export const REMOVE_FROM_CALENDAR = 'REMOVE_FROM_CALENDAR';

export function addRecipe({ day, recipe, meal }) { // action creator
  return { // this is the action
    type: ADD_RECIPE,
    recipe,
    day,
    meal,
  };
}

export function removeFromCalendar({ day, meal }) {
  return {
    type: REMOVE_FROM_CALENDAR,
    day,
    meal,
  };
}

// { type: 'DELETE_FLAVOR', flavor: 'Vanilla' }

const initState = [
  { flavor: 'Chocolate', count: 36 },
  { flavor: 'Vanilla', count: 210 }];

function appReducer(state = initState, action) {
  switch (action.type) {
    case 'DELETE_FLAVOUR':
      return state.filter(flavor => flavor !== action.flavor);
    default:
      return state;
  }
}
