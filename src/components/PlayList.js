import React from 'react';

let playlist = ['go go', 'gah gah', 'blam boi'];

const PlayList = () => (
  <ul>
    {playlist.map((song, i) => (
        <li key={i}>
          {song}
        </li>
    ))}
  </ul>
)

export default PlayList;
