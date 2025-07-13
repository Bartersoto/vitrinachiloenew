// Configuración Firebase clásica (para usar con GitHub Pages)

const firebaseConfig = {
  apiKey: "AIzaSyDMcOSCXXx02REkqWjqAJ9LIxGXmNgE2DA",
  authDomain: "vitrina-chiloe-nueva.firebaseapp.com",
  projectId: "vitrina-chiloe-nueva",
  storageBucket: "vitrina-chiloe-nueva.appspot.com",
  messagingSenderId: "16256233627",
  appId: "1:16256233627:web:ca7a0fa9cd552cbade563e"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
