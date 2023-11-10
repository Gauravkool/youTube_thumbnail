import { useEffect, useRef, useState } from "react";
import "./AddVideo.css";

import useVideoDispatch from "../hooks/VideoDispatch";
function AddVideo({ editableVideo }) {
  const initialState = {
    channel: "coder dost",
    time: "1 year ago",
    verified: true,
    title: "",
    view: "",
  };
  const dispatch = useVideoDispatch();
  const [video, setVideo] = useState(initialState);
  const inputRef = useRef(null);
  function handleSubmit(e) {
    e.preventDefault();
    if (editableVideo) {
      dispatch({ type: "UPDATE", payload: video });
    } else {
      dispatch({ type: "ADD", payload: video });
    }
    setVideo(initialState);
  }
  function handleChange(e) {
    setVideo({ ...video, [e.target.name]: e.target.value });
  }

  useEffect(() => {
    if (editableVideo) setVideo(editableVideo);
    // inputRef.current.placeholder = " ";
    inputRef.current.focus();
    // "type here".split("").forEach((char, i) => {
    //   setTimeout(() => {
    //     inputRef.current.placeholder += char;
    //   }, 100 * i);
    // });
  }, [editableVideo]);

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        name="title"
        placeholder="Title"
        value={video.title}
        onChange={handleChange}
      />
      <input
        type="text"
        name="view"
        placeholder="Views"
        value={video.view}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>
        {editableVideo ? "Edit" : "Add"} Video
      </button>
    </div>
  );
}
export default AddVideo;
