import React from 'react';
import { ascSort } from '../utils/utils';
let playlist = ['go go', 'gah gah', 'blam boi'];

const PlayList = () => (
  <ul>
    {ascSort(playlist).map((song, i) => (
        <li key={i}>
          {song}
        </li>
    ))}
  </ul>
)

export default PlayList;
