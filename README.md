# spt2

This repository contains a demonstration of a data‑driven betting pipeline.

## Usage

Open `index.html` in a modern browser to experiment with the demo. Use the
file picker above the **Load Matches** button to select a JSON file containing
match data. After selecting your file, click **Load Matches** to analyse those
games.

### Web Scraping

This repo includes a small Node server (`server.js`) that scrapes
`https://sports.bet9ja.com/` for the day’s fixtures, markets and odds.
Install its dependencies with `npm install` and run it using `node server.js`.
Ensure your environment allows outbound connections to that site. Once the
server is running at `localhost:3001`, the **Fetch Web Matches** button will
retrieve live data and display the results using the same pipeline.

### Analysis Modes

The drop-down menu lets you choose **Conservative**, **Balanced**, or **Aggressive** analysis. These modes adjust EV thresholds and confidence levels to match your risk appetite.

## Framework Highlights (May 2025)

- Singles require EV of at least **+10%**, while system legs need **+2%**.
- Bankroll allocation defaults to **40% singles** and **60% systems**.
- Staking uses half-Kelly sizing capped at **5%** of bankroll per bet.

## Disclaimer

The included tools are for educational purposes only. Please gamble
responsibly and at your own risk.
