import React from 'react'
import SongCard from '../components/SongCard'
import formatDuration from '../utils/formatDuration'

export default function Playlist({ songs, togglePlaylist }) {
    const playlistSongs = songs.filter((song) => song.isInPlaylist)
    let totalSeconds = 0
    playlistSongs.forEach((song) => {
        totalSeconds = totalSeconds + song.duration
    })
    if (playlistSongs.length === 0) {
        return (
            <div className='page'>
                <h1>My Playlist</h1>
                <p>Your playlist is empty</p>
            </div>
        )
    }
    return (
        <div className='page'>
            <h1>My Playlist</h1>
            <p>Total duration: {formatDuration(totalSeconds)}</p>
            <div className='card-list'>
                {playlistSongs.map(song => (
                    <SongCard key={song.id} song={song} togglePlaylist={togglePlaylist} />
                ))}
            </div>
        </div>
    )
}