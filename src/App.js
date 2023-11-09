import { useContext, useReducer, useState } from "react";
import "./App.css";
import { videosDB } from "./data/Datadb";
import AddVideo from "./component/AddVideo";
import VideosList from "./component/VideosList";
import ThemeContext from "./context/ThemeContext";
function App() {
  const [editableVideo, setEditableVideo] = useState(null);
  const [mode, setMode] = useState("darkMode");
  function videoReducer(videos, action) {
    switch (action.type) {
      case "ADD":
        return [...videos, { ...action.payload, id: videos.length + 1 }];
      case "DELETE":
        return videos.filter((video) => video.id !== action.payload);
      case "UPDATE":
        const index = videos.findIndex((v) => v.id === action.payload.id);
        const newVideo = [...videos];
        newVideo.splice(index, 1, action.payload);
        setEditableVideo(null);
        return newVideo;
      default:
        return videos;
    }
  }

  const [videos, dispatch] = useReducer(videoReducer, videosDB);

  const themeContext = useContext(ThemeContext);
  console.log(themeContext);
  function editVideo(id) {
    setEditableVideo(videos.find((video) => video.id === id));
  }

  return (
    <ThemeContext.Provider value={mode}>
      <button
        onClick={() => setMode(mode == "darkMode" ? "lightMode" : "darkMode")}>
        Mode
      </button>
      <div className={`App ${mode}`} onClick={() => console.log("app")}>
        <AddVideo editableVideo={editableVideo} dispatch={dispatch} />
        <VideosList editVideo={editVideo} dispatch={dispatch} videos={videos} />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
