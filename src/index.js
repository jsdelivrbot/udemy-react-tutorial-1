import React from 'react';
// hanterar komponeterna
import ReactDom from 'react-dom';
// interagerar med DOMet




// Create a new component. This componenet should produce html

const App = () => {
  return <div>Hi!</div>;
}




// Take this component´s generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
