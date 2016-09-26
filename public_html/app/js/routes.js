//ROUTES
weatherApp.config(function ($routeProvider) {
    $routeProvider
            .when('/', {
                templateUrl: '../html/home.html',
                controller: 'homeController'
            })
            .when('/forecast', {
                templateUrl: '../html/forecast.html',
                controller: 'forecastController'
            })
            .when('/forecast/:days', {
                templateUrl: '../html/forecast.html',
                controller: 'forecastController'
            });
});


