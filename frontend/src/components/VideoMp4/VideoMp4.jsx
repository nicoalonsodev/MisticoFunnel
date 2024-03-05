import React, { useState, useRef, useEffect } from "react";
import ReactPlayer from "react-player";
import "./VideoMp4.css";
import vsl from "../../assets/video.mp4";
const VideoMp4 = () => {
  const [playing, setPlaying] = useState(true);
  const [playingLoop, setPlayingLoop] = useState(false);
  const [videoClicked, setVideoClicked] = useState(false);
  const [muted, setMuted] = useState(true);
  const [first, setFirst] = useState(true);
  const playerRef = useRef(null);
  useEffect(() => {
    if (!playingLoop) {
      setTimeout(() => {
        setPlayingLoop(true);
      }, 2000);
    }
  }, [playingLoop]);

  const togglePlay = () => {
    if (first === true) {
      setMuted(false);
      playerRef.current.seekTo(0);
      setFirst(false);
    }
  };

  return (
    <div className="flex w-full justify-center items-start">
      <div className="flex justify-center items-start relative overflow-hidden">
        <div className="">
          {first ? (
            <div className="z-50 cursor-pointer bg-transparent absolute top-0 left-0 w-full h-full flex justify-end items-start px-4 py-4"
            onClick={togglePlay}
            >
              <div className="cursor-pointer px-2 py-2 rounded-3xl volume-button text-gray-100">Presiona para activar el volumen 🔊</div>
               </div>
          ) : (
            ""
          )}
          <div
            className={`${first ? "cursor-pointer" : ""} `}
            onClick={togglePlay}
          >
            <ReactPlayer
              ref={playerRef}
              url={vsl}
              playing={playing}
              controls
              width="100%"
              height="100%"
              muted={muted}
              autoPlay
              playsinline
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoMp4;
