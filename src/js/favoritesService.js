// favoritesService.js - Firestore favorites CRUD
import { db } from "./firebaseConfig.js";
import {
  collection,
  query,
  where,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  orderBy,
} from "firebase/firestore";

// Build subcollection path: users/{userId}/favorites
export function favoritesRef(userId) {
  return collection(db, "users", userId, "favorites");
}

// Helper to build a unique key for each favorite based on lat/lng
export function buildDestinationKey(lat, lng) {
  if (typeof lat !== "number" || typeof lng !== "number") return "";
  return `${Number(lat).toFixed(5)},${Number(lng).toFixed(5)}`;
}

// Check if a favorite exists by lat/lng
export async function isFavorite(userId, lat, lng) {
  if (!db) return false;

  const key = buildDestinationKey(lat, lng);
  const ref = favoritesRef(userId);

  const q = query(ref, where("key", "==", key));
  const snap = await getDocs(q);

  return !snap.empty;
}

// Add a new favorite
export async function addFavorite(userId, favoritePayload) {
  if (!db) throw new Error("DB not available");

  const ref = favoritesRef(userId);
  return await addDoc(ref, favoritePayload);
}

// Remove a favorite by lat/lng
export async function removeFavoriteByKey(userId, lat, lng) {
  if (!db) return;

  const key = buildDestinationKey(lat, lng);
  const ref = favoritesRef(userId);

  const q = query(ref, where("key", "==", key));
  const snap = await getDocs(q);

  const tasks = [];
  snap.forEach((d) => {
    tasks.push(deleteDoc(doc(favoritesRef(userId), d.id)));
  });

  await Promise.all(tasks);
}

// List all favorites ordered by savedAt descending
export async function listFavoritesDesc(userId) {
  if (!db) return [];

  const ref = favoritesRef(userId);

  const q = query(ref, orderBy("savedAt", "desc"));

  const snap = await getDocs(q);
  const result = [];
  snap.forEach((d) => result.push({ id: d.id, ...d.data() }));
  return result;
}
