import { useContext, useId, useLayoutEffect, useRef } from "react";
import "./Video.css";
import ThemeContext from "../context/ThemeContext";
import useVideoDispatch from "../hooks/VideoDispatch";

function Video({
  verified,
  id,
  title,
  channel = "coder dost",
  view,
  time,
  children,
  editVideo,
}) {
  const dispatch = useVideoDispatch();
  const theme = useContext(ThemeContext);
  console.log("video render", id);
  const ref = useRef(null);
  const ids = useId(null);

  // useLayoutEffect(() => {
  //   const { height } = ref.current.getBoundingClientRect();
  //   console.log("height", height);
  // }, []);

  // useEffect(() => {
  // const idx = setInterval(() => {
  // console.log("video playing", id);
  // }, 3000);
  // return () => {
  //   clearInterval(idx);
  // };
  // }, [id]);

  return (
    <>
      <div id={ids} ref={ref} className={`container ${theme}`}>
        <button
          onClick={() => {
            dispatch({ type: "DELETE", payload: id });
          }}
          className="close">
          X
        </button>
        <button
          onClick={() => {
            editVideo(id);
          }}
          className="edit">
          Edit
        </button>
        <div className="pic">
          <img src={`https://picsum.photos/id/${id}/160/90`} />
          <div className="title">{title}</div>
          <div className="channel">
            {channel} {verified && "✅"}
          </div>
          <div className="views">
            {view} views <span>.</span>
            {time}
          </div>
          <div>{children}</div>
        </div>
      </div>
    </>
  );
}
export default Video;
