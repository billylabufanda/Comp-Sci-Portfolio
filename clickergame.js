/**
* Created with Expeditions Website 2015.
* User: billylabufanda
* Date: 2015-04-27
* Time: 06:06 PM
* To change this template use Tools | Templates.
*/

var upgrade1 = false;
var upgrade2 = false;
var upgrade3 = false;
var key = false;
var money = 0;

function Resource(sellValue, chance, quantity, cookieName) {
    this.sellValue = sellValue;
    this.chance = chance;
    this.quantity = quantity;
    this.cookieName = cookieName;
    this.click = function(){
      if (Math.random() <= this.chance){
          this.quantity += 1;
      }
    };
    this.cookieMaker=function(){
    setCookie(cookieName, this.quantity, 1000);
  };
    this.findCookie = function(){
    return parseInt(getCookie(this.cookieName));
  };
}
var iron = new Resource(2,0.85,0,"iron");
var copper = new Resource(5,0.6,0,"copper");
var nickel = new Resource(8,0.4,0,"nickel");
var gold = new Resource(15,0.2,0,"gold");
var ruby = new Resource(40,0.04,0,"ruby");
var diamond = new Resource(60,0.02,0,"diamond");
var ironIngot = new Resource(4,0,0,"ironIngot");
var copperIngot = new Resource(10,0,0,"copperIngot");
var nickelIngot = new Resource(16,0,0,"nickelIngot");
var goldIngot = new Resource(30,0,0,"goldIngot");
var oil = new Resource(0,0,0,"oil");

cookieStartUp();

//The iron and gold stuff//
update();
//rock swag//
var rock= document.getElementById("rock");
rock.addEventListener("click", rockClick);
function rockClick() {
  iron.click();
  copper.click();
  nickel.click();
  gold.click();
  ruby.click();
  diamond.click();
  update();
}
//end rock swag :c//
//end of iron and gold//

//sell indiviudal items//
var itemToSell = document.getElementById("sellinddropdown");
var sellindamount = document.getElementById("sellindamount");
function sellindivid(){
  update();
}
function checkItemToSell(){
  itemToSell = sellinddropdown.value;
  if(itemToSell === "iron"){
    itemToSell = iron;
  }
  if(itemToSell === "ironIngot"){
    itemToSell = ironIngot;
  }
  if (itemToSell === "copper"){
    itemToSell = copper;
  }
    if (itemToSell === "nickel"){
    itemToSell = nickel;
  }
    if (itemToSell === "gold"){
    itemToSell = gold;
  }
  if (itemToSell === "ruby"){
    itemToSell = ruby;
  }
  if (itemToSell === "diamond"){
    itemToSell = diamond;
  }
  if (itemToSell === "copperIngot"){
    itemToSell = copperIngot;
  }
    if (itemToSell === "nickelIngot"){
    itemToSell = nickelIngot;
  }
    if (itemToSell === "goldIngot"){
    itemToSell = goldIngot;
  }
  update();
}
var sellindbutton = document.getElementById("sellindbutton");

sellindbutton.addEventListener("click", sellindividual);
function sellindividual(){
  itemToSell.quantity-= parseInt(sellindamount.value);
  money+=itemToSell.sellValue*parseInt(sellindamount.value);
  update();
}

//sell all button//

document.getElementById("moneyDisplay").innerHTML = "Money: "+money;

var sellAll= document.getElementById("sellall");
sellall.addEventListener("click", cashOut,false);
function cashOut(){
  var ironValue=iron.quantity*iron.sellValue;
  var copperValue=copper.quantity*iron.sellValue;
  var nickelValue=nickel.quantity*iron.sellValue;
  var goldValue=gold.quantity*gold.sellValue;
  var diamondValue=diamond.quantity*diamond.sellValue;
  var rubyValue=ruby.quantity*ruby.sellValue;
  var ironIngotValue=iron.quantity*iron.sellValue;
  var copperIngotValue=copper.quantity*iron.sellValue;
  var nickelIngotValue=nickel.quantity*iron.sellValue;
  var goldIngotValue=gold.quantity*gold.sellValue; worth=ironValue+copperValue+nickelValue+goldValue+diamondValue+rubyValue+ironIngot+copperIngot+nickelIngot+goldIngot;
  
  money+=worth;
  iron.quantity=0;
  copper.quantity=0;
  nickel.quantity=0;
  gold.quantity=0;
  diamond.quantity=0;
  ruby.quantity=0;
  ironIngot.quantity=0;
  copperIngot.quantity=0;
  nickelIngot.quantity=0;
  goldIngot.quantity=0;
  update();
}
function update(){
  
document.getElementById("moneyDisplay").innerHTML = "Money: "+money;
document.getElementById("ironCount").innerHTML = "Iron: "+iron.quantity;
document.getElementById("ironIngotCount").innerHTML = "Iron Ingots: "+ironIngot.quantity;
document.getElementById("copperCount").innerHTML = "Copper: "+copper.quantity;
document.getElementById("copperIngotCount").innerHTML = "Copper Ingots: "+copperIngot.quantity;
document.getElementById("nickelCount").innerHTML = "Nickel: "+nickel.quantity;
document.getElementById("nickelIngotCount").innerHTML = "Nickel Ingots: "+nickelIngot.quantity;
document.getElementById("goldCount").innerHTML = "Gold: "+gold.quantity;
document.getElementById("goldIngotCount").innerHTML = "Gold Ingots: "+goldIngot.quantity;
document.getElementById("diamondCount").innerHTML = "Diamond: "+diamond.quantity;
document.getElementById("rubyCount").innerHTML = "Ruby: "+ruby.quantity;
document.getElementById("oilCount").innerHTML = "Oil: "+oil.quantity;
var sellinddropdown = document.getElementById("sellinddropdown");
var sellindamount = document.getElementById("sellindamount");
//This doesnt work because it isnt refering to the image. It is refering to the lack of money text. Duh//
  if (upgrade1 === true){
    document.getElementById("upgrade1").style.display="none";
  }
  if (upgrade2 === true){
    document.getElementById("upgrade2").style.display="none";
  }
  if (upgrade3 === true){
    document.getElementById("upgrade3").style.display="none";
  }
  if (key === true){
    document.getElementById("keyhtml").style.display="none";
  }
  
  iron.cookieMaker();
  copper.cookieMaker();
  nickel.cookieMaker();
  gold.cookieMaker();
  ruby.cookieMaker();
  diamond.cookieMaker();
  ironIngot.cookieMaker();
  copperIngot.cookieMaker();
  nickelIngot.cookieMaker();
  goldIngot.cookieMaker();
  oil.cookieMaker();
  setCookie("money",money,1000);
  setCookie("upgrade1",upgrade1,1000);
  setCookie("upgrade2",upgrade2,1000);
  setCookie("upgrade3",upgrade3,1000);
}

//end sell all//

//upgrade1//


var upgrade= document.getElementById("upgrade1img");
upgrade.addEventListener("click", upgrade1Got,false);


function upgrade1Got(){
  
      if (money >= 1500 && upgrade1 === false){
          money-=1500;
          nickel.chance+=0.07;
          gold.chance+=0.05;
          ruby.chance+=0.03;
          diamond.chance+=0.02;
          update();
          upgrade1 = true;
          console.log(upgrade1);
      }
      else if(money <= 1000 && upgrade1 === false){
           document.getElementById("lackOfMoney").style.display="block";
           setTimeout(function()         {document.getElementById("lackOfMoney").style.display="none";},3000);
      }
  update();

}


//end upgrade1//

//upgrade 2//

document.getElementById("upgrade2img");
upgrade2img.addEventListener("click", upgrade2Got);

function upgrade2Got(){
  console.log("fish");
    //when you have money//
    if(money >= 1500 && upgrade2 ===   false){
    money-=1500;
    upgrade2 = true;
    update();
    }
  //you dont have enough money thing//
    else if(money <= 500 && upgrade2 === false){
           document.getElementById("lackOfMoney").style.display="block";
           setTimeout(function()         {document.getElementById("lackOfMoney").style.display="none";},3000);
      }
  if(upgrade2 === true){
      rockClick();
     setTimeout(function()   {window.requestAnimationFrame(upgrade2Got);},500);
    }
}

//end upgrade 2//


//Oil//
document.getElementById("upgrade3img");
upgrade3img.addEventListener("click", upgrade3Got);

function upgrade3Got (){
    if(money >= 200 && upgrade3 === false){
      money-=200;
      upgrade3 = true;
      update();
    }
    else if(money <= 200 && upgrade3 === false){
      document.getElementById("lackOfMoney").style.display="block";
      setTimeout(function(){
        document.getElementById("lackOfMoney").style.display="none";},3000);
    }
    if(upgrade3 === true){
      oil.quantity += 1;
      setTimeout(function(){
        window.requestAnimationFrame(upgrade3Got); update();
      },2000);
    }
}
//End Oil//

//Furnace//
var furnace = {
  item:"none",
  quantity:0,
  delay:0,
  waitTime:0,
  smeltingbar: document.getElementById("furnacesmeltingbar")
};

var furnDrop = document.getElementById("furnacedropdown");
//Item to smelt is equal to the value of the drop down bar
var itemToSmelt = furnDrop.value;
//The Button to Activate the smelter//
var smeltingbutton = document.getElementById("smeltingbutton");
//
furnDrop.addEventListener("change",  checkItemToSmelt);
function checkItemToSmelt(){
  itemToSmelt = furnDrop.value;
  if(itemToSmelt === "iron"){
    itemToSmelt = iron;
  }
  if (itemToSmelt === "copper"){
    itemToSmelt = copper;
  }
    if (itemToSmelt === "nickel"){
    itemToSmelt = nickel;
  }
    if (itemToSmelt === "gold"){
    itemToSmelt = gold;
  }
}
var howMuchToSmelt;
function smelt(){
  howMuchToSmelt = parseInt(document.getElementById("furncountselect").value);
}

//The smelting button and its function//
smeltingbutton.addEventListener("click", smelting);
function smelting(){
  if(furnace.quantity!==0)return;
  if (howMuchToSmelt <=itemToSmelt.quantity){
  itemToSmelt.quantity -= howMuchToSmelt;
    switch(itemToSmelt){
      case iron:
        furnace.item="iron";
        furnace.quantity+=howMuchToSmelt;
        furnace.delay=45;
        furnace.waitTime=furnace.delay;
        //ironIngot.quantity += howMuchToSmelt;
        break;
      case copper:
        furnace.item="copper";
        furnace.quantity+=howMuchToSmelt;
        furnace.delay=60;
        furnace.waitTime=furnace.delay;
        //copperIngot.quantity += howMuchToSmelt;
        break;
      case nickel:
        furnace.item="nickel";
        furnace.quantity+=howMuchToSmelt;
        furnace.delay=75;
        furnace.waitTime=furnace.delay;
        //nickelIngot.quantity += howMuchToSmelt;
        break;
      case gold:
        furnace.item="gold";
        furnace.quantity+=howMuchToSmelt;
        furnace.delay=90;
        furnace.waitTime=furnace.delay;
        //goldIngot.quantity += howMuchToSmelt;
        break;
    }
   update();
}
  else{
    document.getElementById("lackOfMoney").style.display="block";
           setTimeout(function()         {document.getElementById("lackOfMoney").style.display="none";},3000);
  }
  }
//Key stuff//
var keyupgrade= document.getElementById("keyimg");
keyupgrade.addEventListener("click", keyGot,false);


function keyGot(){
  
      if (ironIngot.quantity >= 50 && copperIngot.quantity >= 50 && nickelIngot.quantity >= 50 &&goldIngot.quantity >= 50 &&key === false){
          ironIngot.quantity-=50;
          copperIngot.quantity-=50;
          nickelIngot.quantity-=50;
          goldIngot.quantity-=50;
          update();
          key = true;
      }
      else if(ironIngot.quantity < 50 || copperIngot.quantity < 50 || nickelIngot.quantity < 50 || goldIngot.quantity < 50 || key === false){
           document.getElementById("lackOfMoney").style.display="block";
           setTimeout(function()         {document.getElementById("lackOfMoney").style.display="none";},3000);
      }
  update();

}
//makes furnace have progress bar
function frame(){
  if(furnace.quantity>0){
  if(furnace.waitTime<=0){
    furnace.quantity--;
    switch(furnace.item){
      case "iron":
        ironIngot.quantity++;
        furnace.smeltingbar.style.width=0;
        update();
        break;
      case "copper":
        copperIngot.quantity++;
        furnace.smeltingbar.style.width=0;
        update();
        break;
      case "nickel":
        nickelIngot.quantity++;
        furnace.smeltingbar.style.width=0;
        update();
        break;
      case "gold":
        goldIngot.quantity++;
        furnace.smeltingbar.style.width=0;
        update();
        break;
    }
    furnace.waitTime=furnace.delay;
  }else{
    furnace.waitTime--;
    furnace.smeltingbar.style.width=100-(furnace.waitTime/furnace.delay)*100+"px";
  }
  }
  window.requestAnimationFrame(frame);
}
window.requestAnimationFrame(frame);



//page 2//

function changeImage(){
  if(key===true){
  document.getElementById("page1Visual").style.display = "none";
  document.getElementById("page2visual").style.display = "inline";
  }
  else{
    document.getElementById("lackOfMoney").style.display="block";
           setTimeout(function()         {document.getElementById("lackOfMoney").style.display="none";},3000);
  }
}

//What happens if you click on the mine//
var mineSpans = document.querySelectorAll("span.theMines");

for(var i = 0; i < mineSpans.length; i++){
  mineSpans[i].addEventListener("click", goToMines, false);
}
function goToMines(){
document.getElementById("page1Visual").style.display = "inline";
  document.getElementById("page2visual").style.display = "none";
}

//What happens if you click on the Trade outpost//
var tradeSpans = document.querySelectorAll("span.tradingPost");

for(var i = 0; i < tradeSpans.length; i++){
  tradeSpans[i].addEventListener("click", goToTradingPost, false);
}
function goToTradingPost(){
  
    document.getElementById("page2visual").style.display = "none";
    document.getElementById("pageTradeVisual").style.display = "inline";
 
}


//What happens if you click on the rocket//
var rocketSpans = document.querySelectorAll("span.rocket");

for(var i = 0; i < rocketSpans.length; i++){
  rocketSpans[i].addEventListener("click", goToRocket, false);
}

function goToRocket(){
alert("Blast off");
  
}
//page trading post//

var betSpans = document.querySelectorAll("span.betCSGO");

for(var i = 0; i < betSpans.length; i++){
  betSpans[i].addEventListener("click", loseMoney, false);
}
  function loseMoney(){
    if(Math.random()<0.5){
      money+=5;
    }
    else{
      money-=10;
    }
    update();
  }
document.getElementById("moneyDisplayTrade").innerHTML = "Money: "+money;

//BACK BUTTON//
var goBackSpans = document.querySelectorAll("span.goBack");

for(var i = 0; i < goBackSpans.length; i++){
  goBackSpans[i].addEventListener("click", goBack, false);
}
function goBack(){
  document.getElementById("pageTradeVisual").style.display = "none";
  document.getElementById("page2visual").style.display = "inline";
}
//end trading post//

//end page 2//


//function to set a Cookie
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}
//function to retrieve a Cookie
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
    }
    return "";
}

//runs cookies at startup
function cookieStartUp(){
    iron.quantity = iron.findCookie();
    copper.quantity = copper.findCookie();
    nickel.quantity = nickel.findCookie();
    gold.quantity = gold.findCookie();
    ruby.quantity = ruby.findCookie();
    diamond.quantity = diamond.findCookie();
    oil.quantity = oil.findCookie();
    ironIngot.quantity = ironIngot.findCookie();
    copperIngot.quantity = copperIngot.findCookie();
    nickelIngot.quantity = nickelIngot.findCookie();
    goldIngot.quantity = goldIngot.findCookie();
    money = parseInt(getCookie("money"));
    if(getCookie("upgrade1")=="true")upgrade1=true;
  else upgrade1=false;
    if(getCookie("upgrade2")=="true")upgrade2=true;
  else upgrade2=false;
  if(getCookie("upgrade3")=="true")upgrade3=true;
  else upgrade3=false;

}
document.getElementById("resetbutton").addEventListener("click",resetresources);
//Reset Button
function resetresources(){
  iron.quantity = 0;
    copper.quantity = 0;
    nickel.quantity = 0;
    gold.quantity = 0;
    ruby.quantity = 0;
    diamond.quantity = 0;
    oil.quantity = 0;
    ironIngot.quantity = 0;
    copperIngot.quantity = 0;
    nickelIngot.quantity = 0;
    goldIngot.quantity = 0;
    money=0;
    upgrade1 = false;
    upgrade2 = false;
    upgrade3 = false;
  alert(document.cookie);
    update();
}







