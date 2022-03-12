const express = require('express')
const asyncHandler = require('express-async-handler');
const { requireAuth } = require("../../utils/auth");
const { Booking, Spot, User } = require('../../db/models');
const { ListObjectsCommand } = require("@aws-sdk/client-s3")
const { s3Client } = require("../../utils/lib");
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
router.get(
    "/user/:userId",
    requireAuth,
    asyncHandler(async(req,res) =>{
        let photoObj = {};
        const bucketParams = { Bucket: "citybrbphotos" };
        try {
            const data = await s3Client.send(new ListObjectsCommand(bucketParams));
            //   console.log("Success", Object.keys(data));
            console.log("Success", data.Contents[0]);
            for (let i = 0; i < data.Contents.length; i++) {
                let currFile = data.Contents[i]
                let fileKey = currFile.Key;
                let fileKeyNumberPrep = fileKey.split("/")[0]
                let num = parseInt(fileKeyNumberPrep.match(/\d+/g)[0]);

                if (!photoObj[num]) {
                    photoObj[num] = [fileKey.split("/")[1]]
                } else {
                    photoObj[num].push(fileKey.split("/")[1])
                }
            }
            //   console.log(photoObj)
            // return data; // For unit tests.
        } catch (err) {
            console.log("Error", err);
        }
        const userId = req.params.userId
        const bookings = await Booking.findAll({where:{
            userId
        },
        include: [Spot,User]})

        return res.json({bookings,photoObj})
    })
)

router.post(
    "/",
    asyncHandler(async(req,res) =>{
        const booking = await Booking.create(req.body)
        return res.json(booking)
    })
)


router.delete(
    "/",
    asyncHandler(async(req,res) =>{
        const {spotId, userId} = req.body
        const { Op } = require('sequelize');
        const tripDelete = await Booking.findOne({
            where:{
                [Op.and]:[
                    {spotId:spotId},
                    {userId:userId}
                ]
            }
        })
        await Booking.destroy({
            where:{
                [Op.and]:[
                    {spotId:spotId},
                    {userId:userId}
                ]
            }
        })
        return res.json(tripDelete)
    })
)




module.exports = router;
