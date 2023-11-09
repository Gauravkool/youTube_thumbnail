import "./Video.css";

function Video({
  verified,
  id,
  title,
  channel = "coder dost",
  views,
  time,
  children,
  dispatch,
  editVideo,
}) {
  return (
    <>
      <div className="container">
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
            {views} views <span>.</span>
            {time}
          </div>
          <div>{children}</div>
        </div>
      </div>
    </>
  );
}
export default Video;
