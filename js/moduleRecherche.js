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
        $scope.compteur=6;
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
        $scope.compteur=6;
        $scope.filterRealisations =[];
        for (var i = 0; i < $scope.mesRealisations.length; i++) {
            if($scope.mesRealisations[i]['categorie'] == 'illu'){
                $scope.filterRealisations.push($scope.mesRealisations[i]);
            }
        }
    };
    
    $scope.musique = function () {
        $scope.compteur=6;
        $scope.filterRealisations =[];
        for (var i = 0; i < $scope.mesRealisations.length; i++) {
            if($scope.mesRealisations[i]['categorie'] == 'musique'){
                $scope.filterRealisations.push($scope.mesRealisations[i]);
            }
        }
    };
        
            
    $scope.nbmesRealisations = function () {
        $scope.nbmesRealisations = $scope.mesRealisations.length;
        return ($scope.mesRealisations.length);
    };
    
    
    $scope.countPlus = function() {
        $scope.compteur = $scope.compteur + 3;
        if($scope.compteur > $scope.filterRealisations.length){
            $scope.compteur = $scope.filterRealisations.length;
        }
    }
    
    $scope.countMoins = function() {
        $scope.compteur = $scope.compteur - 3;
        if($scope.compteur < 6){
            $scope.compteur = 6;
        }
    }
    

}]);


app.controller('ViewRechercheController', ['$scope', '$routeParams', function ($scope, $routeParams) {
    $scope.realisation = $scope.mesRealisations[$routeParams.id];
}]);

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