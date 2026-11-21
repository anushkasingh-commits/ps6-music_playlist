# P6 - Music Playlist

A React song browser where you can search and filter songs, view details for each one, and build a personal playlist.

## Student Details

- **Name:** Anushka Singh
- **UID:** 108
- **Assigned Problem Statement:** P6 - Music Playlist
- **Live Deployment:** https://music-playlist-theta.vercel.app/

## Features

- **Home:** Shows the total number of songs, the number of songs in the playlist, and the number of trending songs.
- **Songs:** Lists all songs with a search box (by title) and a genre dropdown filter.
- **Song Details:** Shows the album, year, streams, and duration of a selected song.
- **Playlist:** Shows only the songs added to the playlist, along with their total duration.
- **Trending badge:** Shown on songs with 1,000,000 or more streams.
- **Add / Remove:** Toggle a song in or out of the playlist from the song card or the details page. The navbar count updates automatically.

## Routes

| Path         | Page                          |
| ------------ | ----------------------------- |
| `/`          | Home                          |
| `/songs`     | All songs (search and filter) |
| `/songs/:id` | Song details                  |
| `/playlist`  | My playlist                   |

## Tech Stack

- React (Vite)
- React Router
- Plain CSS

## Project Structure

```
src/
├── data/
│   └── songs.js
├── components/
│   ├── Navbar.jsx
│   └── SongCard.jsx
├── pages/
│   ├── Home.jsx
│   ├── Songs.jsx
│   ├── SongDetails.jsx
│   └── Playlist.jsx
├── utils/
│   └── formatDuration.js
├── App.jsx
├── main.jsx
└── index.css
vercel.json
```

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/anushkasingh-commits/ps6-music_playlist.git
   ```
2. Go into the project folder:
   ```bash
   cd ps6-music_playlist
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open the link shown in the terminal (usually `http://localhost:5173`).

## Deployment

The app is deployed on Vercel. The `vercel.json` file in the project root rewrites all URLs to `/`, so React Router handles each page and refreshing a page like `/songs/1` does not show a 404 error.# ps6-music_playlist
