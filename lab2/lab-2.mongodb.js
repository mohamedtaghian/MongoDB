use test;
show dbs;
show collections;

// 1
db.people.aggregate([
    {$match: {$or: [{age:40},{company: "Aivee"}]}}
]);

// 2
db.people.aggregate([
    {$match: {age:{$gt:25,$lt:38}}},
    {$limit: 5}
]);

// 3
db.people.aggregate([
    {$match: {salary:{$gt:20000}}},
    {$sort: {age:1}},
    {$limit: 1}
]);

// 4
db.people.aggregate([
    {$match: {country: "Russia"}},
    {$sort: {age:-1}},
    {$skip: 2},
    {$limit: 1}
]);

// 5 
db.people.aggregate([
    {$group: {_id: "$country", count: {$sum:1}}}
]);

// 6
db.people.aggregate([{
    $group: {_id: null, total_salaries:{$sum: "$salary"}}
}]);

// 7 
db.people.aggregate([
 {$sort: {salary:-1}},
 {$limit: 3},
 {$group: {_id: null, total_3_salaries: {$sum: "$salary"}}}
]);

// 8
db.people.aggregate([
    {$group: {_id: "$company", avg:{$avg: "$salary"}}},
    {$sort: {avg: -1}}
]);

// 9
db.people.aggregate([
    {$match: {country: "Germany"}},
    {$project: {full_Name: {$concat: ["$first_name"," ","$last_name"]}}}
]);

// 10
db.people.aggregate([
    {$group: {_id: "$age", count: {$sum: 1}}},
]);

// 11
db.people.aggregate([
    {$match: {age: {$lt:30}}},
    {$project: {email: 1}}
]);

// 12
db.createCollection("outPut");
db.people.aggregate([
    {$project: {first_name: 1, last_name:1, age:1,company:1}},
    {$merge: {into: "outPut", whenMatched: "merge", whenNotMatched:"insert"}}
]);

// 13
db.people.getIndexes();

// 14
db.people.explain("executionStats").find({email: "kjovasevic0@blog.com"});

// 15
db.people.createIndex(
  { email: 1 },   
  { unique: true } 
);
db.people.explain("executionStats").find({ email: "kjovasevic0@blog.com" });

// 16
db.people.createIndex(
  { email: 1, age: 1 }
);

// 17
db.people.dropIndex("email_1");
db.people.getIndexes();

// 18
db.people.dropIndexes();

