import React, { Component } from 'react';


class SearchBar extends Component {
//metod , hur vi inititerar state i en "class-based-component". alla js-klasser har en speciell funktion som heter constructor. Contructor är den första och enda funktionen som anropas automatiskt varje gång det skapas en ny instans av klassen. (Egentligen kallas den på hela tiden, varje gång en ny SearchBar anropas). Constructor-funktionen är reserverad för att göra en set-up för vår nya klass, som att initiera variabler, state etc.


  constructor(props) {
    super(props);
    //själva Component har sina egna constructor funktioner. Super anropar funktioner från föräldrametoden Component som SearchBar. utvidgar/bygger/kopierar.

    this.state = {  term: '' }; //här är enda stället den sätts så , annars alltid set.state

  }
  // när vi använder state, inititerar vi det genom att skapa ett nytt objekt och sätter det till this.state. objektet kommer innehålla egenskaper som vi vill knyta till state. Så fort använder updaterar input, är term den egenskap som kommer "spela-in" ha kolla på förändringen.

  //när användaren ändrar input, vill vi uppdatera this.state...etc så det blir det värde som skrivs in i input


  render() {
    return (
      <div>
        <input onChange={event => this.setState({ term: event.target.value  })} />
      </div>
    );
  }
}

export default SearchBar ;




//STATE är ett enkelt JS objekt som finns i varje component som är class-based. Varje instans av en classbased-componenet har sin egen kopia av state. Vi inititerar state genom att definera en constructor-metod  och sätter den till this.state, och vi kan själva söpa/välja egenskaperna i state


//när en componenets state ändras, renderas componeneten automatiskt om. den tvingar också sina barn ett renderas om. så om SearchBars skulle ha en state som skulle förändras, skulle dess render-funktion köras om, + alla dess barn-componeneter skulle rerenderas.

//innan vi kan använda state, måste vi initiera stateobjekt inuti våran class/instruktor

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
