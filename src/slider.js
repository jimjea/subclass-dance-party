var Slider = function(top, left, timeBetweenSteps) {
  makeDancer.apply(this, arguments);
  this.$node.addClass("slider").append("<img src='http://ionetheurbandaily.files.wordpress.com/2012/11/michael-jackson-moonwalk.gif'></img>");
};

Slider.prototype = Object.create(makeDancer.prototype);
Slider.prototype.constructor = Slider;
Slider.prototype.oldStep = makeDancer.prototype.step;
Slider.prototype.step = function() {
  this.oldStep();
  var horzposition = $("body").width() * Math.random();
  var vertposition = $("body").width() * Math.random();

  var borderStyle = {
    'top' : vertposition + 'px',
    'left' : horzposition + 'px'
  };

  this.$node.animate(borderStyle, "8000");
  this.$node.addClass("moving-dancer")
};
