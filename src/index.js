//example of using index.js , remember to only have one component per js file
//---------------------------------------------------------------------------

//import React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
//import your personal code written in your js files
//relative path refresher: ./ means start in the current directory
import SearchBar from './components/search_bar';

//declare constant for api key
const API_KEY = 'AIzaSyD7PZ1yhWl3KdHG57spUvC2IkP6Z52iEAo';

//create a new react component (class) that produces HTML
//---es5 syntax
  // const App = function(){
  //   return <div>poop</div>;
  // };
//---es6 syntax , block brackets and return keyword left in for clarity
const App = ()=> {
  return (
    <div>
      <SearchBar />
    </div>
  )
};

//render the components html on the page
ReactDOM.render(<App />, document.querySelector('.container')); //or you can
  //also pass a regular jsx tag: <App></App>
