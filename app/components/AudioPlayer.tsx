"use client";

import React from 'react';

import './audio-player.css'

class AudioPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.audioRef = React.createRef();
  }

  componentDidMount() {
    const audioElement = this.audioRef.current;
    
    const playAudio = async () => {
      try {
        await audioElement.play();
      } catch (error) {
        console.log('Autoplay bloqué : ', error);
      }
    };

    playAudio();
  }

  handlePlayButton = () => {
    const audioElement = this.audioRef.current;
    audioElement.play();
  }

  render() {
    return (
      <div id='audioplayerdeouf'>
        <audio ref={this.audioRef} src="/music/boule_noire.mp3" controls>
          Votre navigateur ne supporte pas l&apos;élément <code>audio</code>.
        </audio>
        <button onClick={this.handlePlayButton}>Play Music</button>
      </div>
    );
  }
}

export default AudioPlayer;
