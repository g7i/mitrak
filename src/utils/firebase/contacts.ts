import {addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc, orderBy, query} from "firebase/firestore";
import {Collections, db} from "./db";

export type Contact = {
    id: string,
    title: string,
    name: string,
    message: string,
    phone: Number,
    createdAt: Number,
}

export async function addContact(data: Omit<Contact, "id">): Promise<string> {
    const docRef = await addDoc(collection(db, Collections.contacts), data);
    return docRef.id;
}

export async function deleteContact(id: string) {
    await deleteDoc(doc(db, Collections.contacts, id));
}

export async function getContact(id: string): Promise<Contact> {
    const docRef = doc(db, Collections.contacts, id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return {...docSnap.data(), id} as Contact;
    } else {
        throw new Error('No such document!')
    }
}

export async function updateContact(id: string, data: Partial<Omit<Contact, "id">>) {
    const docRef = doc(db, Collections.contacts, id);
    await updateDoc(docRef, data);
}

export async function getContacts(): Promise<Contact[]> {
    const q = query(collection(db, Collections.contacts), orderBy("createdAt", "desc"));
    const querySnapshot = await getDocs(q);
    const data: Contact[] = [];
    querySnapshot.forEach((doc) => data.push({id: doc.id, ...doc.data()} as Contact));
    return data;
}
