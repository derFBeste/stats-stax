/**
*tanuki.io
*Fred Besteman 2016
*MLB stats components
*/

//TODO console.log stuff

var MLBstats = React.createClass({
  render: function() {
  return (
    <div className="mlbStats">
      <todaysGames/>
      <teamStats/>
      <pitcherStats/>
      <batterStats/>
    </div>
  );

});

var TodaysGames = React.createClass({
  render: function() {
  return (
    <div className="todaysGames">
      <h1>tile list of todays games</h1>
    </div>
  );
});

var TeamStats = React.createClass({
  render: function() {
  return (
    <div className="teamStats">

    </div>
  );
});

var PitcherStats = React.createClass({
  render: function() {
  return (
    <div className="pitcherStats">

    </div>
  );
});

var BatterStats = React.createClass({
  render: function() {
  return (
    <div className="batterStats">

    </div>
  );
});

ReactDOM.render(
  document.getElementById('content')
);
