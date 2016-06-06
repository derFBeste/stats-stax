/**
*tanuki.io
*Fred Besteman 2016
*MLB stats components
*/

var MLBStats = React.createClass({
  render: function() {
    var date = new Date();

    return (
      <div className="mlbStats">
        <GamesToday date={date.toDateString()} url="api/games"/>
        <TeamStats />
        <PitcherStats />
        <BatterStats />
      </div>
    );
  }
});

var GamesToday = React.createClass({
  getInitialState: function() {
    return {data: []};
  },
  getDefaultProps: function() {

  },
  componentDidMount: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data.games});

      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  render: function() {
    return (
      <div className="gamesToday">
        {this.props.date}
        <GameTile data={this.state.data}/>
      </div>
    );
  }
});

//make game tiles component
var GameTile = React.createClass({
  //TODO Add styles
  render: function(data) {
    var games = null;
    var games = this.props.data.map(function(game){
        return (
          <div key={game.id}>
            {game.away} vs {game.home}
            <div>{game.time}</div>
          </div>
        );
    });
    return (
      <div className="gameTile">
        {games}
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
  <MLBStats/>,
  document.getElementById('content')
);




//Example snippet that mimics ng-repeat, do someting simiar to repeat game tiles
// var RepeatModule = React.createClass({
//   getDefaultProps: function() {
//     return { items: [] }
//   },
//   render: function() {
//
//     var listItems = this.props.items.map(function(item) {
//       return (
//         <li key="{item.name}">
//           <a href="{item.link}">{item.name}</a>
//         </li>
//       );
//     });
//
//     return (
//         <ul>
//           {listItems}
//         </ul>
//     );
//   }
// });
