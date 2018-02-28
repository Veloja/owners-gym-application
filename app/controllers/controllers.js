app.controller('TrainersController', function ($scope, gymService) {

    $scope.trainers = gymService.getTrainers();

});

app.controller('ClientsController', function ($scope, gymService) {

    $scope.trainers = gymService.getTrainers();

});

app.controller('AddTrainerController', function ($scope, gymService) {

    $scope.newTrainer = {
        id: null,
        name: "",
        lastName: "",
        gender: "",
        email: "",
        address: ""
    }
    

});

app.controller('EditTrainerController', function ($scope, $routeParams, gymService) {
    console.log('HELO WORLD form EDIT CTRL');
    $scope.trainer = null;

    //uzimamo heroID iz url parametra        
    var trainerID = 0;
    if (($routeParams.trainerID !== null)) {
        trainerID = parseInt($routeParams.trainerID);
    }

    //ako smo uspesno uzeli heroID, dovlacimo izabranog heroja iz servisa
    if (trainerID !== 0) {
        $scope.trainer = gymService.getTrainerByID(trainerID);
    }
});