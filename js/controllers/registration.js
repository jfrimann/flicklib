flickLib.controller('RegistrationController', ['$scope', 'Authentication', function($scope, Authentication) {


    $scope.loginUser = function(){
        Authentication.loginUser($scope.user);
    };// end loginUser

    $scope.logoutUser = function() {
        Authentication.logoutUser();
    }; // end logoutUser

    $scope.registerUser = function() {
        Authentication.registerUser($scope.user);
    };// end registerUser

}])// end RegistrationController
