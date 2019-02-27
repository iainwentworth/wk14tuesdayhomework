import React from 'react';
import SongSelector from '../components/SongSelector';
import SongDetail from '../components/SongDetail';

import Request from '../helpers/request';

class SongContainer extends React.Component {
  constructor(props){
      super(props);
      this.state = {
        songs: [],
        currentSong: null
      };
      this.handleSongSelected = this.handleSongSelected.bind(this);
    }

    componentDidMount(){
      const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
      const request = new Request();
      request.get(url).then((data) =>
      this.setState({songs: data}))
    }

    handleSongSelected(index){
      const selectedSong = this.state.songs.feed.entry[index];
      console.log(selectedSong);
      this.setState({currentSong: selectedSong})
    }

render(){
  console.log(this.state.songs);
    if (!this.state.songs){
      return <p>Loading Data...</p>;
    }
    return (
      <div>
      <h2>UK Top 20 Songs</h2>
      <SongSelector
      songs={this.state.songs}
      onSongSelected={this.handleSongSelected}/>
      <SongDetail song={this.state.currentSong}/>
      </div>
    );
}

}

export default SongContainer;
