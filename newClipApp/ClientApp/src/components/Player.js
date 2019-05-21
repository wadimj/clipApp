import React from 'react'
import { Player as ReactPlayer } from 'video-react';
import "../../node_modules/video-react/dist/video-react.css";

class Player extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ReactPlayer
          playsInline
          poster="/assets/poster.png"
          src="/api/Stream"
        />
      </div>
    );
  }
}

export default Player;