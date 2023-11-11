import { useContext, useDebugValue } from "react";
import VideosContext from "../context/VideosContext";

function useVideos() {
  useDebugValue(useContext(VideosContext).lenght);
  return useContext(VideosContext);
}

export default useVideos;
