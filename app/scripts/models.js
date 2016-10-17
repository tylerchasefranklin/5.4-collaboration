var $ =  require('jquery');


function Character(config){
  config = config || {};
  $.extend(this, config);
  this.hp = 100;
  this.attackDamage = 20;

}


function GoodGuy(config){
this.color = 'green';

Character.call(this, config);
}

GoodGuy.prototype = new Character();

function BadGuy(config){
this.color = 'red';
Character.call(this, config);
}

BadGuy.prototype = new Character();




module.exports = {
  'GoodGuy': GoodGuy,
  'BadGuy': BadGuy
};
