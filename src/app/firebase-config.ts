import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { environment } from '../environments/environment';

const firebaseApp = getApps().length ? getApp() : initializeApp(environment.firebase);

export const db = getFirestore(firebaseApp);
