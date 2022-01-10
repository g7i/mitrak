import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import firebase from "firebase/compat";

// Create a reference to the file we want to download
export const getImagesFromStorage = async(folderName ) => {
    firebase.storage().ref().child('amenities/').listAll()
        .then(res => {
            res.items.forEach((item) => {
                // setData(arr => [...arr, item.name]);
                console.log('images', item.name)
            })
        })
        .catch(err => {
            alert(err.message);
        })
}
