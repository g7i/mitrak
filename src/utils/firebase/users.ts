import {setDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc} from "firebase/firestore";
import {Collections, db} from "./db";

export enum Semester {
    First = 1,
    Second,
    Third,
    Fourth,
    Fifth,
    Sixth,
    Seventh,
    Eighth,
}

export enum Batch {
    A = 'A',
    B = 'B',
}

export enum Branch {
    CSE = 'CSE',
    ME = 'ME',
    EE = 'EE',
    CE = 'CE',
    ECE = 'ECE',
}

export enum Role {
    Admin = 'admin',
    Student = 'student',
    Mentor = 'mentor',
    Faculty = 'faculty',
    Other = 'other',
}

export type User = {
    id: string,
    contact?: Number,
    semester?: Semester,
    batch?: Batch,
    branch?: Branch,
    role: Role,
    createdAt: Number,
    isValid?: boolean,
}

export type AuthDetails = {
    displayName: string,
    photoURL?: string,
    email: string,
};

export type AuthUser = User & AuthDetails;

export async function addUser(id: string, data: Omit<User, "id" | "createdAt">) {
    await setDoc(doc(db, Collections.users, id), data, { merge: true });
}

export async function deleteUser(id: string) {
    await deleteDoc(doc(db, Collections.users, id));
}

export async function getUser(id: string): Promise<User> {
    const docRef = doc(db, Collections.users, id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return {...docSnap.data(), id} as User;
    } else {
        throw new Error('No such document!')
    }
}

export async function updateUser(id: string, data: Omit<Partial<User>, "id">) {
    const docRef = doc(db, Collections.users, id);
    await updateDoc(docRef, data);
}

export async function getUsers(): Promise<User[]> {
    const querySnapshot = await getDocs(collection(db, Collections.users));
    const data: User[] = [];
    querySnapshot.forEach((doc) => data.push({id: doc.id, ...doc.data()} as User));
    return data;
}
