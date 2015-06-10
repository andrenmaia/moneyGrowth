var moneyGrowthApp = angular.module('moneyGrowthApp', []);

moneyGrowthApp.controller('DashboardCtrl', function ($scope,$interval) {


/*
    var currentYear = new Date().getFullYear(); 
    var alreadyEarn = 10;

    var setCounter = function(){

      var counterValue = 
        (new Date().getTime() - new Date('01/01/2011').getTime())/(1000*60*6);
      $('.moneyCounter').text(counterValue);
    }

    setInterval(setCounter,1000);
    setCounter();

*/

  $interval(function() {

    $scope.anualEarn = 120000;
    $scope.secondsOnYear = 1892160000; // 365(days) * 24(hours) * 60(minutes) * 60(seconds)
    $scope.moneyCounter = 0;
    $scope.dayOfYear = getDayOfYear();
    $scope.earnBySecond = $scope.anualEarn / $scope.secondsOnYear;
    $scope.yearSecond = 0;
    $scope.projection =  $scope.earnBySecond * $scope.secondsOnYear;

    $scope.yearSecond =  (new Date() - new Date(new Date().getFullYear(), 0, 1)) / 1000;
    $scope.moneyCounter = $scope.earnBySecond * $scope.yearSecond * 10 * (new Date().getMonth() + 1);

  },1000);

  function getDayOfYear(){
    var now = new Date();
    var start = new Date(now.getFullYear(), 0, 0);
    var diff = now - start;
    var oneDay = 1000 * 60 * 60 * 24;
    var day = Math.floor(diff / oneDay);
    return day;
  }

  function getSecondOfYear(){
    return getDayOfYear() / 60 / 60;
  }

});