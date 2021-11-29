import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { Collections, db } from "./db";


export type Notes = {
  id: string;
  title: string;
  subject : string ; 
  semester : string ; 
  link : string ;
};

export async function addNotes(data: Omit<Notes, "id">): Promise<string> {
  const docRef = await addDoc(collection(db, Collections.notes), data);
  return docRef.id;
}

export async function deleteNotes(id: string) {
  await deleteDoc(doc(db, Collections.notes, id));
}

export async function getNotes(id: string): Promise<Notes> {
  const docRef = doc(db, Collections.notes, id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return { ...docSnap.data(), id } as Notes;
  } else {
    throw new Error("No such document!");
  }
}

export async function updateNotes(id: string, data: Partial<Omit<Notes, "id">>) {
  const docRef = doc(db, Collections.notes, id);
  await updateDoc(docRef, data);
}

export async function listNotes(): Promise<Notes[]> {
  const querySnapshot = await getDocs(collection(db, Collections.notes));
  const data: Notes[] = [];
  querySnapshot.forEach((doc) =>
    data.push({ id: doc.id, ...doc.data() } as Notes)
  );
  return data;
}
