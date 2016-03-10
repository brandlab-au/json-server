'use strict';

angular.module('confusionApp')
    .constant('baseURL','http://localhost:3000/')
        .service('menuFactory',['$http','baseURL',
            function($http,baseURL) {					
    // Remove single quotes from function attributes.
    
   
            this.getDishes = function(){
                return $http.get(baseURL+'dishes');

            };
 
            this.getDish = function (index) {
                return $http.get(baseURL+'dishes/'+index);
            };
    

                this.getPromotion = function(index) {
            return $http.get(baseURL+'promotions/'+index);
                }
    // below to post data to db.json controler feedback            
               this.feedback = function() {
            return $http.post(baseURL+'feedback');
                }         
        }])

    .factory('corporateFactory',['$http','baseURL',         function($http,baseURL) {
        
            var corpfac = {};
      corpfac.getLeaders = function() {
            return $http.get(baseURL+'leadership');
        };


        corpfac.getLeader = function(index) {
            return $http.get(baseURL+'leadership/'+index);
        };

        return corpfac;

    }])

;
