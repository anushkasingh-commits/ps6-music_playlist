import React from 'react'

export default function Home({ songs }) {
    const totalSongs = songs.length
    const playlistSongs = songs.filter((song) => song.isInPlaylist).length
    const trendingSongs = songs.filter((song) => song.streams >= 1000000).length
    return (
        <div className='page'>
            <h1>Music Playlist</h1>
            <p>Browse songs, see details, and build your own playlist.</p>
            <p>Total songs: {totalSongs}</p>
            <p>Songs in playlist: {playlistSongs}</p>
            <p>Trending songs: {trendingSongs}</p>
        </div>
    )
}