var app = angular.module('gymApp', ['ngRoute']);

//This configures the routes and associates each route with a view and a controller
app.config(function ($routeProvider) {
    // not working
    // $locationProvider.html5Mode(true);

    $routeProvider
        .when('/',
            {
                controller: 'TrainersController',
                templateUrl: '/app/partials/trainers.html'
            })
        .when('/trainers',
            {
                controller: 'TrainersController',
                templateUrl: '/app/partials/trainers.html'
            })
        .when('/trainers/editTrainer/:trainerID',
            {
                controller: 'EditTrainerController',
                templateUrl: '/app/partials/editTrainer.html'
            })
        .when('/addTrainer',
            {
                controller: 'AddTrainerController',
                templateUrl: '/app/partials/addTrainer.html'
            })
        .when('/clients',
            {
                controller: 'ClientsController',
                templateUrl: '/app/partials/clients.html'
            })
        .when('/clients/editClient/:clientID',
            {
                controller: 'EditClientController',
                templateUrl: '/app/partials/editClient.html'
            })
        .when('/addClient',
            {
                controller: 'AddClientController',
                templateUrl: '/app/partials/addClient.html'
            })
        .otherwise({ redirectTo: '/trainers' });
});