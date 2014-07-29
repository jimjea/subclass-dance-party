var makeDancer = function(top, left, timeBetweenSteps){
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer"></span>');
  this.step();
  this.setPosition(top, left);

};

makeDancer.prototype.step = function(){
  // debugger;
  var context = this;
  setTimeout(this.step.bind(context), this.timeBetweenSteps);
};

makeDancer.prototype.setPosition = function(top, left){
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    //
  console.log("I am running")
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

makeDancer.prototype.setLeft = function(){
  this.$node.addClass("lineup");
};

makeDancer.prototype.disperse = function(){
  this.$node.removeClass("lineup");
};


