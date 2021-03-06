const express = require("express");
const asyncHandler = require('express-async-handler');
const router = express.Router();

const { Reservation } = require('../../db/models');

// -> find all reservations
router.get('/', asyncHandler( async(req,res) => {
  const reservation = await Reservation.findAll({});
  res.json(reservation);
}))

router.post(
  '/',
  asyncHandler(async (req, res) => {
    const { userId, dogHouseId, startDate, endDate, price, totalCost  } = req.body;

    const reservation = await Reservation.build({
      userId,
      dogHouseId,
      startDate,
      endDate,
      price,
      totalCost
    })

    await reservation.save();
    return res.json({ reservation })
  }),
);

// -> find a reservation by a specific ID
router.get('/:id', asyncHandler( async(req,res) => {
  const id = req.params.id;
  const reservation = await Reservation.findByPk(id);
  res.json(reservation);
}))

// -> update an reservation
router.put(
  '/:reservationId',
  asyncHandler(async (req, res) => {
    const { userId, dogHouseId, startDate, endDate, price, totalCost  } = req.body;

    const reservationId = req.params.reservationId;

      const BookedRes = await Reservation.findByPk(reservationId)
      const updatedReservation = await BookedRes.update({
        userId,
        dogHouseId,
        startDate,
        endDate,
        price,
        totalCost
      })
      return res.json(updatedReservation)

  }),
);

// -> delete an reservation
// -> find a reservation by a specific ID
router.delete('/:reservationId', asyncHandler( async(req,res) => {
  const reservationId = req.params.reservationId;
  const cancelledRes = await Reservation.findByPk(req.params.reservationId);
  await cancelledRes.destroy();
  return res.json({});

}))

module.exports = router;
