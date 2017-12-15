function object(obj, key, value) {
  var playlist = {artistName: 'songTitles'};
  return playlist;
}

function updatePlaylist(playlist, artistName, songTitle) {
  var playlist = {artistName: "songTitle"};
  playlist = ["Phil Ochs: "Here\'s to the State of Mississippi'];
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName;
  return playlist;
}
