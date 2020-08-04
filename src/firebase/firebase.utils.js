import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
        apiKey: "AIzaSyBz9ok4hd2YLhJ41yVd4zTfJGCToVuCooU",
        authDomain: "my-react-app-68046.firebaseapp.com",
        databaseURL: "https://my-react-app-68046.firebaseio.com",
        projectId: "my-react-app-68046",
        storageBucket: "my-react-app-68046.appspot.com",
        messagingSenderId: "525547682232",
        appId: "1:525547682232:web:db8f804bf1199f0da7774d",
        measurementId: "G-S3JCPLJJM5"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
        if (!userAuth)
            return; //if the user does not exist
        
        const userRef = firestore.doc(`users/${userAuth.uid}`);
        const snapShot = await userRef.get();
        
        if (!snapShot.exists){
          const { displayName, email } = userAuth;
          const createdAt = new Date();
          
        try {
          await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
                })
        } catch (error) {
                console.log('Error creating user: ', error.message);
        }
       }

       return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;