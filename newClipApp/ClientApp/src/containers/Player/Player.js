import React from 'react';
import './Player.css';
import Header from './../../components/Header/Header';
import { Player as ReactPlayer } from 'video-react';
import "../../../node_modules/video-react/dist/video-react.css";

const player = props => {
    

    return (
        <div className="container">
            <Header title="Player"/>
            <div>
                <p>"video.Name"</p>
                <p>"video.dateTime"</p>
                <p>"video.time"</p>
            </div>
            <ReactPlayer
            playsInline
            poster="/assets/poster.png"
            src="/api/Stream"
            />
        </div>
        );
};


export default player;