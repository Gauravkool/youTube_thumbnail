import { useContext } from "react";
import VideoDisptachContext from "../context/VideoDispatchContext";

function useVideoDispatch() {
  return useContext(VideoDisptachContext);
}

export default useVideoDispatch;
