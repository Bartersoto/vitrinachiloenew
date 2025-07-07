// Configuración de tu Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDyjgJP0HV2PBoZsPaHWr8INtyDaFH6Bmo",
  authDomain: "vitrinachiloenew.firebaseapp.com",
  projectId: "vitrinachiloenew",
  storageBucket: "vitrinachiloenew.firebasestorage.app",
  messagingSenderId: "715706183231",
  appId: "1:715706183231:web:b3d903858625bd5b17d28a"
};

// Inicializa Firebase (usando SDK clásico con CDN)
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
