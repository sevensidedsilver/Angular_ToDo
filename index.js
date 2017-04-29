var ninjaApp = angular.module("ninjaApp", []);

ninjaApp.controller('ninjaController', ["$scope", function($scope){
  // $scope.message = "Test Message";
    $scope.ninjas =[
      {
        name:'sally',
        belt:'yellow',
        rate:123.12,
        available:true,
        img: 'imgs/ninja1.jpg'
      },
      {
        name:'ryan',
        belt:'red',
        rate:85.262,
        available:true,
        img:'imgs/ninja2.jpg'
      },
      {
        name:'andy',
        belt:'cyan',
        rate:26.3215,
        available:true,
        img:'imgs/ninja3.gif'
      },
      {
        name:'paul',
        belt:'brown',
        rate:75.12,
        available:true,
        img:'imgs/ninja4.jpeg'
      },
      {
      name:'ron',
      belt:'black',
      rate:25.66,
      available:true,
      img:'imgs/ninja5.jpg'
    }

  ];

  $scope.remove = function(ninja){
    var removeNinja = $scope.ninjas.indexOf(ninja);
    $scope.ninjas.splice(removeNinja, 1);
  };

  $scope.addNinja = function(){
    $scope.ninjas.push({
      name: $scope.newNinja.name,
      belt: $scope.newNinja.belt,
      rate: $scope.newNinja.rate
    })

    $scope.newNinja.name = "";
    $scope.newNinja.belt = "";
    $scope.newNinja.rate = "";
    }



//Where Controller Ends
}]);
