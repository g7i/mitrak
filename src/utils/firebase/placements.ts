import {addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc} from "firebase/firestore";
import {Collections, db} from "./db";
import {Semester} from "./users";

export type Placement = {
    id: string,
    title: string,
    company: string,
    image: URL,
    startAt: Number,
    endAt: Number,
    document: URL,
    description: string,
    package: Number,
    requirements: string[],
    applyLink: string,
    canApply: Semester[],
}

export async function addPlacement(data: Omit<Placement, "id">): Promise<string> {
    const docRef = await addDoc(collection(db, Collections.placements), data);
    return docRef.id;
}

export async function deletePlacement(id: string) {
    await deleteDoc(doc(db, Collections.placements, id));
}

export async function getPlacement(id: string): Promise<Placement> {
    const docRef = doc(db, Collections.placements, id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return {...docSnap.data(), id} as Placement;
    } else {
        throw new Error('No such document!')
    }
}

export async function updatePlacement(id: string, data: Omit<Partial<Placement>, "id">) {
    const docRef = doc(db, Collections.placements, id);
    await updateDoc(docRef, data);
}

export async function getPlacements(): Promise<Placement[]> {
    const querySnapshot = await getDocs(collection(db, Collections.placements));
    const data: Placement[] = [];
    querySnapshot.forEach((doc) => data.push({id: doc.id, ...doc.data()} as Placement));
    return data;
}
