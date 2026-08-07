# Pubblicazione su Cloudflare

Questo concept usa rendering server-side, quindi va pubblicato come **Worker** dalla sezione **Workers & Pages** di Cloudflare.

## Metodo consigliato

1. Estrai lo ZIP e apri un terminale nella cartella del progetto.
2. Installa Node.js 22.13 o successivo.
3. Esegui `npm install`.
4. Esegui `npx wrangler login` e autorizza il tuo account Cloudflare.
5. Esegui `npm run build`.
6. Esegui `npx wrangler deploy --config dist/server/wrangler.json`.

Wrangler mostrerà l'indirizzo pubblico del progetto al termine della pubblicazione. Puoi poi collegare un dominio personalizzato dal pannello Cloudflare.

## Test locale

Esegui `npm run dev` e apri `http://localhost:3000`.

## Nota

Il progetto non contiene credenziali Cloudflare e non dipende dal precedente dominio `chatgpt.site`.
