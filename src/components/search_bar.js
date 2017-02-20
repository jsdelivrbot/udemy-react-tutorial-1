import React, { Component } from 'react';


class SearchBar extends Component {
  render() {

  return <input onChange={event => console.log(event.target.value)} />;
  }

}

export default SearchBar ;






//class based component, a component with internal record keeping, more "intelligent", aware of itself of what happens to it since it´s been rendered. ES6 class, js object with properites and methods. Since it´s an input-bar we want it to be a more intelligent component.


//a functional component, "dumb" componenet, a function we call that will return some plain JSX. not aware of its states, surrondings etc. communicate with other componenets.

//Two steps for event-handlers in React, first declare the eventhandler, second pass the event

//new class SearchBars gets access to all react component functions and added functionality
//class SearchBar extends Component {
  //render() {
//calls the render function a wants to return some JSX
  //return <input onChange={this._onInputChange}/>;
  //create an input element and pass it a propperties on change with the value of this._
  //}

  //_onInputChange(event) {
  //  console.log(event.target.value);
//  }
//}

//export default SearchBar ;
//class based component, a component with internal record keeping, more "intelligent", aware of itself of what happens to it since it´s been rendered. ES6 class, js object with properites and methods. Since it´s an input-bar we want it to be a more intelligent component.


//a functional component, "dumb" componenet, a function we call that will return some plain JSX. not aware of its states, surrondings etc. communicate with other componenets.

//Two steps for event-handlers in React, first declare the eventhandler, second pass the event
