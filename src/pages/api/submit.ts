export const prerender = false; // Requiere backend (hybrid mode)

import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const { name, email, company, url, message } = data;

    if (!name || !email || !company || !message) {
      return new Response(JSON.stringify({ error: "Faltan campos requeridos" }), { status: 400 });
    }

    // 1. Configurar credenciales desde las variables de entorno
    const clientId = import.meta.env.GOOGLE_CLIENT_ID;
    const clientSecret = import.meta.env.GOOGLE_CLIENT_SECRET;
    const refreshToken = import.meta.env.GOOGLE_REFRESH_TOKEN;
    const sheetId = import.meta.env.GOOGLE_SHEET_ID;

    if (!clientId || !clientSecret || !refreshToken || !sheetId) {
      console.error("Faltan variables de entorno para Google Sheets");
      return new Response(JSON.stringify({ error: "Error de configuración de servidor" }), { status: 500 });
    }

    // 2. Obtener Access Token fresco (Edge Fetch)
    const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        client_id: clientId,
        client_secret: clientSecret,
        refresh_token: refreshToken,
        grant_type: 'refresh_token'
      })
    });

    if (!tokenResponse.ok) {
        const errorText = await tokenResponse.text();
        console.error("Error renovando token:", errorText);
        return new Response(JSON.stringify({ error: "Fallo autenticación a Google" }), { status: 500 });
    }

    const tokenData = await tokenResponse.json();
    const accessToken = tokenData.access_token;

    // 3. Insertar datos en Google Sheets
    // Estructura esperada en la hoja: Fecha | Nombre | Correo | Empresa | URL | Mensaje
    const date = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
    const values = [[date, name, email, company, url || "No provista", message]];

    const sheetsResponse = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/Sheet1!A1:append?valueInputOption=USER_ENTERED`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        values
      })
    });

    if (!sheetsResponse.ok) {
        const errorText = await sheetsResponse.text();
        console.error("Error conectando a Sheets API:", errorText);
        return new Response(JSON.stringify({ error: "Fallo al guardar en Google Sheets" }), { status: 500 });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error("Endpoint submit error:", error);
    return new Response(JSON.stringify({ error: "Error interno del servidor" }), { status: 500 });
  }
};
