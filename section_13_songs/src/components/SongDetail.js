import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
  return (
    <div>{song ? <div>Name: {song.title}</div> : <div>No selected</div>}</div>
  );
};

const mapStateToProps = state => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
