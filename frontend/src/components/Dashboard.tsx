'use client'

import { useState } from 'react'

const tokenData = [
  { symbol: 'ETH', name: 'Ethereum', price: 2285.15, change: 2.4, chain: 'Multi-Chain' },
  { symbol: 'BTC', name: 'Bitcoin', price: 73650.88, change: 1.8, chain: 'Bitcoin' },
  { symbol: 'SOL', name: 'Solana', price: 93.76, change: 5.2, chain: 'Solana' },
  { symbol: 'USDC', name: 'USD Coin', price: 1.00, change: 0.01, chain: 'Multi-Chain' }
]

const smartMoneyData = [
  { entity: 'Smart Money Finance', type: 'Whale', netflow: 12500000, action: 'Accumulating' },
  { entity: 'Crypto Gem Trading', type: 'Trader', netflow: -5400000, action: 'Distributing' },
  { entity: 'DeFi Development Corp', type: 'Institution', netflow: 8900000, action: 'Accumulating' }
]

const stats = [
  { label: 'Total Volume', value: '$9.2B', change: '+12%' },
  { label: 'Smart Money Inflow', value: '$16M', change: '+8%' },
  { label: 'Active Whales', value: '127', change: '+3%' },
  { label: 'Chains Tracked', value: '5', change: '0%' }
]

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview')

  const formatNumber = (num: number) => {
    if (num >= 1e6) return `$${(num / 1e6).toFixed(2)}M`
    if (num >= 1e3) return `$${(num / 1e3).toFixed(2)}K`
    return `$${num.toFixed(2)}`
  }

  return (
    <div>
      {/* Stats */}
      <div className="stats-grid">
        {stats.map((stat) => (
          <div key={stat.label} className="card">
            <div className="card-header">
              <span className="card-label">{stat.label}</span>
              <span className={stat.change.startsWith('+') ? 'change-positive' : 'change-neutral'}>
                {stat.change}
              </span>
            </div>
            <div className="card-value">{stat.value}</div>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="tabs">
        {['overview', 'tokens', 'smart-money'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`tab ${activeTab === tab ? 'active' : ''}`}
          >
            {tab.replace('-', ' ')}
          </button>
        ))}
      </div>

      {/* Content */}
      {activeTab === 'overview' && (
        <div>
          <h2 style={{ marginBottom: '1rem' }}>Top Tokens</h2>
          <div className="token-grid">
            {tokenData.map((token) => (
              <div key={token.symbol} className="card token-card">
                <div className="token-info">
                  <div className="token-icon">{token.symbol[0]}</div>
                  <div>
                    <div className="token-name">{token.symbol}</div>
                    <div className="token-fullname">{token.name}</div>
                    <div className="token-chain">{token.chain}</div>
                  </div>
                </div>
                <div className="token-price">
                  <div className="token-price-value">${token.price.toLocaleString()}</div>
                  <div className={`token-change ${token.change >= 0 ? 'positive' : 'negative'}`}>
                    {token.change >= 0 ? '+' : ''}{token.change}%
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h2 style={{ margin: '2rem 0 1rem' }}>Smart Money Activity</h2>
          <div className="card table-container">
            <table className="table">
              <thead>
                <tr>
                  <th>Entity</th>
                  <th>Type</th>
                  <th className="text-right">Netflow</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {smartMoneyData.map((item, index) => (
                  <tr key={index}>
                    <td>{item.entity}</td>
                    <td><span className="badge badge-gray">{item.type}</span></td>
                    <td className="text-right">
                      <span className={item.netflow >= 0 ? 'positive' : 'negative'}>
                        {formatNumber(Math.abs(item.netflow))}
                      </span>
                    </td>
                    <td>
                      <span className={`badge ${item.action === 'Accumulating' ? 'badge-green' : 'badge-red'}`}>
                        {item.action}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'tokens' && (
        <div className="token-grid">
          {tokenData.map((token) => (
            <div key={token.symbol} className="card token-card">
              <div className="token-info">
                <div className="token-icon">{token.symbol[0]}</div>
                <div>
                  <div className="token-name">{token.symbol}</div>
                  <div className="token-fullname">{token.name}</div>
                  <div className="token-chain">{token.chain}</div>
                </div>
              </div>
              <div className="token-price">
                <div className="token-price-value">${token.price.toLocaleString()}</div>
                <div className={`token-change ${token.change >= 0 ? 'positive' : 'negative'}`}>
                  {token.change >= 0 ? '+' : ''}{token.change}%
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'smart-money' && (
        <div className="card table-container">
          <table className="table">
            <thead>
              <tr>
                <th>Entity</th>
                <th>Type</th>
                <th className="text-right">Netflow</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {smartMoneyData.map((item, index) => (
                <tr key={index}>
                  <td>{item.entity}</td>
                  <td><span className="badge badge-gray">{item.type}</span></td>
                  <td className="text-right">
                    <span className={item.netflow >= 0 ? 'positive' : 'negative'}>
                      {formatNumber(Math.abs(item.netflow))}
                    </span>
                  </td>
                  <td>
                    <span className={`badge ${item.action === 'Accumulating' ? 'badge-green' : 'badge-red'}`}>
                      {item.action}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}