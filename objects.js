function createPlaylist(artistName, songTitle) {
  var obj = {[artistName]: songTitle};
  return obj;
}

  var playlist = createPlaylist({"Childish Gambino", "Redbone"});

function updatePlaylist(playlist, artistName, songTitle) {
  var playlist = {artistName, "songTitle"};
  playlist = [artistName: "Phil Ochs, songTitle: "Here's to the State of Mississippi'];
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName;
  return playlist;
}
