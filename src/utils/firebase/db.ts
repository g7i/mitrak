import {collection, getDocs, getFirestore, query, where} from "firebase/firestore";

export const db = getFirestore();

export const Collections = {
    users: 'users',
    notes: 'notes',
    notices: 'notices',
    news: 'news',
    placements: 'placements',
    contacts: 'contacts',
};

export async function listDocuments(coll: string, type: string): Promise<[] | null> {
    try {
        const q = query(collection(db, coll), where("type", "==", type));
        const querySnapshot = await getDocs(q);
        const data: [] = [];
        // @ts-ignore
        querySnapshot.forEach((doc) => data.push({id: doc.id, ...doc.data()}));
        return data;
    } catch (e) {
        return null;
    }
}
