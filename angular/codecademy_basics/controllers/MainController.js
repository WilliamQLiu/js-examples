app.controller('MainController', ['$scope', function($scope) {
  $scope.title = 'This scope is ridiculous!';
  $scope.promo = 'Yo check this out';
  $scope.products = [
    {
      name: 'The Book of Trees',
      price: 19,
      pubdate: new Date('2014', '03', '08'),
      cover: 'img/the-book-of-trees.jpg',
      likes: 0,
      dislikes: 0
    },
    {
      name: 'Program or be Programmed',
      price: 8,
      pubdate: new Date('2013', '08', '01'),
      cover: 'img/program-or-be-programmed.jpg',
      likes: 0,
      dislikes: 0
    },
    {
      name: 'The Illiad',
      price: 10,
      pubdate: new Date('1600', '09', '01'),
      likes: 0,
      dislikes: 0
    },
    {
      name: 'Another Book',
      price: 5,
      pubdate: new Date('1894', '02', '23'),
      likes: 0,
      dislikes: 0
    }
  ];

  $scope.plusOne = function(index) {
      $scope.products[index].likes += 1;
  };

  $scope.minusOne = function(index) {
      $scope.products[index].dislikes += 1;
  };

  }]);