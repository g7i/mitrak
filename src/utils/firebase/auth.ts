import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    updateProfile as updateData
} from "firebase/auth";
import {addUser, AuthDetails, AuthUser, getUser, Role, User} from "./users";

export const auth = getAuth();

export async function signIn(email: string, password: string): Promise<AuthUser> {
    const result = await signInWithEmailAndPassword(auth, email, password);
    console.log(result)
    const user = result.user;
    const userData: User = await getUser(user.uid);
    return {
        id: user.uid,
        role: Role.Student,
        // @ts-ignore
        createdAt: Number(user.metadata.createdAt),
        photoURL: user.photoURL,
        displayName: user.displayName,
        email: user.email,
        ...(userData ?? {}),
    };
}

export async function signUp(email: string, password: string, role?: Role): Promise<AuthUser> {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    const user = result.user;
    const userData: User = await getUser(user.uid);
    await addUser(user.uid, { role: role ?? Role.Student });
    return {
        id: user.uid,
        role: Role.Student,
        // @ts-ignore
        createdAt: Number(user.metadata.createdAt),
        photoURL: user.photoURL,
        displayName: user.displayName,
        email: user.email,
        ...(userData ?? {}),
    };
}

export async function updateProfile(data: AuthDetails) {
    const user = auth.currentUser!;
    const {displayName = user.displayName, photoURL = user.photoURL} = data;
    try {
        await updateData(user, {displayName, photoURL: photoURL as string ?? ''});
    } catch (error) {
        console.log(error);
    }
}

export async function logOut() {
    try {
        await signOut(auth);
    } catch (error) {
        console.log(error)
    }
}
