# spt2

This repository contains a demonstration of a data‑driven betting pipeline.

## Usage

Open `index.html` in a modern browser to experiment with the demo. Paste a
list of matches, odds and markets into the **Paste Matches** field and click
**Analyze Pasted Matches**. The model parses the text, runs the EV framework
and displays the recommended selections. The demo runs entirely in your
browser and does not fetch additional team information from external APIs.

### Analysis Modes

The drop-down menu lets you choose **Conservative**, **Balanced**, or **Aggressive** analysis. These modes adjust EV thresholds and confidence levels to match your risk appetite.

## Framework Highlights (May 2025)

- Singles require EV of at least **+10%**, while system legs need **+2%**.
- Bankroll allocation defaults to **40% singles** and **60% systems**.
- Staking uses half-Kelly sizing capped at **5%** of bankroll per bet.

## Disclaimer

The included tools are for educational purposes only. Please gamble
responsibly and at your own risk.
