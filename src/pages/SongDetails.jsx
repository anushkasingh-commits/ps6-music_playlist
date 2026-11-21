import React from 'react'
import { useParams, Link } from 'react-router'
import formatDuration from '../utils/formatDuration'

export default function SongDetails({ songs, togglePlaylist }) {
    const { id } = useParams()
    const song = songs.find(s => s.id === Number(id))
    if (!song) {
        return (
            <div className='page'>
                <p>Song not found.</p>
                <Link to='/songs'>Back to songs</Link>
            </div>
        )
    }
    return (
        <div className='page'>
            <h1>{song.title}</h1>
            <p>Artist: {song.artist}</p>
            <p>Album: {song.album}</p>
            <p>Genre: {song.genre}</p>
            <p>Year: {song.year}</p>
            <p>Duration: {formatDuration(song.duration)}</p>
            <p>Streams: {song.streams}</p>
            <button onClick={() => togglePlaylist(song.id)}>
                {song.isInPlaylist ? 'Remove from Playlist' : 'Add to Playlist'}
            </button>
            <br />
            <Link to='/songs'>Back to songs</Link>
        </div>
    )
}