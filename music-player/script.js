let currentSongIndex = 0;
let isPlaying = false;
 
async function searchSongs(query) {
    const response = await fetch(`https://api.netease.im/resource/song?query=${query}`); 
    const data = await response.json(); 
    const playlist = document.querySelector('.playlist'); 
    playlist.innerHTML  = '';
    data.songs.forEach(song  => {
        const item = document.createElement('div'); 
        item.textContent  = song.name  + ' by ' + song.artists.join(',  ');
        item.onclick  = () => playSong(song.id); 
        playlist.appendChild(item); 
    });
}
 
function playSong(id) {
    // Implement song playback logic using the song ID 
}
 
function togglePlay() {
    isPlaying = !isPlaying;
    if (isPlaying) {
        // Play the current song 
    } else {
        // Pause the current song 
    }
}
 
function playNext() {
    currentSongIndex++;
    if (currentSongIndex >= playlist.children.length)  currentSongIndex = 0;
    playSong(playlist.children[currentSongIndex].dataset.id); 
}
 
function playPrevious() {
    currentSongIndex--;
    if (currentSongIndex < 0) currentSongIndex = playlist.children.length  - 1;
    playSong(playlist.children[currentSongIndex].dataset.id); 
}
 
function getLyrics(id) {
    // Implement lyrics fetching logic using the song ID 
}
 
// Add event listener for search input 
document.getElementById('search').addEventListener('keypress',  function(event) {
    if (event.key  === 'Enter') {
        const query = this.value; 
        searchSongs(query);
    }
});