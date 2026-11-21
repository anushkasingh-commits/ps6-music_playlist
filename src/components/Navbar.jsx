import React from 'react'
import {Link} from 'react-router'

export default function Navbar({songs}) {
    const playlistCount = songs.filter((song) => song.isInPlaylist).length
    return (
        <nav className='navbar'>
            <Link to='/'>Home</Link>
            <Link to='/songs'>Songs</Link>
            <Link to='/playlist'>Playlist ({playlistCount})</Link>
        </nav>
    )
}