'use client'

import { TrendingUp, TrendingDown } from 'lucide-react'

interface TokenCardProps {
  symbol: string
  name: string
  price: number
  change: number
  marketCap: number
  volume: number
  chain: string
  detailed?: boolean
}

export default function TokenCard({
  symbol,
  name,
  price,
  change,
  marketCap,
  volume,
  chain,
  detailed = false
}: TokenCardProps) {
  const formatNumber = (num: number) => {
    if (num >= 1e9) return `$${(num / 1e9).toFixed(2)}B`
    if (num >= 1e6) return `$${(num / 1e6).toFixed(2)}M`
    return `$${num.toFixed(2)}`
  }

  return (
    <div className="card hover:bg-gray-800/50 transition-colors cursor-pointer">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-lg font-bold">
            {symbol[0]}
          </div>
          <div>
            <div className="font-semibold text-lg">{symbol}</div>
            <div className="text-sm text-gray-400">{name}</div>
            <div className="text-xs text-blue-400">{chain}</div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-xl font-bold">${price.toLocaleString()}</div>
          <div className={`flex items-center gap-1 ${change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
            {change >= 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
            <span>{change >= 0 ? '+' : ''}{change}%</span>
          </div>
        </div>
      </div>
      
      {detailed && (
        <div className="mt-4 pt-4 border-t border-gray-800 grid grid-cols-2 gap-4">
          <div>
            <div className="text-sm text-gray-400">Market Cap</div>
            <div className="font-semibold">{formatNumber(marketCap)}</div>
          </div>
          <div>
            <div className="text-sm text-gray-400">24h Volume</div>
            <div className="font-semibold">{formatNumber(volume)}</div>
          </div>
        </div>
      )}
    </div>
  )
}