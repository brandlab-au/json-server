'use strict';

angular.module('confusionApp')
    .constant('baseURL','http://localhost:3000/')
        .service('menuFactory',['$http','baseURL',
            function($http,baseURL) {					
                // Remove single quotes from function attributes.
    
   
            this.getDishes = function(){
                return $http.get(baseURL+'dishes');

            };
// getDish als baseURL   
            this.getDish = function (index) {
                return $http.get(baseURL+'dishes/'+index);
            };
    
// Will need to move var promotions to db.json .
                this.getPromotion = function(index) {
            return $http.get(baseURL+'promotions/'+index);
                }

                        
        }])

    .factory('corporateFactory',['$http','baseURL', function($http,baseURL) {
        var corpfac = {};

        // Implement two functions, one named getLeaders,
        // the other named getLeader(index)
        
// Call get service to fetch leadership data from db.json file
        corpfac.getLeaders = function() {
            return $http.get(baseURL+'leadership');
        };

// Call get service with the help of index to fetch leadership data from db.json file
        corpfac.getLeader = function(index) {
            return $http.get(baseURL+'leadership/'+index);
        };

        return corpfac;

    }])

;
