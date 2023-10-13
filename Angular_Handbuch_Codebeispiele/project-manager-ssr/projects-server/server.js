const jsonServer = require('json-server');
// Erzeugt einen Express-Server
const server = jsonServer.create();
// Default-Einstellungen für den Server aktivieren
// (logger, static, cors and no-cache)
server.use(jsonServer.defaults())
//db.json laden und Endpunkte unter /api bereitstellen
const router = jsonServer.router('db.json');
server.use('/api', router);

server.listen(process.env.HOST || 3000);
