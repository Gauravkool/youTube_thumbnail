import { useContext, useState } from "react";
import "./PlayButton.css";
import ThemeContext from "../context/ThemeContext";
function PlayButton({ children, onPlay, onPause }) {
  const [playing, setPlaying] = useState(false);
  //   console.log("render playbutton");
  const theme = useContext(ThemeContext);
  function handleClick(e) {
    e.stopPropagation();
    if (playing) onPause();
    else onPlay();
    setPlaying(!playing);
  }
  return (
    <>
      <button className={theme} onClick={handleClick}>
        {children}:{playing ? "⏸️" : "⏯️"}
      </button>
    </>
  );
}
export default PlayButton;
