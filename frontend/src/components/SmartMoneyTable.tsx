'use client'

import { ArrowUpRight, ArrowDownRight } from 'lucide-react'

interface SmartMoneyData {
  entity: string
  type: string
  netflow: number
  tokens: string[]
  action: 'Accumulating' | 'Distributing'
}

interface SmartMoneyTableProps {
  data: SmartMoneyData[]
  detailed?: boolean
}

export default function SmartMoneyTable({ data, detailed = false }: SmartMoneyTableProps) {
  const formatNumber = (num: number) => {
    if (num >= 1e6) return `$${(num / 1e6).toFixed(2)}M`
    if (num >= 1e3) return `$${(num / 1e3).toFixed(2)}K`
    return `$${num.toFixed(2)}`
  }

  return (
    <div className="card overflow-hidden">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-800">
            <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">Entity</th>
            <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">Type</th>
            {detailed && <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">Tokens</th>}
            <th className="text-right py-3 px-4 text-sm font-medium text-gray-400">Netflow</th>
            <th className="text-center py-3 px-4 text-sm font-medium text-gray-400">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="border-b border-gray-800/50 hover:bg-gray-800/30">
              <td className="py-3 px-4">
                <div className="font-medium">{item.entity}</div>
              </td>
              <td className="py-3 px-4">
                <span className="px-2 py-1 rounded-full text-xs bg-gray-800 text-gray-300">
                  {item.type}
                </span>
              </td>
              {detailed && (
                <td className="py-3 px-4">
                  <div className="flex gap-1">
                    {item.tokens.map((token) => (
                      <span key={token} className="px-2 py-1 rounded text-xs bg-blue-900/50 text-blue-300">
                        {token}
                      </span>
                    ))}
                  </div>
                </td>
              )}
              <td className="py-3 px-4 text-right">
                <div className={`flex items-center justify-end gap-1 ${item.netflow >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                  {item.netflow >= 0 ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                  {formatNumber(Math.abs(item.netflow))}
                </div>
              </td>
              <td className="py-3 px-4 text-center">
                <span className={`px-2 py-1 rounded-full text-xs ${
                  item.action === 'Accumulating' 
                    ? 'bg-green-900/50 text-green-400' 
                    : 'bg-red-900/50 text-red-400'
                }`}>
                  {item.action}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}