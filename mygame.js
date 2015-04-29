function Badge(selector) {
    this.selector = selector;
    this.change = function (diff) {
        var value = parseInt($(selector).text(), 10);
        $(selector).text(value + diff);
    };
}

function Button(desc, onclick) {
    this.desc = desc;
    this.onclick = onclick;
    this.display = function () {
        $('#place_actions').append(
        $("<button>" + this.desc + "</button>").on('click', this.onclick));
    };
}

function Place(title, desc, actions) {
    this.title = title;
    this.desc = desc;
    this.actions = actions;
    this.display = function () {
        $('#place_title').text(this.title);
        $('#place_desc').text(this.desc);
        $('#place_actions').empty();
        $(this.actions).each(function (index, action) {
            action.display();
        });
    };
}

var Badges = {
    health: new Badge("#health"),
    shields: new Badge("#shields"),
    playerDamage: new Badge("#playerDamage")

};

//Buttons//
var Buttons = {
    //Market Stuff//
    goToMarket: new Button(
        "Go into the Market", function () {
        Places.market.display();
    }),
    goToMarket1: new Button(
        "Ignore him", function () {
        Places.market1.display();
    }),
    goToMarket2: new Button(
        "Steal his wares", function () {
        Places.market2.display();
        Badges.shields.change(+15);
    }),
    goToMarket3: new Button(
        "Attack him", function () {
        Places.market3.display();
        Badges.health.change(-7);
        Badges.playerDamage.change(+3);
        Badges.shields.change(+15);
    }),
    //End of Market Stuff//

    //Farmhouse Stuff//
    goToFarmhouse: new Button(
        "Walk towards the farmground in the distance", function () {
        Places.farmhouse.display();
    }),
    goToFarmhouse1: new Button(
        "Search the farmhouse.", function () {
        Places.farmhouse1.display();
        Badges.health.change(+4);
        Badges.playerDamage.change(+2);
    }),
    goToFarmhouse2: new Button(
        "Burn it all down.", function () {
        Places.farmhouse2.display();
        Badges.health.change(+1);
    }),
    goToFarmhouse3: new Button(
        "Read the diary", function () {
        Places.farmhouse3.display();
    }),
    //End of Farmhouse Stuff//

    //Mage Hill Stuff//
    goToMageHill: new Button(
        "Hike to the ominous tower on the hill", function () {
        Places.mageHill.display();
    })
    //End of Mage Hill Stuff//

    //Dragon Mine Stuff//

    //End of Dragon Mine Stuff//
};

//Places//
var Places = {
    market: new Place(
    //Market Stuff//
    "The Market",
        "You are a traveler in the lands of Swagland. Swagland is a prosperous kingdom. You have a backpack, a small knife, and the clothes on your back. You come across an open market. As you hurry through, a salesman calls to you. What do you do?", [Buttons.goToMarket1, Buttons.goToMarket2, Buttons.goToMarket3]),

    market1: new Place(
        "The Market",
        "He is angered, but you walk quickly past.", [Buttons.goToFarmhouse, Buttons.goToMageHill]),

    market2: new Place(
        "The Market",
        "You steal his swaggiest armor.", [Buttons.goToFarmhouse, Buttons.goToMageHill]),

    market3: new Place(
        "The Market",
        "You tussle with him for a bit before grabbing his dagger and shanking him. Wounded, he does not stop you from taking his swaggiest armor.", [Buttons.goToFarmhouse, Buttons.goToMageHill]),

    //End of Market Stuff//

    //Farmhouse Stuff//
    farmhouse: new Place(
        "The Farmhouse",
        "You come across a large field with a farmhouse and a barn. You trudge up to the front of the house. What do you do?", [Buttons.goToFarmhouse1, Buttons.goToFarmhouse2]),
    farmhouse1: new Place(
        "The Farmhouse",
        "While searching, you find some a toolshop, which you use to sharpen your weapons. When you search around the back of the house, you find three fresh corpses. Revolted and worried, you hurry back into the house. Inside, you find some apples, which you eat. In one of the rooms, you find a diary. Do you read it?", [Buttons.goToFarmhouse3, Buttons.goToFarmhouse4]),
    farmhouse2: new Place(
        "The Farmhouse",
        "You search the barn for something to burn everything down with. You find an apple and a gas lamp. You eat the apple and use the lamp to start the fire.", [Buttons.goToMageHill]),
    farmhouse3: new Place(
        "The Farmhouse",
        "You open the diary to the most recent entry and read: Today was  hard. The damn government taxes meant that even with my full bounty, I barely was able to seel enough to feed my family.", [Buttons.goToMageHill]),
    /*End of Farmhouse Stuff*/

    //Mage Hill Stuff//
    mageHill: new Place("Mystical Tower", "You hike up a small and steep hill reaching, breathing heavily, a looming tower. No entrances are visible except one. You enter it.", [])
    //End of Mage Hill Stuff//

    //Dragon Mine Stuff//

    //End of Dragon Mine Stuff//
};
// Let's start at the market.//
Places.market.display();