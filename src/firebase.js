import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyD6ZdRDJfs_HQ7UMSlIZZlFoIszTjLid3g",
    authDomain: "facebook-clone-7d40f.firebaseapp.com",
    projectId: "facebook-clone-7d40f",
    storageBucket: "facebook-clone-7d40f.appspot.com",
    messagingSenderId: "222778911605",
    appId: "1:222778911605:web:2614b4be61fa64060c013c"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  export {app};
 