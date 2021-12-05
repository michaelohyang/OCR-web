import {
  initializeApp
} from "@firebase/app";
import {
  getDatabase,
  goOffline,
  goOnline,
  ref,
  child,
  set,
  get,
  update,
  remove
} from "@firebase/database";

//replace below configs w eniv vals
const firebaseConfig = {
  apiKey: "AIzaSyDDe56RVJiIgHV23nxmP4eCCNDzrhTIqH4",
  authDomain: "my-second-proj-e1492.firebaseapp.com",
  projectId: "my-second-proj-e1492",
  storageBucket: "my-second-proj-e1492.appspot.com",
  messagingSenderId: "527197570916",
  appId: "1:527197570916:web:ab951f0e17a3462157dc71",
  measurementId: "G-2KHNDV1WHW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app)
const dbRef = ref(db);

async function getJsonData(ref: string) {
  //return JSON obj of the data from firebase under ref
  goOnline(db)
  try {
    let snapshot = await get(child(dbRef, "" + ref))
    if (snapshot.exists()) {
      goOffline(db)
      return snapshot.val();
    } else {
      goOffline(db)
      return {}
    }
  } catch (e) {
    goOffline(db)
    console.error(e);
  }
}

function overwriteData(ref: string, key: string, value: any) {
  const updates: any = {};
  updates[`${key}`] = value;
  goOnline(db)
  set(child(dbRef, ref), updates).then(() => {
      console.log("Data saved successfully!")
      goOffline(db)
    })
    .catch((error) => {
      console.log("The write failed..." + error)
      goOffline(db)
    });
}

function writeNewPost(ref: string, key: string, value: any) {
  const updates: any = {};
  updates[`${key}`] = value;
  goOnline(db)
  update(child(dbRef, ref), updates).then(() => {
      console.log("Data saved successfully!")
      goOffline(db)
    })
    .catch((error) => {
      console.log("The write failed... " + error)
      goOffline(db)
    });
}

function deleteData(ref: string) {
  remove(child(dbRef, ref)).then((data) => {
      console.log("Data removed successfully! ", data)
      goOffline(db)
    })
    .catch((error) => {
      console.log("The removed failed... " + error)
      goOffline(db)
    });
}

module.exports = {
  dbRef,
  getJsonData,
  writeNewPost,
  overwriteData,
  deleteData
};