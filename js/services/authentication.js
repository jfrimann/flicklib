flickLib.factory('Authentication', ['$rootScope', '$firebaseAuth', '$firebaseObject', '$location', 'FIREBASE_URL', function($rootScope, $firebaseAuth, $firebaseObject, $location, $FIREBASE_URL) {
    var ref = new Firebase($FIREBASE_URL);
    var auth = $firebaseAuth(ref);
    auth.$onAuth(function(authUser) {
        if(authUser){
            var userRef = new Firebase($FIREBASE_URL + 'users/' + authUser.uid);
            var userObj = $firebaseObject(userRef);

            $rootScope.currentUser = userObj;
            console.log($FIREBASE_URL + 'users/' + authUser.uid);
        }else{
            $rootScope.currentUser = '';
        }
    });

    return {
        loginUser: function(user) {
            auth.$authWithPassword({
                email: user.email,
                password: user.password
            }).then(function(regUser) {
                $location.path('/library');
            }).catch(function(error) {
                $rootScope.message = error.message;
            });
        },// end loginUser

        logoutUser: function() {
            console.log('lkjlkjlj');
            return auth.$unauth();
        }, // end logoutUser

        registerUser: function(user) {
            auth.$createUser({
                email: user.email,
                password: user.password
            }, function(error,authData) {
                if(authData) {
                    console.log(authData);
                }
            }).then(function(regUser) {
                var regRef = new Firebase($FIREBASE_URL + 'users/').child(regUser.uid).set({
                    date: Firebase.ServerValue.TIMESTAMP,
                    userID: regUser.uid,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email
                }); // end regUser

                $location.path('/success');
            }).catch(function(error) {
                $rootScope.message = error.message;
                console.log(error.message);

            });// end createUser
        }// end registerUser

    };// end return
}])// end Factory
