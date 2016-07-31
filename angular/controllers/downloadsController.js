gpdApp.controller('downloadsController', function($scope, $http) {
  $http.get('models/downloads_main.json')
  .success(function(data) {
    $scope.categories = data;

  })
  .error(function() {
    console.log('error retrieving download categories')
  });
});
