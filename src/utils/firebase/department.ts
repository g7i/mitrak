import { storage } from "./storage";
import { ref, getDownloadURL, list } from "firebase/storage";

export async function getImages(department: String): Promise<Array<String>> {
  const imagesRef = ref(storage, `departments/${department}`);
  const imageList = await list(imagesRef);
  const promiseList = [];
  imageList?.items.map((item) => {
    promiseList.push(getDownloadURL(ref(item)));
  });
  return new Promise((resolve, reject) => {
    Promise.all(promiseList)
      .then((urlArray) => {
        resolve(urlArray);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
