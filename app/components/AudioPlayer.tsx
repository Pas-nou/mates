"use client";

import React from 'react';
import './audio-player.css';

// Interface définissant les propriétés attendues pour ce composant
interface AudioPlayerProps {
  someProp?: string; // Exemple de propriété optionnelle. Ajuste selon tes besoins.
}

// Pas d'état nécessaire ici, donc on laisse AudioPlayerState vide
interface AudioPlayerState {}

class AudioPlayer extends React.Component<AudioPlayerProps, AudioPlayerState> {
  // Référence à l'élément audio
  private audioRef: React.RefObject<HTMLAudioElement>;

  constructor(props: AudioPlayerProps) {
    super(props);
    this.audioRef = React.createRef();
  }

  componentDidMount() {
    const audioElement = this.audioRef.current;

    // Fonction pour jouer l'audio avec gestion des erreurs
    const playAudio = async () => {
      if (audioElement) {
        try {
          await audioElement.play();
        } catch (error) {
          console.log('Autoplay bloqué : ', error);
        }
      }
    };

    playAudio();
  }

  handlePlayButton = () => {
    const audioElement = this.audioRef.current;
    if (audioElement) {
      audioElement.play();
    }
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
