gpdApp.controller('yearsController', function($scope, $http, $route, $routeParams) {
  $scope.selectedCategory = $route.current.params
  $http.get('./models/downloads_main.json')
  .success(function(data) {
    $scope.categories = data;
    for (i = 0; i < $scope.categories.length; i++) {
      if ($scope.categories[i].id == $scope.selectedCategory.series) {
        $scope.categoryName = $scope.categories[i].name;
        for (j = 0; j < $scope.categories[i].years.length; j++) {
          $scope.years = $scope.categories[i].years;
        }
      }
    }
  })
  .error(function() {
    console.log('error getting years');
  });
});
