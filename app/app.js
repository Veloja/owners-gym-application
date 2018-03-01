var app = angular.module('gymApp', ['ngRoute']);

//This configures the routes and associates each route with a view and a controller
app.config(function ($routeProvider) {
    // not working
    // $locationProvider.html5Mode(true);

    $routeProvider
        .when('/trainers',
        {
            controller: 'TrainersController',
            templateUrl: '/app/partials/trainers.html'
        })
        .when('/clients',
        {
            controller: 'ClientsController',
            templateUrl: '/app/partials/clients.html'
        })
        .when('/editTrainer/:trainerID',
        {
            controller: 'EditTrainerController',
            templateUrl: '/app/partials/editTrainer.html'
        })
        .when('/addTrainer',
        {
            controller: 'AddTrainerController',
            templateUrl: '/app/partials/addTrainer.html'
        })
        .when('/addClient',
        {
            controller: 'AddClientController',
            templateUrl: '/app/partials/addClient.html'
        })
        .when('/editClient/:clientID',
        {
            controller: 'EditClientController',
            templateUrl: '/app/partials/editClient.html'
        })
        .otherwise({ redirectTo: '/trainers' });
});