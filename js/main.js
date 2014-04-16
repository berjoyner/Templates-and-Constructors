// $(document).ready(function() {

//Template Object #1

var animalTemplate = function(animalData) {
	var markup="";
	var i;

	for (i=0; i<animalData.length; i++) {
		markup += "<h1>" + animalData[i].parent + "</h1><h6>" + animalData[i].child + "</h6>";
		// console.log(markup);
	}

	return markup;
};

var babyAnimals = [

{
	parent: "dog",
	child: "puppy",
},
{
	parent: "cat",
	child: "kitten",
},
{
	parent: "kangaroo",
	child:  "joey",
},
{
	parent: "cow",
	child: "calf",
},
{
	parent: "deer",
	child: "fawn",
},
{
	parent: "bear",
	child: "cub",
}

];

var soManyAnimals = animalTemplate(babyAnimals);

$(".animals").append(soManyAnimals);


//Template Object #2

var bookTemplate = function(bookData) {
	var markup="";
	var i;

	for (i=0; i<bookData.length; i++) {
		markup += "<h5>" + bookData[i].book + "</h5><h6>" + bookData[i].author + "</h6><p>" + bookData[i].publisher + "</p>";
		// console.log(markup);
	}

	return markup;
};

var bookInfo = [

{
	book: "Harry Potter Series",
	author: "J.K. Rowling",
	publisher:"Scholastic",
},
{
	book: "Raptor Red",
	author: "Robert T. Bakker",
	publisher:"Bantam",
},
{
	book: "Prey",
	author: "Michael Crichton",
	publisher:"Harper Paperbacks",
},
{
	book: "iWoz",
	author: "Steve Wozniak",
	publisher:" W. W. Norton & Company",
},
{
	book: "Ghost in the Wires: My Adventures as the World's Most Wanted Hacker",
	author: "Kevin Mitnick ",
	publisher:"Back Bay Books",
},

];

var soManyBooks = bookTemplate(bookInfo);
$(".books").append(soManyBooks);



//Constructor #1

function Cake(flavor, icing, layers, color, candles) {
	this.flavor = flavor;
	this.icing = icing;
	this.layers = layers;
	this.color = color;
	this.candles = candles;
	this.birthday = function() {
		this.candles = true;
	}
}

var wedding = new Cake ("Strawberry","Buttercream", 4, "White", false);
var yummy = new Cake ("Vanilla","Whipped", 2, "Yellow", true);
var hungry = new Cake ("Redvelvet","Creamcheese", 1, "Blue", true);


// var cakeMaker = 
// changeFlavor: function(newFlavor) {
// 	this.flavor = newFlavor;
// 	return this.flavor;
// 	console.log(markup);


//Constructor #2

function Boardgame(players, type, time, expansion ) {
	this.players = players;
	this.type = type;
	this.time = time;
	this.expansion = expansion;
	this.twicethefun = function() {
		this.expansion = true;
	}
}

var settlers = new Boardgame (4,"Strategy", 45, true);
var eldersign = new Boardgame (8,"Cooperative", 60, true);
var cardshumanity = new Boardgame (6,"Party", 30, true);
var evolution = new Boardgame (4,"Team", 45, false);

