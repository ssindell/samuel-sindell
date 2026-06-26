// Samuel Sindell — personal website
// Minimal Express server. All copy lives in /content/site.js so it can be
// edited without touching markup. Run: npm install && npm start

const path = require('path');
const express = require('express');
const site = require('./content/site');

const app = express();
const PORT = process.env.PORT || 3000;

// Views (EJS) + static assets
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// Single-page site. Everything renders from the `site` content object.
app.get('/', (req, res) => {
  res.render('index', { site, year: new Date().getFullYear() });
});

// Light 404 — keeps the brand even on a wrong URL.
app.use((req, res) => {
  res.status(404).render('index', { site, year: new Date().getFullYear() });
});

app.listen(PORT, () => {
  console.log(`\n  Samuel Sindell — site running`);
  console.log(`  → http://localhost:${PORT}\n`);
});
