var dog, happyDog, foodS, foodStock;

var database;
var fedTime, lastFed;
var foodObj;
var gameState
var changeState, readState;
var bedroom, garden, washroom;

function preload()
{
  dog = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");
  bedroom = loadImage("images/bedRoom.png");
  washroom = loadImage("images/washRoom.png");
  garden = loadImage("images/Garden.png");
}

function setup() {
  createCanvas(500,500);
  dog = createSprite(250,250);

  database = firebase.database();
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
  
  food = new Food();
  feed = createButton("Feed the dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);

  addFood = createButton("Add Food");
  addFood.position(800,95);
  addFood.mousePressed(addFoods);

  readState=database.ref('gameState');
  readState.on("value",function(data){
    gameState=data.val();
  })
}


function draw() {  
background(46,139,87);

fedTime = database.ref('FedTime');
fedTime.on("value",function(data){
  lastFed=data.val();
}) ;

function readStock(data)
{
  foodS=data.val();
}

function writeStock(x)
{
  database.ref('/').update({
    Food: x
  })
}

}
function feedDog(){
  dog.addImage(happyDog);

  foodObj.updateFoodStock(foodObj.getFoodStock()-1);
  database.ref('/').update({
    Food:foodObj.getFoodStock(),
    FeedTime: hour()
  })
}

function addFoods()
{
  foodS++;
  database.ref('/').update({
    Food:foodS
  })
}
