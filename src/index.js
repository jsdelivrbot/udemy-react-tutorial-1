import React, {  Component  } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyDu2u5oQk5jnsMeeFkQnaPUqyUnpRIPETA';

class App extends Component {
  constructor(props)  {
    super(props);

      this.state = {  videos: []  };

      YTSearch({key: API_KEY, term: 'surfboards'},  (videos)  =>  {
        this.setState({ videos });
        //if the key and the variable have the same name: this.setState({ videos:videos });
      });
   }
   //när appen först renderas skapar den en tom videolista, sen går den direkt vidare och gör en förfrågan efter videos.

  render () {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.videos[0]}/>
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}




// Take this component´s generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
