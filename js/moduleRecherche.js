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

app.controller('RechercheController', ['$scope', 'RechercheFactory', function ($scope, RechercheFactory) {
    $scope.compteur = 6,
    $scope.mesRealisations=RechercheFactory.getmesRealisations()
        .then( 
            function (data) { $scope.mesRealisations = data;},
            function (msg) {
                alert(msg); 
            }
        );
    
    $scope.nbmesRealisations = function () {
        return ($scope.mesRealisations.length);
    };
    
    $scope.count = function () {
        return ($scope.mesRealisations.length);
    };

}]);

app.controller('ViewRechercheController', ['$scope', '$routeParams','RechercheFactory', function ($scope, $routeParams,RechercheFactory) {
    
     $scope.mesRealisations=RechercheFactory.getmesRealisations()
        .then( 
            function (data) { $scope.mesRealisations = data;$scope.realisations = $scope.mesRealisations[$routeParams.nom];},
            function (msg) {
                alert(msg); 
            }
        );
}]);

// PROMESSE EN CONSTRUCTION.
app.factory('RechercheFactory', ['$http', '$q', function ($http, $q) {
    var factory = {
        mesRealisations: false,
        getmesRealisations: function () {
            var deferred = $q.defer();
            $http.get('js/data.json')
                .success(function (data, status) { 
                    factory.mesRealisations = data; 
                    deferred.resolve(factory.mesRealisations);
                })
                .error(function (data, status) {
                    deferred.reject('Impossible de récupérer les données !'); 
                })
            return deferred.promise;
        }
    };
    return factory;
}]);