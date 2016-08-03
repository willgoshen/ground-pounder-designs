gpdApp.controller('testRouteController', function($scope, $routeParams) {
  $scope.test = "just a routing test"
});

gpdApp.controller('testRouteController2', function($scope, $routeParams) {
  $scope.test = "just another routing test"
});

gpdApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  //$locationProvider.html5Mode(true);

  $routeProvider
  .when('/', {
    templateUrl: 'mainpage.html',
    controller: 'mainPageController'
  })
  .when('/about', {
    templateUrl: 'test.html',
    controller: 'testRouteController'
  })
  .when('/downloads', {
    templateUrl: 'views/downloads.html',
    controller: 'downloadsController'
  })
  .when('/downloads/mods', {
    templateUrl: 'views/mods.html'
  })
  .when('/downloads/utils', {
    templateUrl: 'views/utils.html'
  })
  .when('/downloads/:series', {
    templateUrl: 'views/years.html',
    controller: 'yearsController'
  })
  .when('/downloads/:series/:year', {
    templateUrl: 'views/year.html',
    controller: 'yearController'
  })
  .when('/testpage', {
    templateUrl: 'test.html',
    controller: 'testRouteController'
  })
  .when('/testpage/:id', {
    templateUrl: 'test.html',
    controller: 'testRouteController2'
  })
  .otherwise({
    redirectTo: '/'
  });
}]);
