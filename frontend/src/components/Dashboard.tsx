'use client'

import { useState } from 'react'
import TokenCard from './TokenCard'
import SmartMoneyTable from './SmartMoneyTable'
import { TrendingUp, Wallet, Activity, BarChart3 } from 'lucide-react'

// Sample data from Nansen API calls
const tokenData = [
  {
    symbol: 'ETH',
    name: 'Ethereum',
    price: 2285.15,
    change: 2.4,
    marketCap: 275000000000,
    volume: 190400000,
    chain: 'Multi-Chain'
  },
  {
    symbol: 'BTC',
    name: 'Bitcoin',
    price: 73650.88,
    change: 1.8,
    marketCap: 1471000000000,
    volume: 32400000,
    chain: 'Bitcoin'
  },
  {
    symbol: 'SOL',
    name: 'Solana',
    price: 93.76,
    change: 5.2,
    marketCap: 53500000000,
    volume: 7032000000,
    chain: 'Solana'
  },
  {
    symbol: 'USDC',
    name: 'USD Coin',
    price: 1.00,
    change: 0.01,
    marketCap: 79200000000,
    volume: 1267000000,
    chain: 'Multi-Chain'
  }
]

const smartMoneyData = [
  {
    entity: 'Smart Money Finance',
    type: 'Whale',
    netflow: 12500000,
    tokens: ['ETH', 'SOL'],
    action: 'Accumulating'
  },
  {
    entity: 'Crypto Gem Trading',
    type: 'Trader',
    netflow: -5400000,
    tokens: ['BTC'],
    action: 'Distributing'
  },
  {
    entity: 'DeFi Development Corp',
    type: 'Institution',
    netflow: 8900000,
    tokens: ['SOL', 'USDC'],
    action: 'Accumulating'
  }
]

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview')

  const stats = [
    { label: 'Total Volume', value: '$9.2B', icon: BarChart3, change: '+12%' },
    { label: 'Smart Money Inflow', value: '$16M', icon: TrendingUp, change: '+8%' },
    { label: 'Active Whales', value: '127', icon: Wallet, change: '+3%' },
    { label: 'Chains Tracked', value: '5', icon: Activity, change: '0%' }
  ]

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div key={stat.label} className="card">
            <div className="flex items-center justify-between mb-2">
              <stat.icon className="w-5 h-5 text-blue-400" />
              <span className={`text-sm ${stat.change.startsWith('+') ? 'text-green-400' : 'text-gray-400'}`}>
                {stat.change}
              </span>
            </div>
            <div className="text-2xl font-bold">{stat.value}</div>
            <div className="text-sm text-gray-400">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="flex gap-2 border-b border-gray-800">
        {['overview', 'tokens', 'smart-money'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 capitalize ${
              activeTab === tab
                ? 'border-b-2 border-blue-400 text-blue-400'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            {tab.replace('-', ' ')}
          </button>
        ))}
      </div>

      {/* Content */}
      {activeTab === 'overview' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h2 className="text-xl font-semibold mb-4">Top Tokens</h2>
            <div className="grid gap-4">
              {tokenData.map((token) => (
                <TokenCard key={token.symbol} {...token} />
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Smart Money Activity</h2>
            <SmartMoneyTable data={smartMoneyData} />
          </div>
        </div>
      )}

      {activeTab === 'tokens' && (
        <div className="grid gap-4">
          {tokenData.map((token) => (
            <TokenCard key={token.symbol} {...token} detailed />
          ))}
        </div>
      )}

      {activeTab === 'smart-money' && (
        <div>
          <SmartMoneyTable data={smartMoneyData} detailed />
        </div>
      )}
    </div>
  )
}