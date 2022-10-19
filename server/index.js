'use strict';
const {getItems} = require("./handlers.js"); 
const {getItemById} = require("./handlers.js"); 
const {decrementItemById} = require("./handlers.js"); 
const {getItemsByPage} = require("./handlers.js"); 
const {getItemsByCategory} = require("./handlers.js");
const {getItemsByCategoryByPage} = require("./handlers.js");
const express = require('express');
const morgan = require('morgan');

const PORT = 4000;

express()
  .use(function(req, res, next) {
    res.header(
      'Access-Control-Allow-Methods',
      'OPTIONS, HEAD, GET, PUT, POST, DELETE'
    );
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
  })
  .use(morgan('tiny'))
  .use(express.static('./server/assets'))
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use('/', express.static(__dirname + '/'))

  // Gets all the items in the database and their info for the homepage
  .get("/ecommerce/items", async (request, response) => {
    let items = await getItems();
    items
    ? response.status(200).json({ status: 200, data: items })
    : response.status(404).json({ status: 404, data: "Not Found" });
    })

  //Gets an item by id 
  .get("/ecommerce/item/:id", async (request, response) => {
    let id = request.params.id;
    const item = await getItemById(id);
    item
    ? response.status(200).json({ status: 200, data: item })
    : response.status(404).json({ status: 404, data: "Not Found" });
  })
  //Decrements the stock# of an item

  .patch("/ecommerce/item/:id", async (request, response) => {
    let id = request.params.id;
    const queryRes = await decrementItemById(id);
    queryRes.modifiedCount > 0
    ? response.status(200).json({ status: 200, data: queryRes })
    : response.status(404).json({ status: 404, data: "Not Found" });
  })

  //Gets a certain amount of items 
  .get("/ecommerce/items/page", async (request, response) => {
    let start = parseInt(request.query.start);
    let limit = parseInt(request.query.limit);
    let page = await getItemsByPage(start, limit);
    page
    ? response.status(200).json({ status: 200, data: page })
    : response.status(404).json({ status: 404, data: "Not Found" });
    })

    //Get Items by category
    .get("/ecommerce/items/category/:category", async (request, response) => {
      let category = request.params.category;
      let items = await getItemsByCategory(category);
      items
      ? response.status(200).json({ status: 200, data: items })
      : response.status(404).json({ status: 404, data: "Not Found" });
      })
      // Get a certain ammount of Items by category
      .get("/ecommerce/items/category/:category/page", async (request, response) => {
        let category = request.params.category;
        let start = parseInt(request.query.start);
        let limit = parseInt(request.query.limit);
        let items = await getItemsByCategoryByPage(category, start, limit);
        items
        ? response.status(200).json({ status: 200, data: items })
        : response.status(404).json({ status: 404, data: "Not Found" });
        })



  .get('/bacon', (req, res) => res.status(200).json('🥓'))

  .listen(PORT, () => console.info(`Listening on port ${PORT}`));