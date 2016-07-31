gpdApp.controller('testRouteController', function($scope, $routeParams) {
  $scope.test = "just a routing test"
});

gpdApp.controller('testRouteController2', function($scope, $routeParams) {
  $scope.test = "just another routing test"
});

gpdApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  //$locationProvider.html5Mode(true);

  $routeProvider.when('/testpage', {
    templateUrl: 'test.html',
    controller: 'testRouteController'
  }).otherwise({
    redirectTo: '/'
  });

  $routeProvider.when('/testpage/:id', {
    templateUrl: 'test.html',
    controller: 'testRouteController2'
  });

  $routeProvider.when('/', {
    templateUrl: 'mainpage.html',
    controller: 'mainPageController'
  });

$routeProvider.when('/about', {
  templateUrl: 'test.html',
  controller: 'testRouteController'
})
  /*
  $routeProvider.when('/downloads', {
    templateUrl: 'test.html',
    controller: 'testRouteController'
  })
  */


}]);
