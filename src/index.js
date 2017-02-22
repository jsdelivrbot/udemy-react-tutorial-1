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

    this.state = {
      videos: [],
      selectedVideo: null
      };

    this.videoSearch('surfboards');
  }


videoSearch (term) {
  YTSearch({key: API_KEY, term: term},  (videos)  =>  {
    this.setState({
      videos: videos,
      selectedVideo: videos[0]
    });
  });
}

  render () {
    return (
      <div>
        <SearchBar onSearchTermChange={term => this.videoSearch(term)}  />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})  }
          videos={this.state.videos} />
      </div>
    );
  }
}
//pass a callback down to the search_bar

//we define a function with one purpose, updates the apps state, it takes a video, and updates the selected video, then it passes it as a property into video-list, video-list takes that property and passes it to video-list-item, video-list-item takes that property and says whenever I get clicked call that function with the video that I was passed.



// Take this component´s generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
