import { useEffect, useState } from "react";
import "./AddVideo.css";
function AddVideo({ dispatch, editableVideo }) {
  const initialState = {
    channel: "coder dost",
    time: "1 year ago",
    verified: true,
    title: "",
    views: "",
  };
  const [video, setVideo] = useState(initialState);
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
  }, [editableVideo]);
  return (
    <div>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={video.title}
        onChange={handleChange}
      />
      <input
        type="text"
        name="views"
        placeholder="Views"
        value={video.views}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>
        {editableVideo ? "Edit" : "Add"} Video
      </button>
    </div>
  );
}
export default AddVideo;
