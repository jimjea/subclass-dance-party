var lineUp = function(dancers) {
  for (var i = 0; i < dancers.length; i++) {
    dancers[i].setLeft();
  }
};

var disperse = function(dancers){
  for (var i = 0; i < dancers.length; i++) {
    dancers[i].disperse();
  }
};
