OneForAll.controller('BenefitController', function($scope, $state) {
  console.log('BenefitController');
  
  $scope.toIntro = function(){
    $state.go('intro');
  }
});