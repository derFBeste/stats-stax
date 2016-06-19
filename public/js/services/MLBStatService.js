// MLBStatsApp.factory('MLBStatService', function($http) {
//     var stats = {
//         content: null
//     }
//
//     $http.get('data/mlb_test.json').success(function(data) {
//         stats.content = data;
//     });
//
//     return stats;
// });

MLBStatsApp.factory('MLBStatService', function($resource) {
    return {
        pitcherStats: function() {
            return $resource('https://localhost:3000/api/stats/pitchers', {});
        },
        batterStats: function() {
            return $resource('https://localhost:3000/api/stats/batters', {}, {
                getStats: {
                    method: 'GET'
                }
            });
        },
		gameSchedule: function() {
			return $resource('https://localhost:3000/api/games', {}, {
				getGames: {
					method: 'GET'
				}
			});
		}
    }
});
