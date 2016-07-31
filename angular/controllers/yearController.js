gpdApp.controller('yearController', function($scope, $http, $route, $routeParams) {
  $scope.selectedCategory = $route.current.params
  //console.log($scope.series)
  $http.get('/models/downloads_main.json')
  .success(function(data) {
    $scope.categories = data

    //console.log($scope.selectedCategory.series)
    //console.log($scope.categories)
    //console.log($scope.categories[0].id)

    for (i = 0; i < $scope.categories.length; i++) {
      if ($scope.categories[i].id == $scope.selectedCategory.series) {
        console.log($scope.categories[i].years)
        //$scope.years = $scope.categories[i].years
        for (j = 0; j < $scope.categories[i].years.length; j++) {
          console.log($scope.categories[i].years[j].year)
          $scope.years = $scope.categories[i].years
        }
      }
    }

  })
  .error(function() {

  });

})
