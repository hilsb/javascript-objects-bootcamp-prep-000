function objects(obj, key, value) {
  var object = playlist {artistName: 'songTitles'};
  return object;
}

function updatePlaylist(playlist, artistName, songTitle) {
  add playlist.artistName: songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName;
  return playlist;
}
