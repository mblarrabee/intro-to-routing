var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider',
			function(router, $location){
				router.
					when("/Settings", {
						templateUrl: "/app/templates/settings_template.html",
						controller: "SettingsController"
					}).
					when("/List", {
						templateUrl: "/app/templates/list_template.html",
						controller: "ListController"
					}).
					when("/Details/:detailId", {
						templateUrl: "/app/templates/details_template.html",
						controller: "DetailsController"
					})

					$location.html5mode = true;
			}]);