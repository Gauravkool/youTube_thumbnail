import PlayButton from "./PlayButton";
import Video from "./Video";

import useVideos from "../hooks/Videos";
import axios from "axios";
import { useEffect } from "react";
import useVideoDispatch from "../hooks/VideoDispatch";

function VideosList({ editVideo }) {
  const url = "https://my.api.mockaroo.com/api?key=3b1db0b0";
  const videos = useVideos();
  const dispatch = useVideoDispatch();

  // async function handleClick() {
  //   const res = await axios.get(url);
  //   console.log("response of API", res.data);
  //   setVideos(res.data);
  // }
  useEffect(() => {
    async function getVideos() {
      const res = await axios.get(url);
      console.log("response of API", res.data);
      dispatch({ type: "LOAD", payload: res.data });
    }
    getVideos();
  }, [dispatch]);
  return (
    <>
      {videos.map((video) => (
        <Video
          key={video.id}
          title={video.title}
          id={video.id}
          channel={video.channel}
          views={video.views}
          time={video.time}
          verified={video.verified}
          editVideo={editVideo}>
          <PlayButton
            onPlay={() => console.log("playing", video.title)}
            onPause={() => console.log("paused", video.title)}>
            {video.title}
          </PlayButton>
        </Video>
      ))}
      {/* <button>Get Videos</button> */}
    </>
  );
}
export default VideosList;
