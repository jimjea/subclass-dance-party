var Druggie = function(top, left, timeBetweenSteps) {
  makeDancer.apply(this, arguments);
};

Druggie.prototype = Object.create(makeDancer.prototype);
Druggie.prototype.constructor = Druggie;
Druggie.prototype.oldStep = makeDancer.prototype.step;
Druggie.prototype.step = function() {
  this.oldStep()
  this.$node.toggle();
}
