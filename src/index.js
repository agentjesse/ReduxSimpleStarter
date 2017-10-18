//import libraries
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
//importing personal code? use relative path with necessary ./ indicating starting directory
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
//constants
const API_KEY = 'AIzaSyD7PZ1yhWl3KdHG57spUvC2IkP6Z52iEAo';

//create a class-based (originally this was functional. but updated. hence the es5 example) react component that produces HTML. It just sends out jsx when called.
//---es5 syntax
  // const App = function(){
  //   return <div>poop</div>; //this jsx will turn into a React.createElement call which depends on the import of React at the top.
  // };
//---es6 arrow function syntax
class App extends Component {
  //constructor function
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null,//this will be changed when a video is clicked, see below.
    };

    YTSearch({key: API_KEY, term: 'dogs'}, (data)=> {
      this.setState({
        videos: data,
        selectedVideo: data[0],
      });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail videoElement={this.state.selectedVideo}/>

        {/*this callback function passes to video_list then to _item where it receives an argument and calls back to here with it. */}
        <VideoList
          onVideoSelect={ (selectedVideo)=>{
              this.setState({selectedVideo:selectedVideo});
            } }
          videos={this.state.videos}
        />

      </div>
    );
  }

}

//render the components html on the page
ReactDOM.render(
  <App />, document.querySelector('.container')
); //or you can
  //also pass a regular jsx tag: <App></App>
