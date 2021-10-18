var app = angular.module("angular", [])
				app.controller("myController", function($scope){
				$scope.carts=[];
				$scope.products = [
					{p_id: "1", p_name: "Pure White Bag Chain",p_image: "images/item-1.jpg", p_price: 15000},
					{p_id: "2", p_name: "Crocodile Bag",p_image: "images/item-2.png", p_price: 10000},
					{p_id: "3", p_name: "Kithara Square Bag",p_image: "images/item-3.jpg", p_price: 25000},
					{p_id: "4", p_name: "Jagura Bag",p_image: "images/item-4.jpg", p_price: 15000},
					{p_id: "5", p_name: "Elegant Female Ribbon Bag ",p_image: "images/item-5.jpg", p_price: 25000},
					{p_id: "6", p_name: "Kate Spade Bag",p_image: "images/item-6.jpg", p_price: 15000},
					{p_id: "7", p_name: "Mini Flap Blue Bag",p_image: "images/item-7.jpg", p_price: 9500},
					{p_id: "8", p_name: "Flappy Brown Bag",p_image: "images/item-8.jpg", p_price: 8000},
					{p_id: "9", p_name: "NEW IN Green Bag",p_image: "images/item-9.jpg", p_price: 12000}
					
				];
				
				$scope.add_cart = function(product){
					if(product){
						$scope.carts.push({p_id: product.p_id, p_name: product.p_name, p_price: product.p_price});
					}	
				}
						
					
				$scope.total = 0;
				
				$scope.setTotals = function(cart){
					if(cart){
						$scope.total += cart.p_price;
					}
				}
				
				$scope.remove_cart = function(cart){
					if(cart){
						$scope.carts.splice($scope.carts.indexOf(cart), 1);
						$scope.total -= cart.p_price;
					}
				}

				$scope.hideandshow=false;
				$scope.$watch('hideandshow',function(){
					$scope.buttonvalue = $scope.hideandshow ? 'Back' : 'Click here';
				})
				

	});
				