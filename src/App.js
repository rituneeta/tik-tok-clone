import React, { useState, useEffect } from "react";
import "./App.css";
import Video from "./component/Video/Video";
import vedio2 from "./Videos/vedio2.mp4";
import vedio1 from "./Videos/vedio1.mp4";

function App() {
  let data = [
    {
      url: vedio2,
      channel: "himanshi123",
      song: "tere sang gujar jana",
      description: "this is awesome song",
      likes: 10,
      messages: 20,
      downloads: 50,
      shares: 30,
    },
    {
      url: vedio1,
      channel: "neeta11222",
      song: "sonnny sooonnggg",
      description: "feel crazy ",
      likes: 100,
      messages: 200,
      downloads: 150,
      shares: 300,
    },
  ];
  const [videos, setVideos] = useState(data);

  return (
    <div className="app">
      <div className="app__videos">
        {videos.map(
          ({
            url,
            channel,
            description,
            song,
            likes,
            messages,
            shares,
            downloads,
          }) => (
            <Video
              url={url}
              channel={channel}
              song={song}
              likes={likes}
              messages={messages}
              description={description}
              shares={shares}
              downloads={downloads}
            />
          )
        )}
      </div>
    </div>
  );
}

export default App;
