function createPlaylist(artistName, songTitle) {
  var obj = {[artistName]: songTitle};
  return obj;
}

  var playlist = createPlaylist("Childish Gambino", "Redbone");

function updatePlaylist(playlist, artistName, songTitle) {
  var obj = {[artistName]: songTitle}
  return obj;
}

  var playlist = updatePlaylist(artistName: "Phil Ochs, songTitle: "Here's to the State of Mississippi');

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName;
  return playlist;
}
