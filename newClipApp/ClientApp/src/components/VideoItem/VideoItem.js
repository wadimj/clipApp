import React from 'react';
import { Link } from 'react-router-dom'
import './VideoItem.css';
import videoImg from './../../defaultvideo.jpeg';

const videoItem = (props) => {

        const thumbnail = props.video.thumbnail ? props.video.thumbnail : videoImg;
        return(
        <Link to={'/player/'+ props.video.clipId}>
        <div className="videoItem">
                <img  src={thumbnail} alt={props.video.name}/>
                <div>
                        <p><strong>{props.video.name}</strong></p>
                        <p>{props.video.keywords}</p>
                </div>
                
        </div>
        </Link>
);
        };

export default videoItem;
