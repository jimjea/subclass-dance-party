function hoverFn(){
  $(".dancer").mouseover(function(){
    // $(this).text("what is Up");
    console.log("hello world")
  })
};

// function squareDistance(node1, node2) {
//   var position1 = node1.position();
//   var position2 = node2.position();
//   var horDist = position1.left - position2.left;
//   var vertDist = position1.top - position2.top;
//   var relativeDistance = Math.pow(horDist, 2) + Math.pow(vertDist, 2);
//   return relativeDistance;
// };

// function closestNeighbour(array, targetNode) {
//   var base = targetNode.$node;
//   var currentShortestDistance;
//   var closestNeighbour =[];
//   for (var i = 0; i < array.length; i++) {
//     var comparisonNode = array[i].$node;
//     if (i === 0){
//       currentShortestDistance = squareDistance(base, comparisonNode);
//     };
//     var newDist = squareDistance(base, comparisonNode);
//     if (newDist <= currentShortestDistance){
//       currentShortestDistance = newDist
//       closestNeighbour = [currentShortestDistance, array[i]];
//     };
//   }
//   return closestNeighbour;
// };


$(document).ready(function(){
  window.dancers = [];
  //blinky dancer
  //
  //
  //
  $(".addDancerButton").on("click", function(event){

    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    $(".dancer").mouseover(function(){
    // $(this).text("what is Up");
      // dancer.spazOut();
      console.log($(this).position());
    });
    window.dancers.push(dancer);

  });





  $(".addDancerButton").on("click", function(event){

    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    $(".dancer").mouseover(function(){
    // $(this).text("what is Up");
      // dancer.spazOut();
      console.log($(this).position());
    });
    window.dancers.push(dancer);

  });

  $(".slider").on("click", function(event){

    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);

    window.dancers.push(dancer);
  });

  $(".druggie").on("click", function(event){

    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);


    window.dancers.push(dancer);
  });

  $(".lineUp").on("click", function(event){
    console.log("line 96");
    if ($(this).text() === "Line Up") {
      console.log("line 97");
      lineUp(window.dancers);
      $(this).text("Go Play");
    } else {
      disperse(window.dancers);
      $(this).text("Line Up");
    }
  });



});

