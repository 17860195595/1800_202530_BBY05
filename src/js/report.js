import { db } from "./firebaseConfig.js";
import { onAuthReady } from "../js/authentication.js";
import {
  collection,
  query,
  where,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  orderBy,
  getDoc,
  serverTimestamp,
} from "firebase/firestore";
import { showSuccess, showError } from "./notifications.js";
import { getMainPath } from "../utils/navigation.js";
// Initialize Firebase
onAuthReady((user) => {
  if (!user) {
    showError("You must be logged in to submit a report.");
    return;
  }

  // Handle form submission
  document
    .getElementById("reportForm")
    .addEventListener("submit", async (e) => {
      e.preventDefault();

      //for username field grabber from colelction
      const userDocRef = doc(db, "users", user.uid) //gets pointer
      const userDocSnap = await getDoc(userDocRef); //reads from pointer
      const userData = userDocSnap.data(); //gets data


      // Collect input values
      const username = userData.username || user.email || user.uid;
      const type = document.getElementById("type").value;
      const comment = document.getElementById("comment").value;
      
      navigator.geolocation.getCurrentPosition(
        async (pos) => {
          const lat = pos.coords.latitude;
          const lng = pos.coords.longitude;

          try {
            // Add document to Firestore
            await addDoc(collection(db, "trafficReports"), {
              username,
              type,
              comment,
              lat,
              lng,
              createAt: serverTimestamp(),
            });

            showSuccess("Report sent successfully!");
            e.target.reset();


            // 跳转到 main page
            setTimeout(() => {
              window.location.href = getMainPath();
            }, 1000);
          } catch (error) {
            console.error("Error adding document: ", error);
            showError("Failed to send report.");
          }
        },
        (error) => {
          console.error("Error getting location: ", error);
          showError("Failed to get your location. Please enable location services.");
        }
      );
    });
});
