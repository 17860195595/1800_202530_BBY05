import { auth, db, storage } from "./firebaseConfig.js";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { onAuthStateChanged } from "firebase/auth";

document.addEventListener("DOMContentLoaded", () => {
  const pfpImage = document.getElementById("pfp-image");
  const uploadInput = document.getElementById("upload-pfp");
  const resetBtn = document.getElementById("reset-pfp");

  let currentUser = null;

  // Username fields mapping
  const fields = [
    { id: "username", collection: "username" },
    { id: "username2", collection: "placeholder1" },
    { id: "username3", collection: "placeholder2" },
    { id: "username4", collection: "placeholder3" },
    { id: "username5", collection: "placeholder4" },
    { id: "username6", collection: "placeholder5" },
  ];

  // make it so user has to be logged in to change pfp
  onAuthStateChanged(auth, async (user) => {
    if (!user) return;
    currentUser = user;

    // loads the pfp from firestore
    const pfpDocRef = doc(db, "pfp", user.uid);
    try {
      const pfpSnap = await getDoc(pfpDocRef);
      if (pfpSnap.exists() && pfpSnap.data().image) {
        pfpImage.src = pfpSnap.data().image;
      }
    } catch (err) {
      console.error("Error loading profile picture:", err);
    }

    // loads username fields 
    fields.forEach(({ id, collection }) => {
      const input = document.getElementById(id);
      const docRef = doc(db, collection, user.uid);

      (async () => {
        try {
          const snap = await getDoc(docRef);
          if (snap.exists() && snap.data().value) {
            input.value = snap.data().value;
          }
        } catch (err) {
          console.error(`Error loading ${id}:`, err);
        }
      })();

      input.addEventListener("change", async () => {
        try {
          await setDoc(docRef, { value: input.value }, { merge: true });
        } catch (err) {
          console.error(`Error saving ${id}:`, err);
        }
      });
    });
  });

  // listner for picking new pfp
  pfpImage.addEventListener("click", () => uploadInput.click());

  // makes file input into the actuall pfp
  uploadInput.addEventListener("change", async (event) => {
    const file = event.target.files[0];
    if (!file || !currentUser) return;

    //this makes it so it shows up instantly
    const reader = new FileReader();
    reader.onload = (e) => {
      pfpImage.src = e.target.result; // Update placeholder instantly
    };
    reader.readAsDataURL(file);

    try {
      // Upload to Firebase Storage
      const storageRef = ref(storage, `profilePictures/${currentUser.uid}`);
      await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(storageRef);

      // Save download URL in Firestore
      const pfpDocRef = doc(db, "pfp", currentUser.uid);
      await setDoc(pfpDocRef, { image: downloadURL }, { merge: true });

      // Force browser to refresh image
      pfpImage.src = downloadURL + "?t=" + new Date().getTime();
    } catch (err) {
      console.error("Error uploading profile picture:", err);
    }
  });

  // pfp reset button
  resetBtn.addEventListener("click", async () => {
    const placeholder = "/src/assets/images/pfp-paceholder.jpg";
    pfpImage.src = placeholder;

    if (!currentUser) return;
    const pfpDocRef = doc(db, "pfp", currentUser.uid);
    await setDoc(pfpDocRef, { image: null }, { merge: true });
  });
});
