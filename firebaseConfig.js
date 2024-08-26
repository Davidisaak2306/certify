// Importa las funciones necesarias de Firebase
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

// Configuración de Firebase para tu aplicación web
const firebaseConfig = {
  apiKey: "AIzaSyCzG0wMJC_MHWIS6HQUdq3G043w0f5jg",
  authDomain: "certify-ad7e2.firebaseapp.com",
  projectId: "certify-ad7e2",
  storageBucket: "certify-ad7e2.appspot.com",
  messagingSenderId: "106356609976",
  appId: "1:106356609976:web:41d7b1d0bb06e5e0c89814d",
  measurementId: "G-KZDBG3MDP"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
