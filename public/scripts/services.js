'use strict';

angular.module('confusionApp')
    .constant('baseURL','http://localhost:3000/')
        .service('menuFactory',['$http','baseURL',
            function($http,baseURL) {					
        this.getDishes = function(){
                return $http.get(baseURL+'dishes');

            };
 
        this.getDish = function (index) {
                return $http.get(baseURL+'dishes/'+index);
            };

////var menufac = {};
//			this.getDishes = function(){
//                         return $resource(baseURL+"dishes/:id",null,  {'update':{method:'PUT' }});
//
//             };                
                
// Task 1
        this.getPromotion = function(index) {
            return $http.get(baseURL+'promotions/'+index);
                }
// below to post data to db.json controler feedback            
        this.feedback = function(data) {
            return $http.post(baseURL+'feedback',data); 
                }
// send data to db.json in post call of feedback        
        }])

    .factory('corporateFactory',['$http','baseURL',         function($http,baseURL) {
// task 3 used on about     
            var corpfac = {};
      corpfac.getLeaders = function() {
            return $http.get(baseURL+'leadership');
        };

// task 2 
        corpfac.getLeader = function(index) {
            return $http.get(baseURL+'leadership/'+index);
        };

        return corpfac;

    }])

;
