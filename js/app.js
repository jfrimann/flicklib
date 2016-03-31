var flickLib = angular.module('flickLib', ['ngRoute', 'firebase'])
.constant('FIREBASE_URL', 'https://flicklib.firebaseio.com/');

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
        when('/success', {
            templateUrl: 'views/registrationSuccess.html',
            controller: 'SuccessController'
        }).
        when('/library', {
            templateUrl: 'views/library.html',
            controller: 'LibraryController'
        }).
        otherwise({
            redirectTo: '/login'
        });
}]);
