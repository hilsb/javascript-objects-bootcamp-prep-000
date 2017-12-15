function object(obj, key, value) {
  var playlist = {artistName: 'songTitles'};
  return playlist;
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist.artistName = 'songTitle';
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName;
  return playlist;
}
