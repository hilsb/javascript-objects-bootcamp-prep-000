function createPlaylist(artistName, songTitle) {
  var obj = {[artistName]: songTitle};
  return obj;
}

  var playlist = createPlaylist(artistName, songTitle);

function updatePlaylist(playlist, artistName, songTitle) {
  var obj = {[artistName]: songTitle}
  return obj;
}

  playlist.updatePlaylist = (artistName: "Phil Ochs, songTitle: "Here\'s to the State of Mississippi');

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName;
  return playlist;
}
