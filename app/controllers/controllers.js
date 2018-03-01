app.controller('AddTrainerController', function ($scope, gymService) {

    $scope.trainers = gymService.getTrainers();

    $scope.newTrainer = {};

    function getNextId() {
        var max = 0;
        for (var i = 0; i < $scope.trainers.length; i++) {
            var currentTrainer = $scope.trainers[i];
            if (currentTrainer.id > max) {
                max = currentTrainer.id;
            }
        }
        return max + 1;
    }

    $scope.addNewTrainer = function (newTrainer) {

        newTrainer.id = getNextId();
        $scope.trainers.push(newTrainer);

        $scope.newTrainer = {};
    }


});

app.controller('TrainersController', function ($scope, gymService) {

    $scope.trainers = gymService.getTrainers();

    $scope.deleteTrainer = function (index) {
        $scope.trainers.splice(index, 1);
    }

});

app.controller('EditTrainerController', function ($scope, $routeParams, gymService) {

    $scope.trainer = null;

    //uzimamo trenerovID iz url parametra        
    var trainerID = 0;
    if (($routeParams.trainerID !== null)) {
        trainerID = parseInt($routeParams.trainerID);
    }

    //ako smo uspesno uzeli trenerovID, dovlacimo izabranog trenera iz servisa
    if (trainerID !== 0) {
        $scope.trainer = gymService.getTrainerByID(trainerID);
    }

});

app.controller('AddClientController', function ($scope, gymService) {

    $scope.clients = gymService.getClients();

    $scope.addNewClient = function (newClient) {
        newClient.id = getNextId();
        $scope.trainers.push(newClient);

        $scope.newClient = {};
    }

    function getNextId() {
        var max = 0;
        for (var i = 0; i < $scope.clients.length; i++) {
            var currentClient = $scope.clients[i];
            if (currentCleint.id > max) {
                max = currentClient.id;
            }
        }
        return max + 1;
    }

});

app.controller('ClientsController', function($scope, gymService){
    $scope.clients = gymService.getClients();
});

app.controller('EditClientController', function($scope, gymService, $routeParams){
    $scope.client = null;

    //uzimamo trenerovID iz url parametra        
    var clientID = 0;
    if (($routeParams.clientID !== null)) {
        clientID = parseInt($routeParams.clientID);
    }

    //ako smo uspesno uzeli trenerovID, dovlacimo izabranog trenera iz servisa
    if (clientID !== 0) {
        $scope.client = gymService.getClientByID(clientID);
    }
});