OneForAll.controller('MainController', function($scope, $state) {
  console.log('MainController');
  
  $scope.toIntro = function(){
    $state.go('intro');
  }
});