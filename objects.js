function objects(obj, key, value) {
  var playlist = {artistName: 'songTitles'};
  var object = playlist ({artistName: 'songTitles'});
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
