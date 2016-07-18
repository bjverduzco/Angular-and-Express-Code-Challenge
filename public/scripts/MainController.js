angular.module('challengeApp', []);
angular.module('challengeApp').controller('MainController', function($scope, $http){

  $scope.students = [];

  $scope.display = function(){
    $http.get('/students').then(handleSuccess, handleFailure);
  };

  function handleSuccess(response){
    $scope.students = response.data;
    console.log('Success!!!', response);
  };

  function handleFailure(response){
    conosole.log('And you broke it, because clearly it isn\'t the programmers fault.', response);
  }

  // var students = [
  //   "Andrew Kolander",
  //   "Anthony Maki",
  //   "Brian Anderson",
  //   "Brian Verduzco",
  //   "Connor O'Gara",
  //   "Cormac Strahan",
  //   "Donovan Goertzen",
  //   "Hillary Manning",
  //   "Jon Wilson",
  //   "Justin Doty",
  //   "Katie Vogel",
  //   "Kyle Quamme",
  //   "Liz Kerber",
  //   "Megan Martinson",
  //   "Richard Camara",
  //   "Ryan Mattson",
  //   "Sahasha Reese",
  //   "Tracy Vincent",
  //   "Trent Johnson"
  // ];
  // $http.get('/students')


});
