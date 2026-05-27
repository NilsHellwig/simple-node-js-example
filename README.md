# Einfaches Beispiel zu Node.js/Express.js

Tipp 1: Zunächst den Ordner simple-node-js-example in VSCode öffnen.
Tipp 2: Zwei Terminals in VSCode öffnen, ein Terminal jeweils für das Frontend und Backend

## Frontend Starten: Terminal 1

```bash
cd frontend
```

1. `http-server` installieren um einen kleinen Webserver für das Frontend zu starten (Alternativ geht auch Live Server VSC Plugin)

```bash
npm install --global http-server
```

2. Lokalen Webserver starten in dem Ordner frontend

```bash
http-server
```

## Backend Starten: Terminal 2

1. Weiteres Terminal öffnen

```bash
cd backend
```

2. npm initialisieren (package.json erstellen)

```bash
npm init
```

3. Packages installieren

```
npm install cors express
```

4. `"type": "module",`

Set `"type": "module",` in package.json, damit wir ES6 Module verwenden können (import/export)

5. Skript ausführen bzw. Webserver starten

```bash
npm start
```

Info: Alternativ auch `npm run start` (`npm start` ist gemapped auf `npm run start`)
