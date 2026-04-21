import { auth, db } from './app.js';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.12.0/firebase-auth.js";

import { doc, setDoc } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-firestore.js";

export async function signup(email, password) {
  const user = await createUserWithEmailAndPassword(auth, email, password);

  await setDoc(doc(db, "users", user.user.uid), {
    email,
    completed: [],
    score: 0
  });
}

export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}