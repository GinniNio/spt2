# spt2

This repository contains a demonstration of a data‑driven betting pipeline.

## Usage

Open `index.html` in a modern browser to experiment with the demo. Paste a
list of matches, odds and markets into the **Paste Matches** field and click
**Analyze Pasted Matches**. The model parses the text, runs the EV framework
and displays the recommended selections.

### Comparative Data

When analysing matches the demo attempts to query Wikipedia for background
information on each team. If network access is blocked or the team is not found
the extra information is simply omitted.

### Analysis Modes

The drop-down menu lets you choose **Conservative**, **Balanced**, or **Aggressive** analysis. These modes adjust EV thresholds and confidence levels to match your risk appetite.

## Framework Highlights (May 2025)

- Singles require EV of at least **+10%**, while system legs need **+2%**.
- Bankroll allocation defaults to **40% singles** and **60% systems**.
- Staking uses half-Kelly sizing capped at **5%** of bankroll per bet.

## Disclaimer

The included tools are for educational purposes only. Please gamble
responsibly and at your own risk.
