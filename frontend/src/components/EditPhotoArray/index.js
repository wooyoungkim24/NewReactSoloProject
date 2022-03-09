import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Route, useHistory, useParams } from 'react-router-dom';
import * as sessionActions from "../../store/session";
import Navigation from '../Navigation';
import { getSpot, putPhoto } from "../../store/spot"

import fs from 'fs';


function EditPhotoArray() {
    const dispatch = useDispatch();
    const { type } = useParams();
    const splitType = type.split("_");
    const id = parseInt(splitType[1])

    const [isLoaded, setIsLoaded] = useState(false)
    const [formType, setFormType] =useState(splitType[0])
    const [photoNumber, setPhotoNumber] = useState(1)


    useEffect(() => {
        dispatch(getSpot(id)).then(() => setIsLoaded(true))

    }, [dispatch])

    const spotInfo = useSelector(state => {
        return state.spots.individualSpot.spot
    })

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const formData = new FormData();


        // let reader = new FileReader()
        // reader.onload = function () {
        //     console.log(reader.result);
        // }
        const selectedFile = document.getElementById('edit-photo-input').files[0];
        formData.append('File', selectedFile);

        // fs.readFile(selectedFile, (err, data) => {
        //     if (err) throw err;
        // });
        // reader.readAsBinaryString(selectedFile)

        console.log(selectedFile)
        const key = `Spot${id}/${selectedFile.name}`
        formData.append('Key', key);
        // console.log('test',formData.getAll("Key"))
        const payload = formData

        console.log('form',formData)
        dispatch(putPhoto(payload))
        // console.log(selectedFile, binaryStream)
    }


    return (
        <>
            {isLoaded &&
            <div>
                {console.log(formType)}
                {formType === "photo" &&
                <div>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="edit-photo-input">Select new Photo</label>
                        <input
                            id="edit-photo-input"
                            type="file"
                            accept ="image/*"

                            >
                        </input>


                        {/* <label for="which-photo-input">Which Photo to Replace</label>
                        <input
                            id="which-photo-input"
                            type="number"
                            min="1">
                        </input> */}
                        <button type='submit'>Add</button>

                    </form>
                </div>
                }

            </div>}

        </>


    )

}



export default EditPhotoArray;
