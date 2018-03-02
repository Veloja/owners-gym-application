app.controller('TrainersController', function ($scope, gymService, $routeParams, $location) {

    // this probably wont work if you dont add ng-init="getTrainers()" in view
    // $scope.getTrainers = function(){
    //     $http.get('/api/trainers').success(function(response){
    //         $scope.trainers = response;
    //     });
    // }

    // $scope.deleteTrainer = function(id){
    //     // var id = $routeParams.id; maybe we dont need this, because of the id we get from view
    //     $http.delete('/api/trainers/' + id).success(function(response){
    //         window.location.href = "/trainers";
    //     });
    // }

    $scope.trainers = gymService.getTrainers();

    $scope.newTrainer = {};

    function getNextIdforTrainer() {
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

        newTrainer.id = getNextIdforTrainer();
        $scope.trainers.push(newTrainer);

        $scope.newTrainer = {};

        $location.path('/trainers');
    }

    $scope.deleteTrainer = function (index) {
        $scope.trainers.splice(index, 1);
    }

    $scope.editTrainer = function(){
        $location.path('/trainers'); 
    }

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

    // ------------ CLIENTS -------------- //    

    $scope.clients = gymService.getClients();

    $scope.addNewClient = function (newClient) {
        newClient.id = getNextIdforClient();
        $scope.clients.push(newClient);

        $scope.newClient = {};

        $location.path('/clients');
    }

    function getNextIdforClient() {
        var max = 0;
        for (var i = 0; i < $scope.clients.length; i++) {
            var currentClient = $scope.clients[i];
            if (currentClient.id > max) {
                max = currentClient.id;
            }
        }
        return max + 1;
    }

    $scope.editClient = function(){
        $location.path('/clients'); 
    }

    $scope.client = null;

    //uzimamo clientovID iz url parametra        
    var clientID = 0;
    if (($routeParams.clientID !== null)) {
        clientID = parseInt($routeParams.clientID);
    }

    //ako smo uspesno uzeli clijentovID, dovlacimo izabranog clijenta iz servisa
    if (clientID !== 0) {
        $scope.client = gymService.getClientByID(clientID);
    }

});