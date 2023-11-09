import { useReducer, useState } from "react";
import "./App.css";
import { videosDB } from "./data/Datadb";
import AddVideo from "./component/AddVideo";
import VideosList from "./component/VideosList";
function App() {
  const [videos, setVideos] = useState(videosDB);
 
  const [editableVideo, setEditableVideo] = useState(null);

  function addVideos(video) {
    setVideos([...videos, { ...video, id: videos.length + 1 }]);
  }
  function deleteVideo(id) {
    setVideos(videos.filter((video) => video.id !== id));
  }
  function editVideo(id) {
    setEditableVideo(videos.find((video) => video.id === id));
  }

  function updateVideo(video) {
    const index = videos.findIndex((v) => v.id === video.id);
    const newVideo = [...videos]
    newVideo.splice(index, 1, video);
    setVideos(newVideo)
  }
  return (
    <div className="App" onClick={() => console.log("app")}>
      <AddVideo
        editableVideo={editableVideo}
        addVideos={addVideos}
        updateVideo={updateVideo}
      />
      <VideosList
        editVideo={editVideo}
        deleteVideo={deleteVideo}
        videos={videos}
      />
    </div>
  );
}

export default App;
