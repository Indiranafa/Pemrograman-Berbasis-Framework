// Fungsi reusable untuk create user
export async function createUser(userData: any) {
  try {
    if (userData.password) {
      userData.password = await bcrypt.hash(userData.password, 10);
    }
    await addDoc(collection(db, "users"), userData);
    return { status: true, message: "User created" };
  } catch (err: any) {
    return { status: false, message: err.message };
  }
}

// Fungsi reusable untuk update user
export async function updateUser(userId: string, userData: any) {
  try {
    await updateDoc(doc(db, "users", userId), userData);
    return { status: true, message: "User updated" };
  } catch (err: any) {
    return { status: false, message: err.message };
  }
}

// Fungsi untuk menambah user dengan role editor
export async function createEditorUser({ email, fullname, password }: { email: string, fullname: string, password: string }) {
  return await createUser({ email, fullname, password, role: "editor" });
}
import {
  getFirestore, collection, 
  getDocs, Firestore, getDoc, doc,
  query, addDoc, where, updateDoc,
} from "firebase/firestore";
import app from "./firebase";
import bcrypt from "bcrypt";

const db = getFirestore(app);

export async function retrieveProducts(collectionName: string) {
  const snapshot = await getDocs(collection(db, collectionName));
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data()
  }));
  return data;
}

export async function retrieveDataById(collectionName: string, id: string) {
  const snapshot = await getDoc(doc(db, collectionName, id));
  const data = snapshot.data();
  return data;
}

export async function signIn(email: string) {
  const q = query(collection(db, "users"), where("email", "==", email));
  const querySnapshot = await getDocs(q);
  const data = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  if (data) {
    return data[0];
  } else {
    return null;
  }
}

export async function signUp(
  userData: {
    email: string;
    fullname: string;
    password: string;
    role?: string;
  },
  callback: Function,
) {
  const q = query(
    collection(db, "users"),
    where("email", "==", userData.email),
  );
  const querySnapshot = await getDocs(q);
  const data = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  if (data.length > 0) {
    callback({
      status: "error",
      message: "Email already exists",
    });
  } else {
    userData.role = userData.role || "member";
    const result = await createUser(userData);
    if (result.status) {
      callback({ status: "success", message: "User registered successfully" });
    } else {
      callback({ status: "error", message: result.message });
    }
  }
}

export async function signInWithGoogle(userData: any, callback: any) {
  try {
    const q = query(
      collection(db, "users"),
      where("email", "==", userData.email),
    );
    const querySnapshot = await getDocs(q);
    const data: any = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    if (data.length > 0) {
      userData.role = data[0].role;
      await updateUser(data[0].id, userData);
      callback({
        status: true,
        message: "User registered and logged in with Google",
        data: userData,
      });
    } else {
      userData.role = "member";
      const result = await createUser(userData);
      callback({
        status: result.status,
        message: "User registered and logged in with Google",
        data: userData,
      });
    }
  } catch (error: any) {
    callback({
      status: false,
      message: "Failed to register user with Google",
    });
  }
}