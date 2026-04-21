import { getUserData } from './db.js';
import { aiRecommend } from './ai.js';

async function load() {
  const data = await getUserData();

  progress.innerText =
    "Completed: " + (data.completed?.length || 0);

  const rec = aiRecommend(data);

  document.body.innerHTML += `<p>${rec}</p>`;
}

load();