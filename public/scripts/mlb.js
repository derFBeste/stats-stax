/**
*tanuki.io
*Fred Besteman 2016
*MLB stats components
*/

var MLBStats = React.createClass({
  render: function() {
    return (
      <div className="mlbStats">
        <GamesToday />
        <TeamStats />
        <PitcherStats />
        <BatterStats />
      </div>
    );
  }
});

var GamesToday = React.createClass({
  render: function() {
    return (
      <div className="gamesToday">
        <h1>tile list of todays games</h1>
      </div>
    );
  }
});


var TeamStats = React.createClass({
  render: function() {
    return (
      <div className="teamStats">
        various team stats
      </div>
    );
  }
});


var PitcherStats = React.createClass({
  render: function() {
    return (
      <div className="pitcherStats">
        pitcher stats
      </div>
    );
  }
});

var BatterStats = React.createClass({
  render: function() {
    return (
      <div className="batterStats">
        batter stats!
      </div>
    );
  }
});

ReactDOM.render(
  <MLBStats />,
  document.getElementById('content')
);
