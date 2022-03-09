const express = require('express')
const asyncHandler = require('express-async-handler');
const multer = require('multer')
const { requireAuth } = require("../../utils/auth");
const { User, Spot, SpotType, ApartmentSpotType, HouseSpotType, BnBSpotType, SecondarySpotType, FloorPlan, Photo, PrivacyType, Amenity } = require('../../db/models')
const { ListBucketsCommand } = require("@aws-sdk/client-s3")
const { ListObjectsCommand } = require("@aws-sdk/client-s3")
const { PutObjectCommand } = require("@aws-sdk/client-s3")
const { DeleteObjectCommand } = require("@aws-sdk/client-s3");
const { s3Client } = require("../../utils/lib")
const bucketParams = { Bucket: "citybrbphotos" };
const router = express.Router();
const formidable = require('express-formidable');
const fs = require("fs");
const path = require('path')


const upload = multer();
// router.use(formidable())

//Read Spots - General
//Find All by city
router.get(
    "/all/:city",
    asyncHandler(async (req, res) => {

        const city = req.params.city;
        let photoObj = {};

        try {
            const data = await s3Client.send(new ListObjectsCommand(bucketParams));
            //   console.log("Success", Object.keys(data));
            //   console.log("Success", data.Contents[0], data.Contents[1]);
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

        const spots = await Spot.findAll({
            where: {
                city: city
            },
            include: [SpotType, Amenity, FloorPlan, Photo, PrivacyType, User]
        })
        console.log(spots)
        return res.json({
            spots,
            photoObj
        })
    }))
//get subspottype for individual
router.get(
    "/spottypesub/:id",
    asyncHandler(async (req, res) => {
        let subType;
        const pk = req.params.id;
        const spotType = await SpotType.findByPk(pk);
        if (spotType.apartment) {
            subType = await ApartmentSpotType.findOne({
                where: {
                    spotId: pk
                }
            })
        } else if (spotType.house) {
            subType = await HouseSpotType.findOne({
                where: {
                    spotId: pk
                }
            })
        } else if (spotType.secondaryUnit) {
            subType = await SecondarySpotType.findOne({
                where: {
                    spotId: pk
                }
            })
        } else if (spotType.bnb) {
            subType = await BnBSpotType.findOne({
                where: {
                    spotId: pk
                }
            })
        }
        return res.json(
            subType
        )
    })
)
//Find All by userId
router.get(
    "/all/user/:userId",
    requireAuth,
    asyncHandler(async (req, res) => {
        const userId = req.params.userId;
        let photoObj = {};

        try {
            const data = await s3Client.send(new ListObjectsCommand(bucketParams));
            //   console.log("Success", Object.keys(data));
            //   console.log("Success", data.Contents[0], data.Contents[1]);
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


        const spots = await Spot.findAll({
            where: {
                userId: userId,
            },
            include: [SpotType, Amenity, FloorPlan, Photo, PrivacyType, User]
        })

        return res.json({
            spots,
            photoObj
        })
    }))


//Read Spots - Specific
//Find by primary key
router.get(
    "/:id",
    asyncHandler(async (req, res) => {
        let subType;
        const spotId = req.params.id;
        const spot = await Spot.findByPk(spotId,
            { include: [SpotType, Amenity, FloorPlan, Photo, PrivacyType, User] }
        );
        let photoObj = {};

        try {
            const data = await s3Client.send(new ListObjectsCommand(bucketParams));
            //   console.log("Success", Object.keys(data));
            //   console.log("Success", data.Contents[0], data.Contents[1]);
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

        let type = spot.SpotType;
        if (type.apartment) {
            subType = await ApartmentSpotType.findOne({
                where: {
                    spotId: spotId
                }
            })
        } else if (type.house) {
            subType = await HouseSpotType.findOne({
                where: {
                    spotId: spotId
                }
            })
        } else if (type.secondaryUnit) {
            subType = await SecondarySpotType.findOne({
                where: {
                    spotId: spotId
                }
            })
        } else if (type.bnb) {
            subType = await BnBSpotType.findOne({
                where: {
                    spotId: spotId
                }
            })
        }
        return res.json({
            spot: spot,
            subType: subType,
            photoObj: photoObj
        })
    })
)



//Spot Stuff
router.post(
    "/",
    asyncHandler(async (req, res) => {
        const newSpot = await Spot.create(req.body);
        return res.json(newSpot)
    })
)
router.put(
    "/",
    asyncHandler(async (req, res) => {
        const { id } = req.body
        const spotUpdate = await Spot.findOne({
            where: {
                id
            }
        })
        const spotUpdated = await spotUpdate.update(req.body)
        return res.json(spotUpdated)
    })
)
router.delete(
    "/",
    asyncHandler(async (req, res) => {
        const { spotId } = req.body
        const spotDelete = Spot.findOne({
            where: {
                id: spotId
            }
        })
        await Spot.destroy({
            where: {
                id: spotId
            }
        })
        return res.json(spotDelete)
    })
)



//SpotType stuff
router.post(
    "/spotType",
    asyncHandler(async (req, res) => {
        const newSpotType = await SpotType.create(req.body);
        return res.json(newSpotType)
    })
)
router.put(
    "/spotType",
    asyncHandler(async (req, res) => {
        const { id} = req.body
        console.log(req.body)
        const spotTypeUpdate = await SpotType.findOne({
            where: {
                id
            }
        })

        const spotTypeUpdated = await spotTypeUpdate.update(req.body)
        return res.json(spotTypeUpdated)

    })
)
router.delete(
    "/spotType",
    asyncHandler(async (req, res) => {
        const { id } = req.body
        const spotTypeDelete = await SpotType.findOne({
            where: {
                id
            }
        })
        await SpotType.destroy({
            where: {
                id
            }
        })
        return res.json(spotTypeDelete)
    })
)



//ApartmentSpotType stuff
router.post(
    "/apartmentSpotType",
    asyncHandler(async (req, res) => {
        const newApartmentSpotType = await ApartmentSpotType.create(req.body);
        return res.json(newApartmentSpotType)
    })
)
router.put(
    "/apartmentSpotType",
    asyncHandler(async (req, res) => {
        const { spotId } = req.body
        const apartmentSpotTypeUpdate = ApartmentSpotType.findOne({
            where: {
                spotId: spotId
            }
        })
        const apartmentSpotTypeUpdated = await apartmentSpotTypeUpdate.update(req.body)
        return res.json(apartmentSpotTypeUpdated)
    })
)
router.delete(
    "/apartmentSpotType",
    asyncHandler(async (req, res) => {
        const { spotId } = req.body
        const apartmentSpotTypeDelete = await ApartmentSpotType.findOne({
            where: {
                spotId
            }
        })
        await ApartmentSpotType.destroy({
            where: {
                spotId
            }
        })
        return res.json(apartmentSpotTypeDelete)
    })
)




//HouseSpotType stuff
router.post(
    "/houseSpotType",
    asyncHandler(async (req, res) => {
        const newHouseSpotType = await HouseSpotType.create(req.body);
        return res.json(newHouseSpotType)
    })
)
router.put(
    "/houseSpotType",
    asyncHandler(async (req, res) => {
        const { spotId } = req.body
        const houseSpotTypeUpdate = HouseSpotType.findOne({
            where: {
                spotId: spotId
            }
        })
        const houseSpotTypeUpdated = await houseSpotTypeUpdate.update(req.body)
        return res.json(houseSpotTypeUpdated)
    })
)
router.delete(
    "/houseSpotType",
    asyncHandler(async (req, res) => {
        const { spotId } = req.body
        console.log('thjis is the payload',req.body)
        const houseSpotTypeDelete = await HouseSpotType.findOne({
            where: {
                spotId
            }
        })
        await HouseSpotType.destroy({
            where: {
                spotId
            }
        })
        return res.json(houseSpotTypeDelete)
    })
)



//SecondarySpotType stuff
router.post(
    "/secondaryUnitSpotType",
    asyncHandler(async (req, res) => {
        const newSecondarySpotType = await SecondarySpotType.create(req.body);
        return res.json(newSecondarySpotType)
    })
)
router.put(
    "/secondaryUnitSpotType",
    asyncHandler(async (req, res) => {
        const { spotId } = req.body
        const secondarySpotTypeUpdate = SecondarySpotType.findOne({
            where: {
                spotId: spotId
            }
        })
        const secondarySpotTypeUpdated = await secondarySpotTypeUpdate.update(req.body)
        return res.json(secondarySpotTypeUpdated)
    })
)
router.delete(
    "/secondaryUnitSpotType",
    asyncHandler(async (req, res) => {
        const {spotId} = req.body
        const secondarySpotTypeDelete = await SecondarySpotType.findOne({
            where: {
                spotId
            }
        })
        await SecondarySpotType.destroy({
            where: {
                spotId
            }
        })
        return res.json(secondarySpotTypeDelete)
    })
)



//BnBSpotType stuff
router.post(
    "/bnbSpotType",
    asyncHandler(async (req, res) => {
        const newBnBSpotType = await BnBSpotType.create(req.body);
        return res.json(newBnBSpotType)
    })
)
router.put(
    "/bnbSpotType",
    asyncHandler(async (req, res) => {
        const { spotId } = req.body
        const bnbSpotTypeUpdate = BnBSpotType.findOne({
            where: {
                spotId: spotId
            }
        })
        const bnbSpotTypeUpdated = await bnbSpotTypeUpdate.update(req.body)
        return res.json(bnbSpotTypeUpdated)
    })
)
router.delete(
    "/bnbSpotType",
    asyncHandler(async (req, res) => {
        const { spotId } = req.body
        const bnbSpotTypeDelete = await BnBSpotType.findOne({
            where: {
                spotId
            }
        })
        await BnBSpotType.destroy({
            where: {
                spotId
            }
        })
        return res.json(bnbSpotTypeDelete)
    })
)


//PrivacyType stuff
router.post(
    "/privacyType",
    asyncHandler(async (req, res) => {
        const newPrivacyType = await PrivacyType.create(req.body);
        return res.json(newPrivacyType)
    })
)
router.put(
    "/privacyType",
    asyncHandler(async (req, res) => {
        const { spotId } = req.body
        const privacyTypeUpdate = PrivacyType.findOne({
            where: {
                spotId: spotId
            }
        })
        const privacyTypeUpdated = await privacyTypeUpdate.update(req.body)
        return res.json(privacyTypeUpdated)
    })
)
router.delete(
    "/privacyType",
    asyncHandler(async (req, res) => {
        const { spotId } = req.body
        const privacyTypeDelete = PrivacyType.findOne({
            where: {
                spotId: spotId
            }
        })
        await PrivacyType.destroy({
            where: {
                spotId: spotId
            }
        })
        return res.json(privacyTypeDelete)
    })
)


//Photos stuff

router.post(
    "/photoPost/:key",
    upload.single("File"),
    asyncHandler(async (req, res) => {
        // const {key, formData} = req.body
        // console.log(req.params)
        const key = req.params.key
        const keyPrep = key.split("_")
        let spotId = keyPrep[0]
        const oldKeyPrep = keyPrep.pop();
        const oldKey = `${spotId}/${oldKeyPrep}`
        const newKey = keyPrep.join("/")

        const bucketParamsAdd = {
            Bucket: "citybrbphotos",
            // Specify the name of the new object. For example, 'index.html'.
            // To create a directory for the object, use '/'. For example, 'myApp/package.json'.
            Key: newKey,
            // Content of the new object.
            Body: req.files.File.data
        };
        try {
            const data = await s3Client.send(new PutObjectCommand(bucketParamsAdd));
            // return data; // For unit tests.
            console.log(
                "Successfully uploaded object: " +
                bucketParamsAdd.Bucket +
                "/" +
                bucketParamsAdd.Key
            );
        } catch (err) {
            console.log("Error", err);
        }

        const bucketParamsDelete = { Bucket: "citybrbphotos", Key: oldKey };
        try {
            const data = await s3Client.send(new DeleteObjectCommand(bucketParamsDelete));
            console.log("Success. Object deleted.", data);
        } catch (err) {
            console.log("Error", err);
        }
        return {};
    })
)



//FloorPlan stuff
router.post(
    "/floorPlan",
    asyncHandler(async (req, res) => {
        const newFloorPlan = await FloorPlan.create(req.body);
        return res.json(newFloorPlan)
    })
)
router.put(
    "/floorPlan",
    asyncHandler(async (req, res) => {
        const { spotId } = req.body
        const floorPlanUpdate = FloorPlan.findOne({
            where: {
                spotId: spotId
            }
        })
        const floorPlanUpdated = await floorPlanUpdate.update(req.body)
        return res.json(floorPlanUpdated)
    })
)
router.delete(
    "/floorPlan",
    asyncHandler(async (req, res) => {
        const { spotId } = req.body
        const floorPlanDelete = FloorPlan.findOne({
            where: {
                spotId: spotId
            }
        })
        await FloorPlan.destroy({
            where: {
                spotId: spotId
            }
        })
        return res.json(floorPlanDelete)
    })
)



//Amenities stuff
router.post(
    "/amenity",
    asyncHandler(async (req, res) => {
        const amenities = await Amenity.create(req.body);
        return res.json(amenities)
    })
)
router.put(
    "/amenity",
    asyncHandler(async (req, res) => {

        const { spotId } = req.body
        const amenityUpdate = await Amenity.findOne({
            where: {
                spotId
            }
        })
        delete req.body.spotId
        console.log(req.body)
        const amenityUpdated = await amenityUpdate.update(req.body)
        return res.json(amenityUpdated)
    })
)
router.delete(
    "/amenity",
    asyncHandler(async (req, res) => {
        const { spotId } = req.body
        const amenityDelete = Amenity.findOne({
            where: {
                spotId: spotId
            }
        })
        await Amenity.destroy({
            where: {
                spotId: spotId
            }
        })
        return res.json(amenityDelete)
    })
)
module.exports = router;
