import { google } from 'googleapis';
import readline from 'readline';

// Credenciales proporcionadas por el usuario
const keys = {
  client_id: "TU_CLIENT_ID_AQUI", // REEMPLAZAR ANTES DE USAR
  project_id: "dulcet-equinox-480418-f6",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_secret: "TU_CLIENT_SECRET_AQUI", // REEMPLAZAR ANTES DE USAR
  redirect_uris: ["http://localhost"]
};

const oauth2Client = new google.auth.OAuth2(
  keys.client_id,
  keys.client_secret,
  keys.redirect_uris[0]
);

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];

const url = oauth2Client.generateAuthUrl({
  access_type: 'offline', // Crucial para obtener el refresh_token
  scope: SCOPES,
  prompt: 'consent' // Fuerza la pantalla de consentimiento para asegurar que recibimos el refresh_token
});

console.log('1. Abre la siguiente URL en tu navegador:');
console.log('\n', url, '\n');
console.log('2. Autoriza la aplicación y permite el acceso a Google Sheets.');
console.log('3. Te redirigirá a http://localhost/?code=... (Puede que la página dé error, es normal).');
console.log('4. Copia el valor del parámetro "code" en la barra de direcciones y pégalo abajo.\n');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Ingresa el código (code=...): ', async (code) => {
  try {
    const { tokens } = await oauth2Client.getToken(code);
    console.log('\n¡Autenticación exitosa!\n');
    console.log('Copia estos valores a tu archivo .env local o en las variables de entorno de Cloudflare Pages:\n');
    console.log(`GOOGLE_CLIENT_ID="${keys.client_id}"`);
    console.log(`GOOGLE_CLIENT_SECRET="${keys.client_secret}"`);
    console.log(`GOOGLE_REFRESH_TOKEN="${tokens.refresh_token}"`);
    console.log(`GOOGLE_SHEET_ID="1OoPBGWKqFB87-9yCSH2MRVl-CW9TuxZDZSNHWEhMJvc"`);
  } catch (error) {
    console.error('Error al obtener el token:', error.message);
  } finally {
    rl.close();
  }
});
