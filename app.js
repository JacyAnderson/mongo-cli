// app.js

var mongo = require("mongodb").MongoClient;
var prompt = require("prompt-sync")();
var url = "mongodb://localhost:27017/restaurant_db";

mongo.connect(url, function(err, db){
  var collection = db.collection('restaurants');
  // var allChoice = prompt("Type 'all' and press enter to display all restaurants' names: ");
  
  // SEARCH RESTAURANT
  // var searchRestaurant = prompt("Search restaurant database for restaurant name:");
  //   collection.find({name: searchRestaurant}).forEach( function(doc){
  //      console.log(doc);
  //   });

  // ADD RESTAURANT
  // var addRestName = prompt("Enter what restaurant you would like to add:");
  // var addRestStreet = prompt("Enter restaurant street:");
  // var addRestZip = prompt("Enter restaurant zipcode:");
  // var addRestYelp = prompt("Enter yelp url:");
  // collection.insert({
  // 	name: addRestName,
  //   address: {
  //   	street: addRestStreet,
  //   	zipcode: addRestZip,
  //   },
  //   yelp: addRestYelp
  // });

  // EDIT RESTAURANT
  // var editRestaurant = prompt("Enter the name of the restaurant you would like to edit:");
  // var editRestaurantName = prompt("Enter name would you like to change it to?:");
  // var editRestStreet = prompt("Enter updated restaurant street:");
  // var editRestZip = prompt("Enter updated restaurant zipcode:");
  // var editRestYelp = prompt("Enter updated yelp url:");
  //   collection.update(
  //   	{ name: editRestaurant },
  //   	{
  //   	  name: editRestaurantName,
  //   	  address: {
  //   	  	street: editRestStreet,
  //   	  	zipcode: editRestZip,
  //   	  },
  //   	  yelp: editRestZip
  //   	}
  //   );
  //   console.log(editRestaurant);

  // DELETE RESTAURANT
  var deleteRestaurant = prompt('Enter the restaurant you would you like to remove:');
    collection.remove(
      {name: deleteRestaurant},
      {
      	justOne: true
      }
    	);
});

