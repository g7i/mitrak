import {addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc} from "firebase/firestore";
import {Collections, db} from "./db";

export type Link = {
    title: string,
    url: URL,
}

export type News = {
    id: string,
    title: string,
    image: URL,
    description: string,
    links: Link[],
    createdAt: Number,
}

export async function addNews(data: Omit<News, "id">): Promise<string> {
    const docRef = await addDoc(collection(db, Collections.news), data);
    return docRef.id;
}

export async function deleteNews(id: string) {
    await deleteDoc(doc(db, Collections.news, id));
}

export async function getNews(id: string): Promise<News> {
    const docRef = doc(db, Collections.news, id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return {...docSnap.data(), id} as News;
    } else {
        throw new Error('No such document!')
    }
}

export async function updateNews(id: string, data: Partial<Omit<News, "id">>) {
    const docRef = doc(db, Collections.news, id);
    await updateDoc(docRef, data);
}

export async function listNews(): Promise<News[]> {
    const querySnapshot = await getDocs(collection(db, Collections.news));
    const data: News[] = [];
    querySnapshot.forEach((doc) => data.push({id: doc.id, ...doc.data()} as News));
    return data;
}
