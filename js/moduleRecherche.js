var app = angular.module('monAppRecherche', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'default.html'
        })
        .when('/details/:id', {
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
    
    $scope.filterRealisations=RechercheFactory.getmesRealisations()
    .then( 
        function (data) { $scope.filterRealisations = data;},
        function (msg) {
            alert(msg); 
        }
    );
    
    $scope.all = function () {
        $scope.filterRealisations=$scope.mesRealisations;
    };
    
    $scope.dev = function () {
        $scope.filterRealisations =[];
        for (var i = 0; i < $scope.mesRealisations.length; i++) {
            if($scope.mesRealisations[i]['categorie'] == 'dev'){
                $scope.filterRealisations.push($scope.mesRealisations[i]);
            }
        }
    };
    
    $scope.illu = function () {
        $scope.filterRealisations =[];
        for (var i = 0; i < $scope.mesRealisations.length; i++) {
            if($scope.mesRealisations[i]['categorie'] == 'illu'){
                $scope.filterRealisations.push($scope.mesRealisations[i]);
            }
        }
    };
    
    $scope.musique = function () {
        $scope.filterRealisations =[];
        for (var i = 0; i < $scope.mesRealisations.length; i++) {
            if($scope.mesRealisations[i]['categorie'] == 'musique'){
                $scope.filterRealisations.push($scope.mesRealisations[i]);
            }
        }
    };
        
            
    $scope.nbmesRealisations = function () {
        return ($scope.mesRealisations.length);
    };
    
    $scope.count = function () {
        return ($scope.mesRealisations.length);
    };
    

}]);

function Test($scope) {
  $scope.persons = [{type: 1, name: 'Caio'}, {type:2, name: 'Ary'}, {type:1, name: 'Camila'}];
}

app.controller('ViewRechercheController', ['$scope', '$routeParams', function ($scope, $routeParams) {
    $scope.realisation = $scope.mesRealisations[$routeParams.id];
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