angular.module('app', ['ngMaterial'])

.config(($mdThemingProvider, $mdIconProvider) => {
  $mdThemingProvider
    .theme('default')
    .primaryPalette('brown')
    .accentPalette('red');
})

.controller('controller', function ($scope) {
  this.MODES = {
    ADD: 1,
    DISPLAY: 2
  };

  this.mode = this.MODES.DISPLAY;

  this.entries = [];
  this.entry = new Entry();

  this.items = [
    { value: '1', display: 'Apple', price: 1 },
    { value: '2', display: 'Orange', price: 2 },
    { value: '3', display: 'Chicken', price: 3 },
  ];

  this.total = () => {
    return this.entries.reduce((memo, me) => memo + me.subTotal(), 0);
  };

  this.addEntry = () => {
    this.entries.push(this.entry);
    this.entry = new Entry();
    this.showEntries();
  };

  this.showAddForm = (e) => {
    this.mode = this.MODES.ADD;
  };

  this.cancel = () => {
    this.showEntries();
    this.entry = new Entry();
  };

  this.showEntries = () => {
    this.mode = this.MODES.DISPLAY;
  };

  this.isDisplay = () => {
    return this.mode === this.MODES.DISPLAY;
  };

  this.isAdd = () => {
    return this.mode === this.MODES.ADD;
  };

  function Entry() {
    this.item = null;
    this.count = 0;

    this.subTotal = () => {
      return this.item.price * this.count;
    };
  }
})

.directive('qmAnimate', () => {
  return {
    link($scope, $element) {
      $element.on('click', () => {
        
      });
    }
  };
})
