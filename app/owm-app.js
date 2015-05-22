//angular.module('OWMApp', ['ngRoute']);

//angular.module('OWMApp', ['ngRoute'])
//    .config(['$routeProvider', function($routeProvider){
//        $routeProvider.when('/', {
//            templateUrl : 'home.html',
//            controller : 'HomeCtrl'
//        });
//    }])
//    .controller('HomeCtrl', function($scope) {
//        //empty for now
//    });;

//angular.module('OWMApp', ['ngRoute'])
//    .config(['$routeProvider', function($routeProvider) {
//        $routeProvider.when('/', {
//            templateUrl : 'home.html',
//            controller : 'HomeCtrl'
//        }).when('/city', {
//            templateUrl : 'city.html',
//            controller : 'CityCtrl'
//        });
//    }])
//    .controller('HomeCtrl', function($scope) {
//        //empty for now
//    })
//    .controller('CityCtrl', function($scope) {
//        //empty for now
//    });

//angular.module('OWMApp', ['ngRoute'])
//    .config(['$routeProvider', function($routeProvider) {
//        $routeProvider.when('/', {
//            templateUrl : 'home.html',
//            controller : 'HomeCtrl'
//        }).when('/city', {
//            templateUrl : 'city.html',
//            controller : 'CityCtrl'
//        });
//    }])
//    .controller('HomeCtrl', function($scope) {
//        //empty for now
//    })
//    .controller('CityCtrl', function($scope) {
//        $scope.city = 'New York';
//    });



//angular.module('OWMApp', ['ngRoute'])
//    .config(['$routeProvider', function($routeProvider) {
//        $routeProvider.when('/', {
//            templateUrl : 'home.html',
//            controller : 'HomeCtrl'
//        }).when('/city', {
//            templateUrl : 'city.html',
//            controller : 'CityCtrl'
//        });
//    }])
//    .controller('HomeCtrl', function($scope) {
//        //empty for now
//    })
//    .controller('CityCtrl', function($scope, $routeParams) {
//        $scope.city = $routeParams.city;
//    });
//
// use http://localhost:8080/app/#/city?city=New_York




//angular.module('OWMApp', ['ngRoute'])
//    .config(['$routeProvider', function($routeProvider){
//        $routeProvider.when('/', {
//            templateUrl : 'home.html',
//            controller : 'HomeCtrl'
//        })
//            .when('/cities/:city', {
//                templateUrl : 'city.html',
//                controller : 'CityCtrl'
//            });
//    }])
//    .controller('HomeCtrl', ['$scope', function($scope) {
//        //empty for now
//    }])

    //.controller('CityCtrl', ['$scope', '$routeParams', function($scope, $routeParams) {
    //    $scope.city = $routeParams.city;
    //}]);
    // the above did not work

    //.controller('CityCtrl', function($scope, $routeParams) {
    //    $scope.city = $routeParams.city;
    //});
    // the above worked
//
// use http://localhost:8080/app/#/cities/New_York



//angular.module('OWMApp', ['ngRoute'])
//    .value('owmCities', ['New York', 'Dallas', 'Chicago'])
//    .config(['$routeProvider', function($routeProvider){
//        $routeProvider.when('/', {
//            templateUrl : 'home.html',
//            controller : 'HomeCtrl'
//        })
//            .when('/cities/:city', {
//                templateUrl : 'city.html',
//                controller : 'CityCtrl'
//            });
//    }])
//    .controller('HomeCtrl', ['$scope', function($scope) {
//        //empty for now
//    }])
//
//    .controller('CityCtrl', function($scope, $routeParams, owmCities) {
//        var city = $routeParams.city;
//        city = city.replace('_', ' '); //<= Urls can't contain spaces, so this replaces any _ with a space
//        if(owmCities.indexOf(city) == -1) {
//            //city not found
//            return;
//        }
//
//        $scope.city = city;
//    });




//angular.module('OWMApp', ['ngRoute'])
//    .value('owmCities', ['New York', 'Dallas', 'Chicago'])
//    .config(['$routeProvider', function($routeProvider){
//        $routeProvider.when('/', {
//            templateUrl : 'home.html',
//            controller : 'HomeCtrl'
//        })
//            .when('/cities/:city', {
//                templateUrl : 'city.html',
//                controller : 'CityCtrl',
//                resolve : {
//                    city: function(owmCities, $route, $location) {
//                        var city = $route.current.params.city;
//                        if(owmCities.indexOf(city) == -1 ) {
//                            $location.path('/error');
//                            return;
//                        }
//                        return city;
//                    }
//                }
//            })
//    }])
//    .controller('HomeCtrl', ['$scope', function($scope) {
//        //empty for now
//    }])
//
//    .controller('CityCtrl', function($scope, $routeParams, owmCities) {
//        var city = $routeParams.city;
//        city = city.replace('_', ' '); //<= Urls can't contain spaces, so this replaces any _ with a space
//        if(owmCities.indexOf(city) == -1) {
//            //city not found
//            return;
//        }
//
//        $scope.city = city;
//    });




//angular.module('OWMApp', ['ngRoute'])
//    .value('owmCities', ['New York', 'Dallas', 'Chicago'])
//    .config(['$routeProvider', function($routeProvider){
//        $routeProvider.when('/', {
//            templateUrl : 'home.html',
//            controller : 'HomeCtrl'
//        })
//            .when('/cities/:city', {
//                templateUrl : 'city.html',
//                controller : 'CityCtrl',
//                resolve : {
//                    city: function(owmCities, $route, $location) {
//                        var city = $route.current.params.city;
//                        if(owmCities.indexOf(city) == -1 ) {
//                            $location.path('/error');
//                            return;
//                        }
//                        return city;
//                    }
//                }
//            })
//            .when('/error', {
//                template : '<p>Error - Page Not Found</p>'
//            })
//    }])
//    .controller('HomeCtrl', ['$scope', function($scope) {
//        //empty for now
//    }])
//
//    .controller('CityCtrl', function($scope, $routeParams, owmCities) {
//        var city = $routeParams.city;
//        city = city.replace('_', ' '); //<= Urls can't contain spaces, so this replaces any _ with a space
//        if(owmCities.indexOf(city) == -1) {
//            //city not found
//            return;
//        }
//
//        $scope.city = city;
//    });



//angular.module('OWMApp', ['ngRoute'])
//    .value('owmCities', ['New York', 'Dallas', 'Chicago'])
//    .config(['$routeProvider', function($routeProvider){
//        $routeProvider.when('/', {
//            templateUrl : 'home.html',
//            controller : 'HomeCtrl'
//        })
//            .when('/cities/:city', {
//                templateUrl : 'city.html',
//                controller : 'CityCtrl',
//                resolve : {
//                    city: function(owmCities, $route, $location) {
//
//                        //var city = $route.current.params.city;
//                        var city = $route.current.params.city.replace('_', ' ');
//
//                        if(owmCities.indexOf(city) == -1 ) {
//                            $location.path('/error');
//                            return;
//                        }
//                        return city;
//                    }
//                }
//            })
//            .when('/error', {
//                template : '<p>Error - Page Not Found</p>'
//            })
//    }])
//    .controller('HomeCtrl', ['$scope', function($scope) {
//        //empty for now
//    }])
//
//    .controller('CityCtrl', function($scope, city) {
//
//        //had to add the following
//        //debugger;
//        //city = city.replace('_', ' '); //<= Urls can't contain spaces, so this replaces any _ with a space
//
//        $scope.city = city;
//        //$scope.city = city.replace('_', ' '); //<= Urls can't contain spaces, so this replaces any _ with a space
//
//    });


//angular.module('OWMApp', ['ngRoute'])
//in your owm-app.js file
angular.module('OWMApp', ['ngRoute', 'ngAnimate'])
    .value('owmCities', ['New York', 'Dallas', 'Chicago'])
    .config(['$routeProvider', function($routeProvider){
        $routeProvider.when('/', {
            templateUrl : 'home.html',
            controller : 'HomeCtrl'
        })
            .when('/cities/:city', {
                templateUrl : 'city.html',
                controller : 'CityCtrl',
                resolve : {
                    city: function(owmCities, $route, $location) {
                        //var city = $route.current.params.city;
                        var city = $route.current.params.city.replace('_', ' ');
                        if(owmCities.indexOf(city) == -1 ) {
                            $location.path('/error');
                            return;
                        }
                        return city;
                    }
                }
            })
            .when('/error', {
                template : '<p>Error - Page Not Found</p>'
            })
    }])
    .run(function($rootScope, $location, $timeout) {
        $rootScope.$on('$routeChangeError', function() {
            $location.path("/error");
        });
        $rootScope.$on('$routeChangeStart', function() {
            $rootScope.isLoading = true;
        });
        $rootScope.$on('$routeChangeSuccess', function() {
            $timeout(function() {
                $rootScope.isLoading = false;
            }, 1000);
        });
    })
    .controller('HomeCtrl', ['$scope', function($scope) {
        //empty for now
    }])

    .controller('CityCtrl', function($scope, city) {
        $scope.city = city;
    });







