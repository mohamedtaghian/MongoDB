// 1
 use lab1;
// 2
show dbs;
// 3
db.createCollection("people")
// 4
db.people.insertOne({name:"Mohamed", age:25})
// 5
// DONE ON GUI
// 6
db.people.insertMany([{name:"sabry", age:50},{name:"sayed", age:30},{name:"ali", age:20}]);
// 7
show collections;
// 8
db.people.find();
// 9
db.people.find({country: "France"});
// 10
db.people.find({country: "France",age:{$gt: 40}}).count();
// 11
db.people.updateMany(
  { salary: { $exists: false } },   
  { $set: { salary: 2500 } }        
)
// 12
db.people.updateMany({ company: "Oodoo" },{ $inc: { salary: 1200 } });
// 13
db.people.find().sort({salary:-1}).limit(3);
// 14
db.people.find({country: "Brazil"}).sort({age:-1}).limit(1);
// 15
db.people.find().sort({salary:-1});
// 16
db.people.find({},{ country: 1, address: 1} ).limit(30);
// 17
db.people.find({country: "China", age: {$gt:16, $lt: 35}});
// 18
db.people.find({},{ country: 1, address: 1, _id:0} );
// 19
db.people.find({
  $and: [
    { fruits: { $elemMatch: { $eq: "apple" } } },
    { fruits: { $elemMatch: { $eq: "kiwi" } } }
  ]
});
db.people.find({
  fruits: { $all: ["apple", "kiwi"] }
});
// 20
db.people.find({fruits: {$nin: ["banana","apricot"]}});
// 21
db.people.find({country: {$in: ["China","France","Tanzania","Poland"]}});
// 22
db.people.find({country: {$nin: ["Russia","Indonesia"]}});
// 23
db.people.find({
  $or: [{country: "Russia",age: 32},
    {country: "Germany",age: 51}
    ]
});
// 24 
db.people.find({"address.city": {$exists:true}},{"address.city": 1}).sort({"address.city": 1});
// 25 
db.people.find({"address.city": "Auch"},{first_name: 1,last_name:1,job:1});
// 26
db.people.find({job: "Graphic Designer"}).sort({salary: -1}).limit(1);
// 27
db.people.findOne({first_name: "Rosalia",last_name: "Frostdicke" });
// 28
db.people.find({fruits: {$size: 4}});
// 29
db.people.updateOne({first_name: "Grannie",last_name:"Glader", company: "Jayo"}
  ,{$set: {email: "gglader@jayo.edu"}});
// 30
db.people.updateOne({first_name: "Agnola",last_name:"Janaud"},{
  $set: {"fruits.2": "apple"}
});
// 31
db.people.updateMany({country: "Vietnam"},{$inc: {age:-5}});
// 32
db.people.updateMany({},{$set: {spec:{CPU: "intet", RAM: "16", GPU: "4050", DISK: "1TB"}}});
// 33
db.people.updateMany({company: "Zava", country: "Indonesia"},{$set: {company: null}});
// 34
db.people.replaceOne({email: "sbucke6@mozilla.com"},{name:"removed", desc: "with any object at least containing 2 fields"});
// 35
db.people.updateMany({company: "Skajo"},{$mul: {salary:0.9}});
// 36
db.people.updateOne({"address.city": "Yauca"}, {$set: {"address.city": "Berlin"}});
// 37
db.people.updateOne({first_name: "Murray",last_name: "Jannings"}, {$push : {fruits:"Kiwi"}});
// 38
db.people.updateOne({first_name: "Geraldine",last_name: "Spittal"}, {$pull : {fruits:"papaya"}});
// 39
db.people.deleteMany({country: "China", age: {$gt: 40}, job: "Marketing Manager"});
// 40
db.people.find({country: "China", age: {$lte:40}}).count();
// 41
db.people.find().sort({salary:-1}).skip(1).limit(1);
// 42
db.people.find().sort({salary:1}).skip(2).limit(1);
// 43
use newDatabase;
db.createCollection("newCollection");
db.newCollection.insertOne({ name: "taghian", age: 25 });
// 44
db.newCollection.renameCollection("new_backup");
db.new_backup.drop();
// 45
show dbs;
use test;
db.dropDatabase();

// <-------------------------  BONUS   ------------------------->
// 1
db.people.find({first_name: { $regex: /^Em/ }});

// 2
db.people.find({fruits: {$lt:{$size: 3}}});
db.people.find({
   fruits: { $exists: true },
  $expr: { $lt: [ { $size: "$fruits" }, 3 ] }
});

// 3
db.people.updateOne({first_name: "Murray"}, {$set:{"fruits.0": "watermelon"}});

// 4
// this will show first 10 docs, then for ex: frontend button clicked for next
// it will add to the skip for ex: 10 (increment)
// this means we skipped the first 10 docs and showing the  next 10
db.people.find({}).sort({ _id: 1 }).skip(0).limit(10);          

// 5
db.people.updateMany({country: "France",email: {$ne:"esetchfield2n@ox.ac.uk"} },{$inc: {salary: 100}});

// 6 
db.people.findOneAndDelete({country: "Sweden"},{sort: {age: 1}})
