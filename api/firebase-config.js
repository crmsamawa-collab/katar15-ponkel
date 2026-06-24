// api/firebase-config.js
module.exports = (req, res) => {
  res.status(200).json({
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
  });
};

#### Langkah 2: Tambahkan Environment Variables di Vercel
1. Buka dashboard proyek Anda di platform **Vercel**.
2. Masuk ke tab **Settings** -> **Environment Variables**.
3. Daftarkan kunci rahasia Firebase Anda dengan nama-nama variabel berikut:
   * `FIREBASE_API_KEY`
   * `FIREBASE_AUTH_DOMAIN`
   * `FIREBASE_PROJECT_ID`
   * `FIREBASE_STORAGE_BUCKET`
   * `FIREBASE_MESSAGING_SENDER_ID`
   * `FIREBASE_APP_ID`

#### Langkah 3: Alternatif Sederhana (Menggunakan `firebase-config.json`)
Jika Anda tidak ingin menggunakan serverless function, Anda cukup membuat file bernama `firebase-config.json` di sebelah file `index.html` Anda, isi dengan kredensial Firebase Anda, dan masukkan baris `firebase-config.json` tersebut ke dalam daftar berkas yang diabaikan (`.gitignore`) sebelum Anda melakukan git push ke GitHub. Aplikasi web ini akan otomatis mendeteksi dan memuatnya secara dinamis!