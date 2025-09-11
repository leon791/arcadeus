import { 
  GoogleAuthProvider, 
  signInWithPopup, 
  signOut as firebaseSignOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from 'firebase/auth';
import { auth } from './config';

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return {
      success: true,
      user: result.user,
      error: null
    };
  } catch (error) {
    return {
      success: false,
      user: null,
      error: error.message
    };
  }
};

export const signInWithEmail = async (email, password) => {
  try {
    const result = await signInWithEmailAndPassword(auth, email, password);
    return {
      success: true,
      user: result.user,
      error: null
    };
  } catch (error) {
    return {
      success: false,
      user: null,
      error: error.message
    };
  }
};

export const registerWithEmail = async (email, password) => {
  try {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    return {
      success: true,
      user: result.user,
      error: null
    };
  } catch (error) {
    return {
      success: false,
      user: null,
      error: error.message
    };
  }
};

export const signOut = async () => {
  try {
    await firebaseSignOut(auth);
    return {
      success: true,
      error: null
    };
  } catch (error) {
    return {
      success: false,
      error: error.message
    };
  }
};

export const getCurrentUser = () => {
  return auth.currentUser;
};

export const onAuthStateChange = (callback) => {
  return onAuthStateChanged(auth, callback);
};