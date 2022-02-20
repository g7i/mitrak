import {collection, getDocs, getFirestore, query, where, WhereFilterOp} from "firebase/firestore";

export const db = getFirestore();

export const Collections = {
    users: 'users',
    notes: 'notes',
    notices: 'notices',
    news: 'news',
    placements: 'placements',
    contacts: 'contacts',
};

type ListConfig = {
    queries: {
        name: string,
        operator: WhereFilterOp,
        value: string,
    }[],
};

export async function listDocuments(coll: string, type: string, { queries = [] }: ListConfig ): Promise<[] | null> {
    const data: [] = [];
    try {
        const q = query(collection(db, coll), where("type", "==", type), ...queries.map(q => where(q.name, q.operator, q.value)));
        const querySnapshot = await getDocs(q);
        // @ts-ignore
        querySnapshot.forEach((doc) => data.push({id: doc.id, ...doc.data()}));
    } catch (e) {
        console.log(e);
    }
    return data;
}
