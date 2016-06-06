//TODO full implement this, couldn't I just make a JQuery ajax call within the component though?

function getTodaysGames() {
  return $.getJSON('https://localhost:3000/api/games')
  .then(function(data) {
    return data;
  });
}
