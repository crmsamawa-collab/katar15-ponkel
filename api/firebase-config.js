// api/firebase-config.js
module.exports = (req, res) => {
    // Mengatur header CORS agar diizinkan diakses dari domain frontend Anda
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
    res.setHeader('Content-Type', 'application/json');

    // Kirim konfigurasi Firebase dari Environment Variables Vercel
    res.status(200).json({
        apiKey: process.env.FIREBASE_API_KEY,
        authDomain: process.env.FIREBASE_AUTH_DOMAIN,
        projectId: process.env.FIREBASE_PROJECT_ID,
        storageBucket: typeof process.env.FIREBASE_STORAGE_BUCKET !== 'undefined' ? process.env.FIREBASE_STORAGE_BUCKET : "",
        messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.FIREBASE_APP_ID
    });
};
