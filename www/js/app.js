var OneForAll = angular.module('OneForAll', ['ionic'])

OneForAll.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
     
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

OneForAll.config(function($stateProvider,$urlRouterProvider){

  $stateProvider.state('intro', {
    url: '/',
    templateUrl: 'appComponents/slider/intro.html',
    controller: 'IntroController'
  }).state('benefit', {
    url: '/benefit',
    templateUrl: 'appComponents/slider/benefit.html',
    controller: 'BenefitController0'
  }).state('home', {
    url: '/home',
    templateUrl: 'appComponents/slider/home.html',
    controller: 'HomeController'
  }).state('signUp', {
    url: '/signUp',
    templateUrl: 'appComponents/userAccount/signUp/signUp.html',
    controller: 'SignUpController'
  })

  $urlRouterProvider.otherwise('/');

})

