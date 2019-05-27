import React, {useState, useEffect} from 'react';

import axios from 'axios';
import './Player.css';
import Header from './../../components/Header/Header';
import { Player as ReactPlayer } from 'video-react';
import "../../../node_modules/video-react/dist/video-react.css";

const player = props => {
    const [clip, setClip] = useState({});
    const [loading, setLoading] = useState(true);


   useEffect(() => {
        axios.get('/api/clip/' + props.match.params.clipId)
            .then(function (res) {
                
                setClip(res.data[0]);    
                setLoading(false);
            })
            .catch(function (error) {
                console.log(error);
            })

    },[]);
    
    const url = '/api/stream/'+ props.match.params.clipId;

    return (
        <div className="container">
            <Header title="Player"/>
            <div>
                <h2>{clip.name}</h2>
                <p>{clip.keywords}</p>
            </div>
            <ReactPlayer
            playsInline
            poster="/assets/poster.png"
            src= {url}
            />
        </div>
        );
};


export default player;