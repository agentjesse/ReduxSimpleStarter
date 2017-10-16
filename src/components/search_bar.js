//import React
import React from 'react';
//es6 style below. then you can use Component instead of React.Component. it is the same as assigning React.Component to a variable and using that i.e. syntactic sugar:
  //import React, { Component } from 'react';

// //create a new functional react component that produces HTML. this is 'dumb' or plain, as it just sends out some jsx when called.
// const SearchBar = ()=> {
//   return <input />; //this jsx will turn into a React.createElement call which depends on the import of React at the top.
// };


//create an es6 class based react component. It's just a javascript object until functionality added when extended.
class SearchBar extends React.Component {
  //State is an object used to record and react to user events, existing on all class based components (instances). When a component's state changes the component and its children re-render. First, initialize the state object...
  //the constructor function performs setup inside of class
  constructor(props) {
    //call the parent method (from React.Component) with super
    super(props);
    //Initialization: assign the state object to this.state . Here in the constructor function is the ONLY time you will use code like this to manipulate state. ( this.state= )
    this.state = { term: '' };
  }

  //define the render method on this class. all class based react components must have this. this is also the syntax for defining methods on a class.
  render() {
    //commented out to conitnue with course
    //return <input onChange={this.onInputChange} />;

    //outside of the constructor function set set state using this.setState
    return (
      <div>
        <input onChange={ event => this.setState({ term: event.target.value }) } />
      </div>
    );
  }
  //define event handler function. Above, put it into the brackets of the onChange jsx attribute of the element. Or write it within the curly brackets if it's short in es6 syntax.
  // //commented out to continue with course.
  // onInputChange(event) {
  //   //this will log the value of the input field to the console, using the properties of the triggering event.
  //     console.log(event.target.value);
  //   //react reuses events, so logging the event itself will show many null properties. if you want to see the event try to clone it first, or use the debugger statement and console log the event manually, or persist:
  //   //will not show event correctly:
  //     //console.log(event);
  //   //clone to show event:
  //     console.log(Object.assign({},event));
  //   //...or event.persist() ..use only when persist is really needed:
  //     // event.persist();
  //     // console.log(event);
  // }

}

export default SearchBar;
