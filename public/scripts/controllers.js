'use strict';

angular.module('confusionApp')

        .controller('MenuController', ['$scope', 'menuFactory', function($scope, menuFactory) {
            
            $scope.tab = 1;
            $scope.filtText = '';
            $scope.showDetails = false;
// http get called on json-server db.json
            $scope.dishes= {};
            menuFactory.getDishes()
            .then(
                function (response){
    $scope.dishes = response.data;   
                }
                ,
                function(response) {
                    $scope.message = "Error: "+response.status + " " + response.statusText;
                }
            );
              
                        
            $scope.select = function(setTab) {
                $scope.tab = setTab;
                
                if (setTab === 2) {
                    $scope.filtText = "appetizer";
                }
                else if (setTab === 3) {
                    $scope.filtText = "mains";
                }
                else if (setTab === 4) {
                    $scope.filtText = "dessert";
                }
                else {
                    $scope.filtText = "";
                }
            };

            $scope.isSelected = function (checkTab) {
                return ($scope.tab === checkTab);
            };
    
            $scope.toggleDetails = function() {
                $scope.showDetails = !$scope.showDetails;
            };
        }])

        .controller('ContactController', ['$scope', function($scope) {

            $scope.feedback = {mychannel:"", firstName:"", lastName:"", agree:false, email:"" };
            
            var channels = [{value:"tel", label:"Tel."}, {value:"Email",label:"Email"}];
            
            $scope.channels = channels;
            $scope.invalidChannelSelection = false;
            
            
            
                        
        }])

        .controller('FeedbackController', ['$scope','menuFactory', function($scope,menuFactory) {
            

     $scope.sendFeedback = function() {
// feedback to go to db.json feedback[]
// alert ('hi: '+$scope.feedback.firstName);
       menuFactory.feedback($scope.feedback).then(      // send feedback data from controller to service
              function(response){
              $scope.feedback.firstName =  response.$scope.feedback.firstName; 
                    }
            ); 
// close of post function
         
                if ($scope.feedback.agree && ($scope.feedback.mychannel == "")) {
                    $scope.invalidChannelSelection = true;
                    console.log('incorrect');
                }
                else {
                    $scope.invalidChannelSelection = false;
                    $scope.feedback = {mychannel:"", firstName:"", lastName:"", agree:false, email:"" };
                    $scope.feedback.mychannel="";
                    $scope.feedbackForm.$setPristine();
                    console.log($scope.feedback);
                }
            };
        }])

        .controller('DishDetailController', ['$scope', '$stateParams', 'menuFactory', function($scope, $stateParams, menuFactory) {

        $scope.dish = {};
        menuFactory.getDish(parseInt($stateParams.id,10))
        .then(
              function(response){
              $scope.dish =  response.data; 
                    }
            );    
        }])

        .controller('DishCommentController', ['$scope', function($scope) {
            
            $scope.mycomment = {rating:5, comment:"", author:"", date:""};
            
            $scope.submitComment = function () {
                
                $scope.mycomment.date = new Date().toISOString();
                console.log($scope.mycomment);
                
                $scope.dish.comments.push($scope.mycomment);
                
                $scope.commentForm.$setPristine();
                
                $scope.mycomment = {rating:5, comment:"", author:"", date:""};
            }
        }])

        .controller('IndexController', ['$scope', 'menuFactory', 'corporateFactory', 
            function($scope, menuFactory, corporateFactory) {

               $scope.featured_dish = {};
        menuFactory.getDish(3).then(
                 function(response){
                 $scope.featured_dish = response.data;
                        }
                );
                
// Task 1 promotion_dish              
            menuFactory.getPromotion(0).then(
            function(response){
              $scope.promotion_dish = response.data;  
            }
            );
                
// Task 2 chief
            corporateFactory.getLeader(3).then(
                function(response){
                    $scope.chief =  response.data;
                });

        }])

        .controller('AboutController', ['$scope', 'corporateFactory', 
            function($scope, corporateFactory) {

// used on about.html page task 3
            corporateFactory.getLeaders()
                .then(
                function (response){
                    $scope.leaders = response.data;
                });


        }]);

//.controller('FeedbackController', ['$scope', 'feedbackFactory', function($scope, feedbackFactory) {
//
//				$scope.feedbacks = feedbackFactory.getFeedbacks().query();
//
//				$scope.sendFeedback = function() {
//					
//					console.log($scope.feedback);
//					
//					feedbackFactory.getFeedbacks().create($scope.feedback);
//
//					if ($scope.feedback.agree && ($scope.feedback.mychannel === "")) {
//						$scope.invalidChannelSelection = true;
//						console.log('incorrect');
//					}
//					else {
//						$scope.invalidChannelSelection = false;
//						$scope.feedback = {mychannel:"", firstName:"", lastName:"", agree:false, email:"" };
//						$scope.feedback.mychannel="";
//						$scope.feedbackForm.$setPristine();
//						console.log($scope.feedback);
//					}
//					console.log($scope.feedbacks);
//				};
//			}])
