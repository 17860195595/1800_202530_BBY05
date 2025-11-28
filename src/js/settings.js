import { db } from './firebaseConfig.js';
import { collection, addDoc, doc, getDoc, setDoc, deleteField, updateDoc } from "firebase/firestore";
import { auth } from "./firebaseConfig.js";
import { onAuthStateChanged, updateProfile } from "firebase/auth";

// query selectors
const nameEl = document.querySelector('.show-cred-container div:nth-of-type(2) > p');
const lastnameEl = document.querySelector('.show-cred-container div:nth-of-type(3) > p');
const usernameEl = document.querySelector('.show-cred-container div:nth-of-type(4) > p');
  
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
                
        if (nameEl) nameEl.textContent = name || ''; //if dom exists update it to nameel or into blank (this is for auto update)
        if (lastnameEl) lastnameEl.textContent = lastname || '';
        if (usernameEl) usernameEl.textContent = username || '';

        //grabs username from database
        const userDocRef = doc(db, "users", currentUser.uid) //gets pointer
        const userDocSnap = await getDoc(userDocRef); //reads from pointer
        const userData = userDocSnap.data(); //gets data

        //if username exists delete displayName field
        if(userData.username) {
            await updateDoc(doc(db, 'users', currentUser.uid), { displayName: deleteField() });
            await updateProfile(currentUser, { displayName: null})
        }
        
        alert("saved to firestore")
        form.reset();
    
    }   catch (err) {
        console.error(err);
        alert("error saving creds to firestore")
    }
});


//stuff that puts DOM on the page
onAuthStateChanged(auth, async (user) => { //it already knows user == current user so no need to define current user
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
        usernameEl.textContent = userData.username || nameToShow;;

    } else {
        console.log("missing document");
    }
})

