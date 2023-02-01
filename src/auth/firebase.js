
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword,
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile, } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrECFLEN_mGS9YAv0fzODCeow64tWjAGg",
  authDomain: "dream-home-furniture.firebaseapp.com",
  databaseURL: "https://dream-home-furniture-default-rtdb.firebaseio.com",
  projectId: "dream-home-furniture",
  storageBucket: "dream-home-furniture.appspot.com",
  messagingSenderId: "755473298894",
  appId: "1:755473298894:web:b160ea7bf5e03bda24e79f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const createUser = async (email, password, navigate, displayName) => {
    //? yeni bir kullanıcı oluşturmak için kullanılan method
    try {
      let userCredential = await createUserWithEmailAndPassword (
      auth,
      email,
      password
    );
      //? kullanıcı profilini güncellemek için kullanılan firebase metodu
      await updateProfile(auth.currentUser, {
        displayName: displayName,
      });
      navigate("/");
    //   toastSuccessNotify("Registered successfully!");
      console.log(userCredential);
    } catch (error) {
    //   toastErrorNotify(error.message);
      alert(error.message);
    }
  };

  export const signIn = async (email, password,navigate) => {
    //? user daha önce kayıt olmuş ve login yapmak istediğinde
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("hellooo")
      navigate("/");
    //   toastSuccessNotify("Logged in successfully!");
    } catch (error) {
    //   toastErrorNotify(error.message);
    alert(error.message);
    }
  };

  export const forgotPassword = (email) => {
    //? Email yoluyla şifre sıfırlama için kullanılan firebase metodu
    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent!
        // toastWarnNotify("Please check your mail box!");
        alert("Please check your mail box!");
      })
      .catch((err) => {
        // toastErrorNotify(err.message);
        alert(err.message);

      });
  };
  