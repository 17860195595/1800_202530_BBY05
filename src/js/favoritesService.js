// favoritesService.js - Firestore favorites CRUD
import { db } from './firebaseConfig.js';
import { collection, query, where, getDocs, addDoc, deleteDoc, doc, orderBy } from 'firebase/firestore';

const COLLECTION = 'favorites';

export function buildDestinationKey(lat, lng) {
  if (typeof lat !== 'number' || typeof lng !== 'number') return '';
  return `${Number(lat).toFixed(5)},${Number(lng).toFixed(5)}`;
}

export async function isFavorite(lat, lng) {
  if (!db) return false;
  const key = buildDestinationKey(lat, lng);
  const ref = collection(db, COLLECTION);
  const q = query(ref, where('key', '==', key));
  const snap = await getDocs(q);
  return !snap.empty;
}

export async function addFavorite(favoritePayload) {
  if (!db) throw new Error('DB not available');
  const ref = collection(db, COLLECTION);
  return await addDoc(ref, favoritePayload);
}

export async function removeFavoriteByKey(lat, lng) {
  if (!db) return;
  const key = buildDestinationKey(lat, lng);
  const ref = collection(db, COLLECTION);
  const q = query(ref, where('key', '==', key));
  const snap = await getDocs(q);
  const tasks = [];
  snap.forEach(d => tasks.push(deleteDoc(doc(db, COLLECTION, d.id))));
  await Promise.all(tasks);
}

export async function listFavoritesDesc() {
  if (!db) return [];
  const ref = collection(db, COLLECTION);
  const q = query(ref, orderBy('savedAt', 'desc'));
  const snap = await getDocs(q);
  const result = [];
  snap.forEach(d => result.push({ id: d.id, ...d.data() }));
  return result;
}


