OneForAll.controller('HomeController', function($scope, $state) {
  console.log('HomeController');
  
  $scope.toIntro = function(){
    $state.go('signUp');
  }
}); 