function Game(version) {
   this.version = version
}

Game.prototype.getVersion = function() {
  console.log(this.version);
}

Game.prototype.click = function() {
  throw "Not implemeneted";
} 

Game.prototype.draw = function() {
  throw "Not implemented";
}

Game.prototype.reset = function () {
  throw "Not implemeneted";
}




function MemoryPuzzle(version, entries) {
    this.prev;
    this.timeoutHandler;
    this.entries = entries.concat(entries);
    Game.call(this, version);
}


MemoryPuzzle.prototype = Object.create(Game.prototype);

MemoryPuzzle.prototype.shuffle = function () {
    var entries = this.entries,
        length = entries.length,
        temp, 
        index;
    while (length) {
      index = Math.floor(Math.random() * length--);
      temp = entries[length];
      entries[length] = entries[index];
      entries[index] = temp;
    }
}

MemoryPuzzle.prototype.draw = function () {
  var wrapper = document.createElement('div');
  wrapper.className = 'memoryPuzzle';
  for(var i = 0 ; i < this.entries.length; i++) {
    var tile = _Tile.call(this,this.entries[i]);
    wrapper.appendChild(tile);
  }
  return wrapper;
  
  
  function _Tile(value) {
    var tileElement = document.createElement('div'),
          front = document.createElement('div'),
          back = document.createElement('div'),
          textElement = document.createElement('span'),
          textValue = document.createTextNode(value);
          
    tileElement.className = 'tile outline';
    tileElement.addEventListener('click',this.click.bind(this, tileElement, value));
    
    front.className = 'front';
    back.className = 'back';
    
    tileElement.appendChild(front);
    
    textElement.className = 'tile-value';
    textElement.appendChild(textValue);
    back.appendChild(textElement);
    tileElement.appendChild(back);
    return tileElement;
  }
}

MemoryPuzzle.prototype.click = function(element, value) {
  if(!this.timeoutHandler){
    element.classList.toggle('flipped');
    if(this.prev == undefined) {
        this.prev = {
          ele : element,
          value : value
        };
    } 
    else {
        if(this.prev.value == value && this.prev.ele != element) {
          console.log("Match found");
          this.prev = undefined;
        }
        else {
          var self = this;
          this.timeoutHandler = setTimeout(function() {
            self.prev.ele.classList.toggle('flipped');
            element.classList.toggle('flipped');
            self.prev = undefined;
            clearTimeout(self.timeoutHandler);
            self.timeoutHandler = undefined;
          },900);
        }
    }
  }
}
MemoryPuzzle.prototype.reset = function() {
  this.shuffle();
}



var gamePad = document.getElementById('game');
gamePad.className = 'game';

var data = ["A", "B", "C" , "D", "E", "F", "G", "H", "I"];
var memoryPuzzle = new MemoryPuzzle(1.0, data);
memoryPuzzle.shuffle();
gamePad.appendChild(memoryPuzzle.draw());

var resetBtn = document.getElementById('reset');
resetBtn.addEventListener('click', function(){
  console.log("Resetting");
  gamePad.innerHTML="";
  memoryPuzzle.reset();
  gamePad.appendChild(memoryPuzzle.draw());

});





