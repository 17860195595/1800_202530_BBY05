import { db } from './firebaseConfig.js';
import { collection, addDoc, doc, getDoc, setDoc } from "firebase/firestore";
import { auth } from "./firebaseConfig.js";
import { onAuthStateChanged, } from "firebase/auth";
  
  
const form = document.getElementById("myForm");

form.addEventListener("submit", async (eventVariable) =>{
    eventVariable.preventDefault();
    console.log("eventVariable", eventVariable);

    const name = form.name.value;
    const lastname = form.lastname.value;
    const username = form.username.value;

    const currentUser = auth.currentUser;
    if (!currentUser) {
        alert("you need to be logged in");
        return;
    }

    try {//await makes it async
        await setDoc(doc(db, "users", currentUser.uid), {
            name: name,
            lastname: lastname,
            username: username,
            createdAt: new Date()
        }, {merge: true});
                
        if (nameEl) nameEl.textContent = name || ''; //if dom exists update it to nameel or into blank 9this is for auto update)
        if (lastnameEl) lastnameEl.textContent = lastname || '';
        if (usernameEl) usernameEl.textContent = username || '';
        alert("saved to firestore")
        form.reset();
    
    }   catch (err) {
        console.error(err);
        alert("error saving creds to firestore")
    }
});

// Elements where i show data
const nameEl = document.querySelector('.show-cred-container div:nth-of-type(2) > p');
const lastnameEl = document.querySelector('.show-cred-container div:nth-of-type(3) > p');
const usernameEl = document.querySelector('.show-cred-container div:nth-of-type(4) > p');

onAuthStateChanged(auth, async (user) => {
    if (!user) {
        console.log("needa log in first");
        return;
    }

    const userDocRef = doc(db, "users", user.uid); // gets pointer
    const userDocSnap = await getDoc(userDocRef); // reads data from pointer

    if (userDocSnap.exists()) {
        const userData = userDocSnap.data(); // gets data
        const authName = user.displayName || '';
        const nameToShow = authName || userData.username || userData.name || '';

        nameEl.textContent = userData.name;
        lastnameEl.textContent = userData.lastname;
        usernameEl.textContent = userData.username || authName;
    } else {
        console.log("missing document");
    }
})

