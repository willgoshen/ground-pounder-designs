gpdApp.controller('mainPageController', function($scope, $http) {
  //$scope.test = "Hello";
  $http.get('./models/latestCars-slider.json')
  .success(function(data) {
    $scope.sliderCars = data;
    $scope.primaryCar = $scope.sliderCars[0];
    //console.log($scope.primaryCar)

    $scope.secondaryCars = ($scope.sliderCars).slice(1);
    //console.log($scope.secondaryCars)

  })
  .error(function() {
    console.log('error getting slider')
  })
})
