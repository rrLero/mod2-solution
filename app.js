(function () {

'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService)

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var buyController = this;
  buyController.items = ShoppingListCheckOffService.getToBuyList()
  buyController.buy = function (index) {
    ShoppingListCheckOffService.buyItem(index);
  };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var alreadyBought = this;
  alreadyBought.items = ShoppingListCheckOffService.getBoughtList();
}

function ShoppingListCheckOffService() {
  var service = this;
  var boughtList = [];
  var toBuyList = [
    { name: "cookies", quantity: 5 },
    { name: "chicken", quantity: 1 },
    { name: "pye", quantity: 2 },
    { name: "strawberry", quantity: 100 },
    { name: "eggs", quantity: 10 },
  ];
  service.buyItem = function (index) {
    boughtList.push(toBuyList.splice(index, 1)[0]);
  }
  service.getToBuyList = function () {
    return toBuyList;
  }
  service.getBoughtList = function () {
    return boughtList;
  }
}



})()
