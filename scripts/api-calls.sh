#!/bin/bash
# Nansen Campaign API Calls Script
# Generate 10+ API calls untuk campaign

echo "🚀 Starting Nansen API Calls for Campaign..."
echo ""

# Call 1: Token Screener Solana
echo "Call 1: Token Screener Solana"
nansen research token screener --chain solana --limit 3 --pretty > data/call-01-solana.json

# Call 2: Token Screener Ethereum
echo "Call 2: Token Screener Ethereum"
nansen research token screener --chain ethereum --limit 3 --pretty > data/call-02-ethereum.json

# Call 3: Search Bitcoin
echo "Call 3: Search Bitcoin"
nansen search "Bitcoin" --limit 5 > data/call-03-bitcoin.json

# Call 4: Search Ethereum
echo "Call 4: Search Ethereum"
nansen search "Ethereum" --limit 5 > data/call-04-ethereum.json

# Call 5: Search Solana
echo "Call 5: Search Solana"
nansen search "Solana" --limit 5 > data/call-05-solana.json

# Call 6: Search DeFi
echo "Call 6: Search DeFi"
nansen search "DeFi" --limit 5 > data/call-06-defi.json

# Call 7: Search NFT
echo "Call 7: Search NFT"
nansen search "NFT" --limit 5 > data/call-07-nft.json

# Call 8: Search Smart Money
echo "Call 8: Search Smart Money"
nansen search "smart money" --limit 5 > data/call-08-smartmoney.json

# Call 9: Search Crypto Trading
echo "Call 9: Search Crypto Trading"
nansen search "crypto trading" --limit 5 > data/call-09-trading.json

# Call 10: Search Web3
echo "Call 10: Search Web3"
nansen search "Web3" --limit 5 > data/call-10-web3.json

echo ""
echo "✅ Completed 10 API calls!"
echo "Results saved to data/ directory"
echo "Check Nansen dashboard for campaign progress."