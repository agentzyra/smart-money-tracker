# Smart Money Tracker

> Nansen AI Campaign Submission — Built a Smart Money Tracker using Nansen CLI

## 🎯 Campaign Requirements

✅ **Install CLI** — Nansen CLI installed and configured  
✅ **10+ API Calls** — Completed 10 successful API calls  
🚀 **Build Something Creative** — Smart Money Tracker with multi-chain analytics

## 📊 Project Overview

This project leverages Nansen's powerful on-chain analytics to build a **Smart Money Tracker** that:

- Tracks smart money movements and whale wallet activities
- Monitors token performance across multiple chains (Solana, Ethereum, Base, Arbitrum)
- Detects arbitrage opportunities by comparing prices across chains
- Analyzes netflow trends for accumulation/distribution signals
- Provides actionable insights for traders following smart money

## 🛠️ Tech Stack

- **Nansen CLI** — On-chain data and analytics
- **Node.js** — Backend scripting
- **Python** — Data analysis
- **GitHub** — Version control

## 📈 API Calls Made

| # | Endpoint | Description |
|---|----------|-------------|
| 1 | `token screener --chain solana` | Top Solana tokens analysis |
| 2 | `token screener --chain ethereum` | Ethereum stablecoin comparison |
| 3 | `search Bitcoin` | Multi-chain BTC tracking |
| 4 | `search Ethereum` | ETH across 5 chains |
| 5 | `search Solana` | SOL native + bridged |
| 6 | `search DeFi` | DeFi token discovery |
| 7 | `search NFT` | NFT market data |
| 8 | `search Smart Money` | Smart money entities |
| 9 | `search Crypto Trading` | Trading fund tracking |
| 10 | `search Web3` | Web3 ecosystem |

## 🔍 Key Insights from Data

### Multi-Chain Price Comparison
- **ETH**: Same price ($2,285) across Ethereum, Base, Arbitrum, Optimism, Linea
- **BTC**: Wrapped versions on Avalanche, Sui, Tron with slight variations
- **SOL**: Native $93.75 vs bridged versions on BNB, Base

### Stablecoin Analysis
- **USDC**: $79.2B market cap, consistent $1.00 price
- **USDT**: $184B market cap, slight variation $1.000079
- **USDE**: $5.9B market cap, Ethena's synthetic dollar

### Arbitrage Opportunities
- Price differences between native and wrapped tokens
- Volume disparities across chains
- Netflow analysis for accumulation/distribution

## 🚀 Usage

```bash
# Install dependencies
npm install

# Run analysis
node scripts/analyze.js

# Generate report
python scripts/report.py
```

## 📁 Project Structure

```
nansen-campaign-project/
├── README.md
├── scripts/
│   ├── api-calls.sh          # 10 API calls for campaign
│   ├── analyze.js            # Analysis engine
│   └── report.py             # Report generator
├── data/
│   └── sample-results.json   # API response samples
└── docs/
    └── INSIGHTS.md           # Detailed analysis
```

## 🏆 Campaign Submission

This project demonstrates creative use of Nansen's API for:
1. **Cross-chain analytics** — Comparing tokens across 5+ chains
2. **Arbitrage detection** — Identifying price inefficiencies
3. **Smart money tracking** — Following whale movements
4. **Market intelligence** — Real-time token screening

## 📞 Connect

- GitHub: [@agentzyra](https://github.com/agentzyra)
- Project: [nansen-campaign-project](https://github.com/agentzyra/nansen-campaign-project)

---

*Built with ❤️ using Nansen AI*