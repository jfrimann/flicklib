var flickLib = angular.module('flickLib', ['ngRoute', 'firebase'])
.constant('FIREBASE_URL', 'https://flicklib.firebaseio.com/');

flickLib.run(['$rootScope', '$location', function($rootScope, $location) {
    $rootScope.$on('$routeChangeError', function(event, next, previous, error) {
        if(error == 'AUTH_REQUIRED') {
            $rootScope.message = 'Sorry, you must be logged in to access that page';
            $location.path('/login');
        }
    });
}]),

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
            controller: 'SuccessController',
            resolve: { // Will control if /success should be viewed based on valid login
                currentAuth: function(Authentication) {
                    return Authentication.requireAuth();
                } // end currentAuth
            } // end resolve
        }).
        when('/library', {
            templateUrl: 'views/library.html',
            controller: 'LibraryController',
            resolve: {
                currentAuth: function(Authentication) {
                    return Authentication.requireAuth();
                } // end currentAuth
            } // end resolve
        }).
        otherwise({
            redirectTo: '/login'
        });
}]);
