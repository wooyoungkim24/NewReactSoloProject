import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Route, useHistory, useParams } from 'react-router-dom';
import * as sessionActions from "../../store/session";
import Navigation from '../Navigation';
import { getSpot } from "../../store/spot"

import { ListObjectsCommand } from "@aws-sdk/client-s3";
import { s3Client } from "../../libs/index"
const bucketParams = { Bucket: "citybrbphotos" };
const run = async () => {
    try {
      const data = await s3Client.send(new ListObjectsCommand(bucketParams));
      console.log("Success", data);
      return data; // For unit tests.
    } catch (err) {
      console.log("Error", err);
    }
  };
  run();
function EditPhotoArray() {
    const dispatch = useDispatch();
    const { type } = useParams();
    const splitType = type.split("_");
    const id = parseInt(splitType[1])
    const formType = splitType[0]
    const [isLoaded, setIsLoaded] = useState(false)
    const [newPhoto, setNewPhoto] = useState("")
    useEffect(() => {
        dispatch(getSpot(id)).then(() => setIsLoaded(true))
    }, [dispatch])

    const spotInfo = useSelector(state => {
        return state.spots.individualSpot.spot
    })
    let photoArrayOld;
    let form;
    // if (isLoaded) {
    //     photoArrayOld = spotInfo.Photo.photoArray

    //     form = (
    //         <form className='add-photo-form'>
    //             <input
    //                 type="file"
    //                 accept="image/png, image/jpeg"
    //             >

    //             </input>

    //         </form>

    //     )

    // }


    return (
        <div>
            Hello, testing SDK
        </div>

    )

}



export default EditPhotoArray;
