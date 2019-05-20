import React from 'react';
import './VideoItem.css';
import videoImg from './../../defaultvideo.jpeg';

const videoItem = (props) => {
        return(
        <div className="videoItem" onClick={ () => props.clicked(props.video.Id)}>
                <img  src={videoImg} alt="props.video.name" />
                <div>
                <p>Name</p>
                <p>Date: 20.05.2019</p>
                <p>Time</p>
                </div>
                
        </div>
);
        };

export default videoItem;