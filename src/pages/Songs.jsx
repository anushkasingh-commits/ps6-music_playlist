import React, { useState } from 'react'
import SongCard from '../components/SongCard'

export default function Songs({ songs, togglePlaylist }) {
    const [search, setSearch] = useState('')
    const [genre, setGenre] = useState('All')
    const genreSongs = genre === 'All' ? songs : songs.filter(song => song.genre === genre)
    const visibleSongs = genreSongs.filter(song =>
        song.title.toLowerCase().includes(search.toLowerCase())
    )
    return (
        <div className='page'>
            <h1>All Songs</h1>
            <input type='text' placeholder='Search by title' value={search} onChange={e => setSearch(e.target.value)} />
            <select value={genre} onChange={e => setGenre(e.target.value)}>
                <option value='All'>All</option>
                <option value='Romantic'>Romantic</option>
                <option value='Motivational'>Motivational</option>
                <option value='Sufi'>Sufi</option>
                <option value='Punjabi'>Punjabi</option>
            </select>
            {visibleSongs.length === 0 && <p>No songs found.</p>}
            <div className='card-list'>
                {visibleSongs.map(song => (
                    <SongCard key={song.id} song={song} togglePlaylist={togglePlaylist} />
                ))}
            </div>
        </div>
    )
}