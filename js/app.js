(function() {

  var Cats = [
    {
      clickCount: 0,
      name: 'Fluffy',
      image: 'img/22252709_010df3379e_z.jpg',
      nicknames: ['Kit']
    },
    {
      clickCount: 0,
      name: 'Sassy',
      image: 'img/1413379559_412a540d29_z.jpg',
      nicknames: ['Sassperila']
    },
    {
      clickCount: 0,
      name: 'Cleopatra',
      image: 'img/4154543904_6e2428c421_z.jpg',
      nicknames: ['Cleo']
    },
    {
      clickCount: 0,
      name: 'Oreo',
      image: 'img/9648464288_2516b35537_z.jpg',
      nicknames: ['baby']
    },
    {
      clickCount: 0,
      name: 'Whiskers',
      image: 'img/434164568_fea0ad4013_z.jpg',
      nicknames: ['Whiskeras']
    }
  ];

  var Cat = function (data) {
    this.clickCount = ko.observable(data.clickCount);
    this.name = ko.observable(data.name);
    this.image = ko.observable(data.image);
    this.nicknames = ko.observableArray(data.nicknames);

    this.title = ko.computed(function () {
      var clicks = this.clickCount();

      if      (clicks < 10)   return 'Newborn';
      else if (clicks < 50)   return 'Infant';
      else if (clicks < 100)  return 'Child';
      else if (clicks < 200)  return 'Teen';
      else if (clicks < 500)  return 'Adult';
      else                    return 'Ninja';

      }, this);
  };

  var ViewModel = function () {
    var self = this;

    this.cats = ko.observableArray([]);
    Cats.forEach(function (catItem) {
      self.cats.push(new Cat(catItem));
    });

    this.selectCat = function (cat) {
      self.currentCat(cat);
    };

    this.currentCat = ko.observable(this.cats()[0]);

    this.incrementCounter = function () {
      this.clickCount(this.clickCount() + 1);
    }
  };

  ko.applyBindings(new ViewModel());
}());