OneForAll.controller('SignUpController', function($scope, $state) {
  console.log('SignUpController');
  
  $scope.signUp = function(){
    $state.go('intro');
  }
});