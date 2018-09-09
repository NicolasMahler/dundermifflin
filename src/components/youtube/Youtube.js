import React from 'react';
import YouTube from 'react-youtube';
import './Youtube.css';
 
class Video extends React.Component {
  render() {
    const opts = {
        height: '100%',
        width: '100%',
        playerVars: { // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
      }
    };
 
    return (
        <div className="youtube-wrapper">
      <YouTube className="youtube"
        videoId={ this.props.id }
        opts={opts}
      />
      </div>
    );
  }
 
}

export default Video;