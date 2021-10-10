import {addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc} from "firebase/firestore";
import {Collections, db} from "./db";

export type Notice = {
    id: string,
    title: string,
    url: URL,
    createdAt: Number,
}

export async function addNotice(data: Omit<Notice, "id">): Promise<string> {
    const docRef = await addDoc(collection(db, Collections.notices), data);
    return docRef.id;
}

export async function deleteNotice(id: string) {
    await deleteDoc(doc(db, Collections.notices, id));
}

export async function getNotice(id: string): Promise<Notice> {
    const docRef = doc(db, Collections.notices, id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return {...docSnap.data(), id} as Notice;
    } else {
        throw new Error('No such document!')
    }
}

export async function updateNotice(id: string, data: Partial<Omit<Notice, "id">>) {
    const docRef = doc(db, Collections.notices, id);
    await updateDoc(docRef, data);
}

export async function getNotices(): Promise<Notice[]> {
    const querySnapshot = await getDocs(collection(db, Collections.notices));
    const data: Notice[] = [];
    querySnapshot.forEach((doc) => data.push({id: doc.id, ...doc.data()} as Notice));
    return data;
}
