import { initializeApp, cert, getApps } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';



export const firebaseAdmin = getApps().length
    ? getApps()[0]
    : initializeApp({
        credential: cert({
            type: "service_account",
            project_id: "creating-videos-festival",
            private_key_id: process.env.CVF2023_Firebase_PrivateKeyID,
            private_key: process.env.CVF2023_Firebase_PrivateKey.replace(/\\n/g, '\n'),
            client_email: process.env.CVF2023_Firebase_ClientEmail,
            client_id: "102084489359048392799",
            auth_uri: "https://accounts.google.com/o/oauth2/auth",
            token_uri: "https://oauth2.googleapis.com/token",
            auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
            client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-bbrtz%40creating-videos-festival.iam.gserviceaccount.com"
        })
    });


export const auth = getAuth(firebaseAdmin);
