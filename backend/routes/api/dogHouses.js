const express = require("express");
const asyncHandler = require('express-async-handler');
const router = express.Router();

const { DogHouse } = require('../../db/models');


router.get('', asyncHandler( async(req,res) => {
  const doghouses = await DogHouse.findAll({});
  res.json(doghouses);
}))


















module.exports = router
