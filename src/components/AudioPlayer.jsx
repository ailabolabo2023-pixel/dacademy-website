import React, { useState, useRef, useEffect } from 'react';
import './AudioPlayer.css';

// プレイリスト（再生したい順番でMP3ファイルを並べる）
const PLAYLIST = [
  "/images/あなたの手が紡ぐ笑顔 ～Dacademy～ .mp3",
  "/images/小さな一歩が、未来を変える ～Dacademy～.mp3"
];

export default function AudioPlayer() {
  const [volume, setVolume] = useState(0);
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

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
        // 音量が0になったら一時停止
        audioRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  // 1曲終わったら次の曲へ進む処理
  const handleTrackEnd = () => {
    const nextIndex = (currentTrackIndex + 1) % PLAYLIST.length;
    setCurrentTrackIndex(nextIndex); // これにより useEffect が発火する
  };

  // 曲（インデックス）が切り替わったときに自動で再生を再開する
  useEffect(() => {
    if (audioRef.current && isPlaying) {
      // 念のため少しだけ遅延させてから再生（ブラウザのブロック回避）
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(err => console.log("Audio auto-play failed:", err));
      }
    }
  }, [currentTrackIndex, isPlaying]);

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
      {/* 以前の loop を外し、onEnded で自前で次の曲へループさせる */}
      <audio 
        ref={audioRef} 
        src={PLAYLIST[currentTrackIndex]} 
        onEnded={handleTrackEnd}
        preload="metadata" 
      />
    </div>
  );
}
