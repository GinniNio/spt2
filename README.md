# spt2

This repository contains a demonstration of a data‑driven betting pipeline.

## Usage

Open `index.html` in a modern browser to experiment with the demo.
You can either paste raw match text, load a JSON file, or fetch games from a
local scraping server. Use the **Paste Matches** area to enter odds directly
from a betting site, or select a file with the **Load Matches** button. The
**Fetch Web Matches** option queries a server running `server.js` and then
displays the parsed results. The analysis runs entirely in your browser with
no external team lookups.

### Starting the Scraping Server

Install dependencies and run the server on port 3001:

```bash
npm install
npm start
```

Then open `index.html` and click **Fetch Web Matches**.

### Analysis Modes

The drop-down menu lets you choose **Conservative**, **Balanced**, or **Aggressive** analysis. These modes adjust EV thresholds and confidence levels to match your risk appetite.

## Framework Highlights (May 2025)

- Singles require EV of at least **+10%**, while system legs need **+2%**.
- Bankroll allocation defaults to **40% singles** and **60% systems**.
- Staking uses half-Kelly sizing capped at **5%** of bankroll per bet.

## Disclaimer

The included tools are for educational purposes only. Please gamble
responsibly and at your own risk.
