import React, {useState} from 'react';
import './Home.css';
import Header from './../../components/Header/Header';
import VideoItem from './../../components/VideoItem/VideoItem';
import SearchBox from './../../components/SearchBox/SearchBox';

const home = props => {
    const [videos, setVideos] = useState([1,2,3,4]);
    const [searchVideo, setSearchVideo] = useState('');
   
 

    const clicked = () => {
        console.log("video clicked");
    };

    const onSearchChange = (event) => {
        console.log(event.target.value);
        setSearchVideo(event.target.value);
    };

    const searchHandler = () => {
        console.log("database filter");
    };



    const videoList = videos.length > 0 ? videos.map(video =>
            <VideoItem clicked={clicked} video={video} key={video}/>
        ) : <p>Upload video!</p>
        

    return (
        <div className="container">
            <Header title="Home"/>
            <SearchBox searchField={searchVideo} searchChange={onSearchChange} submit={searchHandler}/>
          
        <div className="videoList">
            {videoList}
        </div>
           
        </div>
        );
  };

export default home;