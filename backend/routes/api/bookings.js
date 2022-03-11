const express = require('express')
const asyncHandler = require('express-async-handler');
const { requireAuth } = require("../../utils/auth");
const { Booking, Spot } = require('../../db/models')
const router = express.Router();

router.get(
    "/",
    asyncHandler(async (req,res) =>{

        const bookings = await Booking.findAll({include:Spot});
        return res.json(bookings)
    })
)

router.get(
    "/:spotId",
    asyncHandler(async(req,res) =>{
        const spotId = req.params.spotId
        const bookings = await Booking.findAll({where:{
            spotId
        }})
        return res.json(bookings)
    })
)




module.exports = router;
