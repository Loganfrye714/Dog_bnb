const express = require("express");
const asyncHandler = require('express-async-handler');
const router = express.Router();

const { Reservation } = require('../../db/models');

// -> find all reservations
router.get('', asyncHandler( async(req,res) => {
  const reservation = await Reservation.findAll({});
  res.json(reservation);
}))

// -> find a reservation by a specific ID
router.get('/:id', asyncHandler( async(req,res) => {
  const id = req.params.id;
  const reservation = await Reservation.findByPk(id);
  res.json(reservation);
}))


router.post(
  '/',
  asyncHandler(async (req, res) => {
    const { dogHouseId, startDate, endDate, price, totalCost, userId } = req.body;

    const bookedReservation = await Reservation.build({
      userId,
      dogHouseId,
      startDate,
      endDate,
      price,
      totalCost
    })

    await bookedReservation.save();
    return res.json({ bookedReservation })
  }),
);


module.exports = router;
