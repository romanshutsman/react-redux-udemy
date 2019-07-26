import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
  return videos.map((video, key) => (
    <div key={key} className="ui relaxed divided list">
      <VideoItem onVideoSelect={onVideoSelect} video={video} />
    </div>
  ));
};
export default VideoList;
