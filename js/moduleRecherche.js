var app = angular.module('monAppRecherche', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'default.html'
        })
        .when('/details/:nom', {
            templateUrl: 'details.html'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);

app.controller('RechercheController', ['$scope', '$http', function ($scope, $http) {
    $scope.nbLimit = 6;
    $scope.count = 0;
    $http.get('js/data.json').success(function (data) {
        $scope.mesRealisations = data;
    });
}]);

app.controller("ViewRechercheController", ['$scope', '$routeParams', function ($scope, $routeParams) {
    $scope.realisations = $scope.mesRealisations[$routeParams.nom];
}]);


