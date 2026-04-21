import { db } from './app.js';
import {
  collection, addDoc, getDocs, deleteDoc, doc
} from "https://www.gstatic.com/firebasejs/12.12.0/firebase-firestore.js";

window.addChapter = async () => {
  await addDoc(collection(db, "chapters"), {
    title: title.value,
    subject: subject.value,
    content: content.value,
    video: video.value
  });
  load();
};

async function load() {
  const snap = await getDocs(collection(db, "chapters"));

  let html = "";

  snap.forEach(d => {
    html += `
      <div>
        ${d.data().title}
        <button onclick="del('${d.id}')">X</button>
      </div>
    `;
  });

  list.innerHTML = html;
}

window.del = async (id) => {
  await deleteDoc(doc(db, "chapters", id));
  load();
};

load();