import React from 'react';
import {Link} from 'react-router'
import formatDuration from '../utils/formatDuration'

export default function SongCard({song, togglePlaylist}) {
    return (
        <div className="card">
            <h3>{song.title}</h3>
            <p>Artist: {song.artist}</p>
            <p>Album : {song.album}</p>
            <p>Genre: {song.genre}</p>
            <p>Duration: {formatDuration(song.duration)}</p>
            { song.streams >= 1000000 && <span className="badge">Trending🔥</span> }
            <div>
                <Link to={'/songs/' + song.id}>View Details</Link>
                <br />
                <button onClick={() => togglePlaylist(song.id)}>
                    {song.isInPlaylist ? 'Remove from playlist' : 'Add to playlist'}
                </button>
            </div>
        </div>
    )
}