import React, { useRef, useState } from "react";
import VideoFooter from "./VideoFooter/VideoFooter";
import VideoSidebar from "./VideoSidebar/VideoSidebar";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import "./Video.css";

const Video = ({
  url,
  channel,
  description,
  song,
  likes,
  messages,
  shares,
  downloads,
}) => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const onVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="video">
      <div className="videoHeader">
        <MusicNoteIcon style={{ marginRight: "5px", fontSize: "40" }} />
        <h1>Tik Tok</h1>
      </div>

      <video
        className="video__player"
        loop
        onClick={onVideoPress}
        ref={videoRef}
        src={url}
      ></video>
      <VideoFooter channel={channel} description={description} song={song} />
      <VideoSidebar
        likes={likes}
        messages={messages}
        shares={shares}
        downloads={downloads}
      />
    </div>
  );
};

export default Video;
