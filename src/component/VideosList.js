import PlayButton from "./PlayButton";
import Video from "./Video";

import useVideos from "../hooks/Videos";
import axios from "axios";
import { useCallback, useEffect, useMemo } from "react";
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

  const play = useCallback(() => console.log("playing"), []);
  const pause = useCallback(() => console.log("paused"), []);

  const memoButton = useMemo(
    () => (
      <PlayButton onPlay={play} onPause={pause}>
        play
      </PlayButton>
    ),
    []
  );
  return (
    <>
      {videos.map((video) => (
        <Video
          key={video.id}
          title={video.title}
          id={video.id}
          channel={video.channel}
          view={video.view}
          time={video.time}
          verified={video.verified}
          editVideo={editVideo}>
          {memoButton}
        </Video>
      ))}
      {/* <button>Get Videos</button> */}
    </>
  );
}
export default VideosList;
