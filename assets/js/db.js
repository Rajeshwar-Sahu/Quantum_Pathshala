import { db, auth } from './app.js';
import { doc, updateDoc, arrayUnion, getDoc }
from "https://www.gstatic.com/firebasejs/12.12.0/firebase-firestore.js";

export async function markComplete(id) {
  await updateDoc(doc(db, "users", auth.currentUser.uid), {
    completed: arrayUnion(id)
  });
}

export async function getUserData() {
  const snap = await getDoc(doc(db, "users", auth.currentUser.uid));
  return snap.data();
}