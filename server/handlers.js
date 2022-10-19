const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;


const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
// Gets all the items in the database and their info for the homepage
const getItems = async () => {
  let dbName = "ecommerce";
  const client = new MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db(dbName);
  const items = await db.collection("items").find().toArray();
  client.close();
  return items;
}
//Gets an item by id 
const getItemById = async (id) => {
  let dbName = "ecommerce";
  const client = new MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db(dbName);
  item = await db.collection("items").findOne({_id : parseInt(id)});
  client.close();
  return item;
}
//Decrements the stock# of an item
const decrementItemById = async (id) => {
  let dbName = "ecommerce";
  const client = new MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db(dbName);
  const item = await getItemById(id);
  const updatedItem = await db.collection("items").updateOne({_id : parseInt(id)}, {$set: { numInStock: (item.numInStock - 1)}});
  client.close();
  return updatedItem;
}
//Gets a certain amount of items
const getItemsByPage = async (start, limit) =>{
  
  if(isNaN(start) || start < 0){
    start = 0; 
  }
  if(isNaN(limit) || limit < 1){
    limit = 20; 
  }
  let dbName = "ecommerce";
  const client = new MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db(dbName);
  const items = await db.collection("items").find().toArray();
  let page = items.slice(start, start+limit); 
  client.close();
  return page;
  }
  //Get Items by category
const getItemsByCategory = async (category) => {
  let dbName = "ecommerce";
  const client = new MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db(dbName);
  let filter = {category : category};
  const items = await db.collection("items").find(filter).toArray();
  client.close();
  return items;
}
// Get a certain ammount of Items by category
const getItemsByCategoryByPage = async (category, start, limit ) => {
  let dbName = "ecommerce";
  const client = new MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db(dbName);
  let filter = {category : category};
  const items = await db.collection("items").find(filter).toArray();
  let page = items.slice(start, start+limit);
  client.close();
  return page;
}

 //Get Items by category
 const getItemsByBodyLocation= async (bodyLocation) => {
  console.log("getitemsbybodylocation");
  let dbName = "ecommerce";
  const client = new MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db(dbName);
  let filter = {body_location: bodyLocation};
  const items = await db.collection("items").find(filter).toArray();
  client.close();
  return items;
}
// Get a certain ammount of Items by body location
const getItemsByBodyLocationByPage = async (bodyLocation, start, limit ) => {
  let dbName = "ecommerce";
  const client = new MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db(dbName);
  let filter = {body_location : bodyLocation};
  const items = await db.collection("items").find(filter).toArray();
  let page = items.slice(start, start+limit);
  client.close();
  return page;
}

module.exports = { 
  getItems, getItemById, decrementItemById, getItemsByPage, getItemsByCategory, getItemsByCategoryByPage,getItemsByBodyLocation, getItemsByBodyLocationByPage
};