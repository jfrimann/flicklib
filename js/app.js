var flickLib = angular.module('flickLib', ['ngRoute']);

flickLib.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/login', {
            templateUrl: 'views/login.html',
            controller: 'RegistrationController'
        }).
        when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegistrationController'
        }).
        otherwise({
        redirectTo: '/login'
        });
}]);
