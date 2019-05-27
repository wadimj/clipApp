import React, {useState, useEffect} from 'react';

import axios from 'axios';
import './Home.css';
import Header from './../../components/Header/Header';
import VideoItem from './../../components/VideoItem/VideoItem';
import SearchBox from './../../components/SearchBox/SearchBox';
import Loader from './../../components/Loader/Loader';

const home = props => {
    const [videos, setVideos] = useState([
        /*{
            ClipId:1,
            Name: "Clip1",
            Keywords: "test",
            Thumbnail: ""
        },
        {
            ClipId:2,
            Name: "Clip2",
            Keywords: "test",
            Thumbnail: ""
        },
        {
            ClipId:3,
            Name: "Clip3",
            Keywords: "test",
            Thumbnail: ""
        }*/
            ]);
    const [searchVideo, setSearchVideo] = useState('');
    const [loading, setLoading] = useState(true);



   useEffect(() => {    
        fetchVideos();
    },[]);
   
 
    const fetchVideos = () => {
        setLoading(true);
        axios.get("/api/Clip/")
            .then(function (res) {
               let fetchedClips = [];
                for ( let key in res.data ) {
                    fetchedClips.push( {
                        ...res.data[key]
                    } );
                }
                setVideos(fetchedClips);  
                setLoading(false);
            })
            .catch(function (error) {
                console.log(error);
            })
    }
 
    const onSearchChange = (event) => {
        setSearchVideo(event.target.value);
    };

    const searchHandler = () => {
        setLoading(true);
        axios.get('/api/Clip/search/' + searchVideo)
            .then(function (res) {
               let fetchedClips = [];
                for ( let key in res.data ) {
                    fetchedClips.push( {
                        ...res.data[key]
                    } );
                }
                setVideos(fetchedClips);  
                setLoading(false);
            })
            .catch(function (error) {
                console.log(error);
            })
    };



    let videoList = loading ? <Loader/> : videos.length > 0 ? videos.map(video =>
            <VideoItem video={video} key={video.ClipId}/>
        ) : <p>Upload video!</p>
        

    return (
        <div className="container">
            <Header title="Home"/>
            <SearchBox searchField={searchVideo} searchChange={onSearchChange} submit={searchHandler} clear={fetchVideos}/>
          
         <div className="videoList">
            {videoList}
        </div>
           
        </div>
        );
  };

export default home;