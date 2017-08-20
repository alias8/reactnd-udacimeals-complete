import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  render() {
    return (
      <div>
        {'Hello world'}
      </div>
    );
  }
}

/*
* we want to transform the calendar object from the store to an array of objects
* This is typical in react redux applications. The components will prefer arrays to map over,
* the store and reducers are more easily used when everything is an object.
* */
function mapStateToProps(state, props) {
  const calendar = state.calendar;
  const dayOrder = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  return {
    calendar: dayOrder.map(day => ({
      day,
      meals: Object.keys(calendar[day]).reduce((accummeals, currentmeal) => {
        const meals = accummeals;
        meals[currentmeal] = calendar[day][currentmeal]
          ? calendar[day][currentmeal]
          : null;

        return meals;
      }, {}),
    })),
  };
}

export default connect(mapStateToProps)(App);
