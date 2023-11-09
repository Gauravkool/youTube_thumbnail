import PlayButton from "./PlayButton";
import Video from "./Video";

function VideosList({ videos, dispatch, editVideo }) {
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
          dispatch={dispatch}
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
