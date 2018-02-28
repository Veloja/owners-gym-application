app.service('gymService', function () {

    this.getTrainers = function () {
        return trainers;
    };


    this.getTrainerByID = function (trainerID) {
        for (var i = 0; i < trainers.length; i++) {
            if (trainers[i].id === trainerID) {
                return trainers[i];
            }
        }
        return null;
    }

    var trainers = [
        {
            id: 1,
            name: "Misko",
            lastName: "Hevery",
            gender: "male",
            email: "misko@gmail.com",
            address: "11 Ocean View St."
        },
        {
            id: 2,
            name: "Dan",
            lastName: "Wahlin",
            gender: "male",
            email: "dan@gmail.com",
            address: "12 Ocean View St."
        }
    ];

});