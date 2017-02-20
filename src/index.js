import React from 'react';
// hanterar komponeterna
import ReactDOM from 'react-dom';
// interagerar med DOMet

import SearchBar from './components/search_bar';
//filer vi skapat själva och importer behöver filreferens och den rikitg filvägen

const API_KEY = 'AIzaSyDu2u5oQk5jnsMeeFkQnaPUqyUnpRIPETA';


// Create a new component. This componenet should produce html
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}




// Take this component´s generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
