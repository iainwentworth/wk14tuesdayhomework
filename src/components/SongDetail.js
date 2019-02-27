import React from 'react';

const SongDetail = (props) => {
  if (!props.song) {
    return <p>Waiting for selection....</p>
  }
  return (
    <div>
    <h3>Title: {props.song['im:name'].label}</h3>
    <p>Artist: {props.song['im:artist'].label}</p>
    <p>Chart position: {props.song.index}</p>

    </div>
  )
}

export default SongDetail;
