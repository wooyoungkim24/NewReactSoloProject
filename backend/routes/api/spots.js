const express = require('express')
const asyncHandler = require('express-async-handler');

const {User,Spot, SpotType, ApartmentSpotType, HouseSpotType, BnBSpotType, SecondarySpotType, FloorPlan, Photo, PrivacyType, Amenity}= require('../../db/models')

const router = express.Router();

//Read Spots - General
//Find All by city
router.get(
    "/all/:city",
    asyncHandler(async(req,res) => {

        const city = req.params.city;

        const spots = await Spot.findAll({
            where:{
                city:city
            },
            include:[SpotType, Amenity,FloorPlan,Photo,PrivacyType, User]})
        return res.json(
            spots
        )
}))
//get subspottype for individual
router.get(
    "/spottypesub/:id",
    asyncHandler(async(req,res) =>{
        let subType;
        const pk = req.params.id;
        const spotType = await SpotType.findByPk(pk);
        if(spotType.apartment){
            subType = await ApartmentSpotType.findOne({where:{
                spotId:pk
            }})
        }else if(spotType.house){
            subType = await HouseSpotType.findOne({where:{
                spotId:pk
            }})
        }else if(spotType.secondaryUnit){
            subType = await SecondarySpotType.findOne({where:{
                spotId:pk
            }})
        }else if(spotType.bnb){
            subType = await BnBSpotType.findOne({where:{
                spotId:pk
            }})
        }
        return res.json(
            subType
        )
    })
)
//Find All by userId
router.get(
    "/all/user/:userId",
    asyncHandler(async(req,res) => {
        const userId = req.params.userId;
        const spots = await Spot.findAll({where:{
            userId:userId,
            },
            include:[SpotType, Amenity,FloorPlan,Photo,PrivacyType, User]
    })

        return res.json(
            spots
        )
}))


//Read Spots - Specific
//Find by primary key
router.get(
    "/:id",
    asyncHandler(async(req,res) =>{
        let subType;
        const spotId = req.params.id;
        const spot= await Spot.findByPk(spotId,
            {include: [SpotType, Amenity,FloorPlan,Photo,PrivacyType, User]}
            );
        let type = spot.SpotType;
        if(type.apartment){
            subType = await ApartmentSpotType.findOne({where:{
                spotId:spotId
            }})
        }else if(type.house){
            subType = await HouseSpotType.findOne({where:{
                spotId:spotId
            }})
        }else if(type.secondaryUnit){
            subType = await SecondarySpotType.findOne({where:{
                spotId:spotId
            }})
        }else if(type.bnb){
            subType = await BnBSpotType.findOne({where:{
                spotId:spotId
            }})
        }
        return res.json({
            spot: spot,
            subType: subType,
        })
    })
)



//Spot Stuff
router.post(
    "/",
    asyncHandler(async(req,res) =>{
        const newSpot = await Spot.create(req.body);
        return res.json(newSpot)
    })
)
router.put(
    "/",
    asyncHandler(async(req,res) =>{
        const {spotId} = req.body
        const spotUpdate = Spot.findOne({where:{
            id:spotId
        }})
        const spotUpdated = await spotUpdate.update(req.body)
        return res.json(spotUpdated)
    })
)
router.delete(
    "/",
    asyncHandler(async(req,res) =>{
        const {spotId} = req.body
        const spotDelete = Spot.findOne({where:{
            id:spotId
        }})
        await Spot.destroy({where:{
            id:spotId
        }})
        return res.json(spotDelete)
    })
)



//SpotType stuff
router.post(
    "/spotType",
    asyncHandler(async(req,res) =>{
        const newSpotType = await SpotType.create(req.body);
        return res.json(newSpotType)
    })
)
router.put(
    "/spotType",
    asyncHandler(async(req,res) =>{
        const {spotId} = req.body
        const spotTypeUpdate = SpotType.findOne({where:{
            spotId:spotId
        }})
        const spotTypeUpdated = await spotTypeUpdate.update(req.body)
        return res.json(spotTypeUpdated)
    })
)
router.delete(
    "/spotType",
    asyncHandler(async(req,res) =>{
        const {spotId} = req.body
        const spotTypeDelete = SpotType.findOne({where:{
            spotId:spotId
        }})
        await SpotType.destroy({where:{
            spotId:spotId
        }})
        return res.json(spotTypeDelete)
    })
)



//ApartmentSpotType stuff
router.post(
    "/apartmentSpotType",
    asyncHandler(async(req,res) =>{
        const newApartmentSpotType = await ApartmentSpotType.create(req.body);
        return res.json(newApartmentSpotType)
    })
)
router.put(
    "/apartmentSpotType",
    asyncHandler(async(req,res) =>{
        const {spotId} = req.body
        const apartmentSpotTypeUpdate = ApartmentSpotType.findOne({where:{
            spotId:spotId
        }})
        const apartmentSpotTypeUpdated = await apartmentSpotTypeUpdate.update(req.body)
        return res.json(apartmentSpotTypeUpdated)
    })
)
router.delete(
    "/apartmentSpotType",
    asyncHandler(async(req,res) =>{
        const {spotId} = req.body
        const apartmentSpotTypeDelete = ApartmentSpotType.findOne({where:{
            spotId:spotId
        }})
        await ApartmentSpotType.destroy({where:{
            spotId:spotId
        }})
        return res.json(apartmentSpotTypeDelete)
    })
)




//HouseSpotType stuff
router.post(
    "/houseSpotType",
    asyncHandler(async(req,res) =>{
        const newHouseSpotType = await HouseSpotType.create(req.body);
        return res.json(newHouseSpotType)
    })
)
router.put(
    "/houseSpotType",
    asyncHandler(async(req,res) =>{
        const {spotId} = req.body
        const houseSpotTypeUpdate = HouseSpotType.findOne({where:{
            spotId:spotId
        }})
        const houseSpotTypeUpdated = await houseSpotTypeUpdate.update(req.body)
        return res.json(houseSpotTypeUpdated)
    })
)
router.delete(
    "/houseSpotType",
    asyncHandler(async(req,res) =>{
        const {spotId} = req.body
        const houseSpotTypeDelete = HouseSpotType.findOne({where:{
            spotId:spotId
        }})
        await HouseSpotType.destroy({where:{
            spotId:spotId
        }})
        return res.json(houseSpotTypeDelete)
    })
)



//SecondarySpotType stuff
router.post(
    "/secondarySpotType",
    asyncHandler(async(req,res) =>{
        const newSecondarySpotType = await SecondarySpotType.create(req.body);
        return res.json(newSecondarySpotType)
    })
)
router.put(
    "/secondarySpotType",
    asyncHandler(async(req,res) =>{
        const {spotId} = req.body
        const secondarySpotTypeUpdate = SecondarySpotType.findOne({where:{
            spotId:spotId
        }})
        const secondarySpotTypeUpdated = await secondarySpotTypeUpdate.update(req.body)
        return res.json(secondarySpotTypeUpdated)
    })
)
router.delete(
    "/secondarySpotType",
    asyncHandler(async(req,res) =>{
        const {spotId} = req.body
        const secondarySpotTypeDelete = SecondarySpotType.findOne({where:{
            spotId:spotId
        }})
        await SecondarySpotType.destroy({where:{
            spotId:spotId
        }})
        return res.json(secondarySpotTypeDelete)
    })
)



//BnBSpotType stuff
router.post(
    "/bnbSpotType",
    asyncHandler(async(req,res) =>{
        const newBnBSpotType = await BnBSpotType.create(req.body);
        return res.json(newBnBSpotType)
    })
)
router.put(
    "/bnbSpotType",
    asyncHandler(async(req,res) =>{
        const {spotId} = req.body
        const bnbSpotTypeUpdate = BnBSpotType.findOne({where:{
            spotId:spotId
        }})
        const bnbSpotTypeUpdated = await bnbSpotTypeUpdate.update(req.body)
        return res.json(bnbSpotTypeUpdated)
    })
)
router.delete(
    "/bnbSpotType",
    asyncHandler(async(req,res) =>{
        const {spotId} = req.body
        const bnbSpotTypeDelete = BnBSpotType.findOne({where:{
            spotId:spotId
        }})
        await BnBSpotType.destroy({where:{
            spotId:spotId
        }})
        return res.json(bnbSpotTypeDelete)
    })
)


//PrivacyType stuff
router.post(
    "/privacyType",
    asyncHandler(async(req,res) =>{
        const newPrivacyType = await PrivacyType.create(req.body);
        return res.json(newPrivacyType)
    })
)
router.put(
    "/privacyType",
    asyncHandler(async(req,res) =>{
        const {spotId} = req.body
        const privacyTypeUpdate = PrivacyType.findOne({where:{
            spotId:spotId
        }})
        const privacyTypeUpdated = await privacyTypeUpdate.update(req.body)
        return res.json(privacyTypeUpdated)
    })
)
router.delete(
    "/privacyType",
    asyncHandler(async(req,res) =>{
        const {spotId} = req.body
        const privacyTypeDelete = PrivacyType.findOne({where:{
            spotId:spotId
        }})
        await PrivacyType.destroy({where:{
            spotId:spotId
        }})
        return res.json(privacyTypeDelete)
    })
)


//Photos stuff
router.post(
    "/photo",
    asyncHandler(async(req,res) =>{
        const newPhotos = await Photo.create(req.body);
        return res.json(newPhotos)
    })
)
router.put(
    "/photo",
    asyncHandler(async(req,res) =>{
        const {spotId} = req.body
        const photoUpdate = Photo.findOne({where:{
            spotId:spotId
        }})
        const photoUpdated = await photoUpdate.update(req.body)
        return res.json(photoUpdated)
    })
)
router.delete(
    "/photo",
    asyncHandler(async(req,res) =>{
        const {spotId} = req.body
        const photoDelete = Photo.findOne({where:{
            spotId:spotId
        }})
        await Photo.destroy({where:{
            spotId:spotId
        }})
        return res.json(photoDelete)
    })
)


//FloorPlan stuff
router.post(
    "/floorPlan",
    asyncHandler(async(req,res) =>{
        const newFloorPlan = await FloorPlan.create(req.body);
        return res.json(newFloorPlan)
    })
)
router.put(
    "/floorPlan",
    asyncHandler(async(req,res) =>{
        const {spotId} = req.body
        const floorPlanUpdate = FloorPlan.findOne({where:{
            spotId:spotId
        }})
        const floorPlanUpdated = await floorPlanUpdate.update(req.body)
        return res.json(floorPlanUpdated)
    })
)
router.delete(
    "/floorPlan",
    asyncHandler(async(req,res) =>{
        const {spotId} = req.body
        const floorPlanDelete = FloorPlan.findOne({where:{
            spotId:spotId
        }})
        await FloorPlan.destroy({where:{
            spotId:spotId
        }})
        return res.json(floorPlanDelete)
    })
)



//Amenities stuff
router.post(
    "/amenity",
    asyncHandler(async(req,res) =>{
        const amenities = await Amenity.create(req.body);
        return res.json(amenities)
    })
)
router.put(
    "/amenity",
    asyncHandler(async(req,res) =>{
        const {spotId} = req.body
        const amenityUpdate = Amenity.findOne({where:{
            spotId:spotId
        }})
        const amenityUpdated = await amenityUpdate.update(req.body)
        return res.json(amenityUpdated)
    })
)
router.delete(
    "/amenity",
    asyncHandler(async(req,res) =>{
        const {spotId} = req.body
        const amenityDelete = Amenity.findOne({where:{
            spotId:spotId
        }})
        await Amenity.destroy({where:{
            spotId:spotId
        }})
        return res.json(amenityDelete)
    })
)
module.exports = router;
