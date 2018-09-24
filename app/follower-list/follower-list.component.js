'use strict'
angular.module('followerList').
component('followerList',{
	templateUrl:'/app/follower-list/templates/follower-list.html'	,
	controller:function ($scope,APIservice) {
		
		$scope.totalList={};
		$scope.date={};
		$scope.currentlyActive={}
		$scope.currentlyActive.total={}
		$scope.currentlyActive.friends={}
		$scope.currentlyActive.influence={}
		$scope.currentlyActive.chirpiness={}

		$scope.changeSorting=function(total){
		  $scope.currentlyActive[total].asc=!$scope.currentlyActive[total].asc;
		//  document.getElementsByClassName('filter')[elem].setAttribute('opt-ascending',$scope.currentlyActive[total].asc);

		}


		
		APIservice.get_followers({},function(response){	
			$scope.totalList=response;
			



		})
		var filterFns = {

			hello: function() {
				var date=new Date(parseInt($(this).find('.date').attr("date")))	;
				var from=new Date($scope.date.from);
				var to=new Date($scope.date.to);
				console.log(date,from,to);
				if(date >=from && date<=to){
					return true;

				}else{
					return false;
				}

			}


		};
		$scope.removeItem=function(elem){
			

			if (!Array.prototype.filter) return;
			var s=angular.element('#isotopeContainer').scope();
		
			
			   var number =elem.follower.uid;
			   console.log(number);
               

			var items = s.totalList.filter(function( obj ) {

				return obj.uid != number;
			});


		setTimeout(function(){
			s.$apply(s.totalList = items);

		},200)	
		}

		

		$scope.filterDate=function(){
			$scope.$emit('iso-option',{filter:filterFns.hello});
		}

	}




})

;