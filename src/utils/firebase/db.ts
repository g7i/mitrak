import {getFirestore} from "firebase/firestore";

export const db = getFirestore();

export const Collections = {
    users: 'users',
    notes: 'notes',
    notices: 'notices',
    news: 'news',
    placements: 'placements',
    contacts: 'contacts',
};
