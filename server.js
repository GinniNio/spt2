const express = require('express');
const cheerio = require('cheerio');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const app = express();
const PORT = 3001;

app.get('/scrape', async (req, res) => {
  const target = req.query.url || 'https://sports.bet9ja.com/';
  try {
    const response = await fetch(target);
    if (!response.ok) throw new Error(`Request failed with ${response.status}`);
    const html = await response.text();
    const $ = cheerio.load(html);

    const matches = [];
    $('.coupon-row').each((i, el) => {
      const teams = $(el).find('.event-title').text().trim();
      const markets = {};
      $(el).find('.option-name').each((j, opt) => {
        const marketName = $(opt).text().trim();
        const odd = parseFloat($(opt).siblings('.option-price').text().trim());
        if (marketName && odd) {
          markets[marketName] = odd;
        }
      });
      if (teams) {
        matches.push({ match: teams, markets });
      }
    });

    res.json({ matches });
  } catch (err) {
    console.error('Error scraping', err.message);
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Scraper server running on http://localhost:${PORT}`);
});
