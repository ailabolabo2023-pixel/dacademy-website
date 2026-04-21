import React, { useState, useRef } from 'react';
import './AudioPlayer.css';

export default function AudioPlayer() {
  const [volume, setVolume] = useState(0);
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
      
      // 音量が0より大きくなり、かつ停止中の場合は再生を開始する
      if (newVolume > 0 && audioRef.current.paused) {
        audioRef.current.play().catch(err => console.log("Audio play failed:", err));
        setIsPlaying(true);
      } else if (newVolume === 0 && !audioRef.current.paused) {
        // 音量が0になったらリソース節約のため一時停止
        audioRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <div className="audio-player-container">
      <div className="album-jacket">
        <img 
          src="/images/アルバムジャケット.png" 
          alt="Original Song" 
          className={`jacket-img ${isPlaying ? 'playing' : ''}`} 
        />
      </div>
      <div className="volume-control">
        <span className="volume-icon">{volume === 0 ? '🔇' : '🎵'}</span>
        <input 
          type="range" 
          min="0" 
          max="1" 
          step="0.05" 
          value={volume} 
          onChange={handleVolumeChange} 
          className="volume-slider"
          title="音量調整"
        />
      </div>
      <audio 
        ref={audioRef} 
        src="/images/あなたの手が紡ぐ笑顔 ～Dacademy～ .wav" 
        loop 
        preload="metadata" 
      />
    </div>
  );
}
