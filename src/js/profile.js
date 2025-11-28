import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getAuth, onAuthStateChanged } from "firebase/auth";

document.addEventListener('DOMContentLoaded', () => { //waits for html page to be fully loaded
  //my main variables
  const auth = getAuth(); //authentication instance
  const db = getFirestore(); //database instance
  //!!!!!!!!!!!wont use storage instance since i am gonna do base 64 string to store imgs!!!!!


  const pfpImage = document.getElementById('pfpImage');
  const resetBtn = document.getElementById('reset-pfp');
  const pfpInput = document.getElementById('upload-pfp');

  const placeholder = "/src/assets/images/pfp-paceholder.jpg";

  pfpImage.addEventListener('click', () => {
    console.log("clicked image"); 
    pfpInput.click(); //trigger file input click
  });


  //the upload to database function
  pfpInput.addEventListener("change", async () => {
    const file = pfpInput.files[0]; // Get the selected file
    if (!file) return alert("No file selected");

    const user = auth.currentUser;
    if (!user) return alert("u need to log in");

    const reader = new FileReader(); //creates file reader object (like scanner in java)
    reader.onload = async (e) => { //function when file is done reading. (e contains result of reading the file)
      const base64String = e.target.result; // Get base64 string from file being read (e.target  = reader object)

      await setDoc(doc(db, "users", user.uid), {
      pfp: base64String
      }, { merge: true });

      pfpImage.src = base64String; // Update pfp on page
    }
    reader.readAsDataURL(file); //triggers the callback function passing file into it
  })




    // make it so user has to be logged in to change pfp
    onAuthStateChanged(auth, async (user) => {
      if (!user) return alert("u need to log in");

      const userDocRef = doc(db, "users", user.uid);//pointer to user doc
      const userDocSnap = await getDoc(userDocRef);//read from pointer

      if (userDocSnap.exists()) { //if there is data in the document
        const data = userDocSnap.data();//get data

        if (data.pfp) {
          pfpImage.src = data.pfp; //set pfp image source to the data from firestore database
        } 
        else {
          pfpImage.src = "/src/assets/images/pfp-paceholder.jpg"; //my placeholder png
        }
      }
    });


  // Reset profile picture
  resetBtn.addEventListener("click", async () => {
    const user = auth.currentUser;
    if (!user) return alert("u need to log in");

    const placeholder = "/src/assets/images/pfp-paceholder.jpg";
    pfpImage.src = placeholder;

    // Clear pfp from Firestore
    await setDoc(doc(db, "users", user.uid), { pfp: null }, { merge: true });
  });
});