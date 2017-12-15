function objects(obj, key, value) {
  var playlist = objects [{artistName: 'songTitles'}];
  return playlist;
}

function updatePlaylist(playlist, artistName, songTitle) {
  add playlist.artistName: songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName;
  return playlist;
}
