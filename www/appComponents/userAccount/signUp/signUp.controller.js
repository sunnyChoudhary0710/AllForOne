OneForAll.controller('SignUpController', function($scope, $state) {
  console.log('SignUpController');
  
  $scope.signIn = function(){
    $state.go('intro');
  }
});