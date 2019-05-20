import React, {useState} from 'react';
import './Home.css';
import Header from './../../components/Header/Header';
import VideoItem from './../../components/VideoItem/VideoItem';

const home = props => {
  //const [videos, setVideos] = useState([]);
 const videos = [1,2,3,4];
  const clicked = () => {
    console.log("video clicked");
};


    const videoList = videos.length > 0 ? videos.map(video =>
            <VideoItem clicked={clicked} video={video} key={video.id}/>
        ) : <p>Upload video!</p>
        

    return (
        <div className="container">
            <Header title="Home"/>
        <div className="videoList">
            {videoList}
        </div>
           
        </div>
        );
  };

export default home;