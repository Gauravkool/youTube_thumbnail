import { useState } from "react";
import "./PlayButton.css";
function PlayButton({ children, onPlay, onPause }) {
  const [playing, setPlaying] = useState(false);
//   console.log("render playbutton");
  function handleClick(e) {
    e.stopPropagation();
    if (playing) onPause();
    else onPlay();
    setPlaying(!playing);
  }
  return (
    <>
      <button onClick={handleClick}>
        {children}:{playing ? "⏸️" : "⏯️"}
      </button>
    </>
  );
}
export default PlayButton;
