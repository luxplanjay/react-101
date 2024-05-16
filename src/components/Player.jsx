import { useRef } from "react";

export default function Player() {
  const audioRef = useRef();

  const handlePlay = () => {
    audioRef.current.play();
    console.log(audioRef.current.currentTime);
  };

  const handlePause = () => {
    audioRef.current.pause();
  };

  const handleStop = () => {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
  };

  return (
    <div>
      <audio
        ref={audioRef}
        type="audio/mp3"
        src="https://github.com/rafaelreis-hotmart/Audio-Sample-files/raw/master/sample.mp3"
      ></audio>
      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Pause</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}
