var where = ["UK", "France", "Spain", "US", "Philippines", "Turkey", "South Africa"];
var who= ["sister", "mom", "dad","family", "friends"];

var randomwhere = Math.floor (Math.random()* where.length);
var randomwho = Math.floor (Math.random() * who.length);

function travelplan(where,who) {
  console.log("I am going to travel to" + " "+ where[randomwhere] + " "+ "with"+ " "+ "my"+ " "+ who[randomwho] );
}

travelplan(where, who);
