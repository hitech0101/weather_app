//DIRECTIVES
weatherApp.directive("weatherReport", function(){
    return {
        restrict: 'E',
        templateUrl: '../html/weatherReport.html',
        replace:true,
        scope: {
            weatherDay: '=',
            convertToStandard: '&', 
            convertToDate: '&', 
            dateformat: '@'
        }
    };
});


