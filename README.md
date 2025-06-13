# spt2

This repository contains a demonstration of a data‑driven betting pipeline.

## Usage

Open `index.html` in a modern browser to experiment with the demo. Use the
file picker above the **Load Matches** button to select a JSON file containing
match data. After selecting your file, click **Load Matches** to analyse those
games.

### Web Scraping

This repo includes a small Node server (`server.js`) that provides sample data
for the web scraping feature. Install dependencies with `npm install` and start
the server with `npm start`. By default it listens on `http://127.0.0.1:3001`.
While it runs, click **Fetch Web Matches** in the demo to load the mock data and
see the analysis pipeline in action.

If the backend isn't running, the page will display a helpful error message with
instructions on how to start it.

### Analysis Modes

The drop-down menu lets you choose **Conservative**, **Balanced**, or **Aggressive** analysis. These modes adjust EV thresholds and confidence levels to match your risk appetite.

## Framework Highlights (May 2025)

- Singles require EV of at least **+10%**, while system legs need **+2%**.
- Bankroll allocation defaults to **40% singles** and **60% systems**.
- Staking uses half-Kelly sizing capped at **5%** of bankroll per bet.

## Disclaimer

The included tools are for educational purposes only. Please gamble
responsibly and at your own risk.
