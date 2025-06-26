import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from 'uuid';

const firebaseConfig = {
  apiKey: "AIzaSyAlWs1tXBP_aqUCuZIuY1DBCdsUeFUBmmE",
  authDomain: "sagardoy-lms.firebaseapp.com",
  databaseURL: "https://sagardoy-lms-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "sagardoy-lms",
  storageBucket: "sagardoy-lms.appspot.com",
  messagingSenderId: "634494503274",
  appId: "1:634494503274:web:2ef302f23eecec2bbfbd13",
  measurementId: "G-KPZRBCR3GD"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export async function uploadFile(file: File): Promise<string> {
  const storageRef = ref(storage, `sagardoy-school-cvs/${uuidv4()}`);
  await uploadBytes(storageRef, file);
  return await getDownloadURL(storageRef);
}