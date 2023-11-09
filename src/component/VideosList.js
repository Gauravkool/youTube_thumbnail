import PlayButton from "./PlayButton";
import Video from "./Video";

import useVideos from "../hooks/Videos";

function VideosList({ editVideo }) {
  const videos = useVideos();
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
    </>
  );
}
export default VideosList;
