import { useState } from 'react';
import { BarChart3, TrendingUp, TrendingDown, Calendar, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Mock usage data
const usageData = [
  { date: '03-06', calls: 1250, tokens: 45000, cost: 4.50 },
  { date: '03-07', calls: 1580, tokens: 52000, cost: 5.20 },
  { date: '03-08', calls: 980, tokens: 38000, cost: 3.80 },
  { date: '03-09', calls: 2100, tokens: 68000, cost: 6.80 },
  { date: '03-10', calls: 1850, tokens: 62000, cost: 6.20 },
  { date: '03-11', calls: 2200, tokens: 75000, cost: 7.50 },
  { date: '03-12', calls: 1650, tokens: 55000, cost: 5.50 }
];

const modelUsage = [
  { model: 'Claude-4-Sonnet', calls: 5200, tokens: 180000, percentage: 45 },
  { model: 'GPT-4o', calls: 3800, tokens: 145000, percentage: 36 },
  { model: 'Gemini-1.5-Pro', calls: 2500, tokens: 78000, percentage: 19 }
];

export default function UsagePage() {
  const [timeRange, setTimeRange] = useState('7d');

  const totalCalls = usageData.reduce((sum, d) => sum + d.calls, 0);
  const totalTokens = usageData.reduce((sum, d) => sum + d.tokens, 0);
  const totalCost = usageData.reduce((sum, d) => sum + d.cost, 0);
  const avgDailyCalls = Math.round(totalCalls / usageData.length);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">使用统计</h1>
          <p className="text-gray-500">查看您的 API 使用情况</p>
        </div>
        <div className="flex items-center space-x-3">
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          >
            <option value="7d">最近 7 天</option>
            <option value="30d">最近 30 天</option>
            <option value="90d">最近 90 天</option>
          </select>
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            导出报告
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-500 text-sm">总调用次数</span>
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-blue-600" />
            </div>
          </div>
          <p className="text-2xl font-bold text-gray-900">{totalCalls.toLocaleString()}</p>
          <div className="flex items-center mt-2 text-sm">
            <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
            <span className="text-green-600">+12.5%</span>
            <span className="text-gray-500 ml-1">较上周</span>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-500 text-sm">总 Token 消耗</span>
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-purple-600" />
            </div>
          </div>
          <p className="text-2xl font-bold text-gray-900">{totalTokens.toLocaleString()}</p>
          <div className="flex items-center mt-2 text-sm">
            <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
            <span className="text-green-600">+8.3%</span>
            <span className="text-gray-500 ml-1">较上周</span>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-500 text-sm">总消费 (USD)</span>
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-green-600" />
            </div>
          </div>
          <p className="text-2xl font-bold text-gray-900">${totalCost.toFixed(2)}</p>
          <div className="flex items-center mt-2 text-sm">
            <TrendingDown className="w-4 h-4 text-red-500 mr-1" />
            <span className="text-red-600">-3.2%</span>
            <span className="text-gray-500 ml-1">较上周</span>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-500 text-sm">日均调用</span>
            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
              <Calendar className="w-5 h-5 text-orange-600" />
            </div>
          </div>
          <p className="text-2xl font-bold text-gray-900">{avgDailyCalls.toLocaleString()}</p>
          <div className="flex items-center mt-2 text-sm">
            <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
            <span className="text-green-600">+5.7%</span>
            <span className="text-gray-500 ml-1">较上周</span>
          </div>
        </div>
      </div>

      {/* Daily Usage Chart */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">每日调用趋势</h2>
        <div className="h-64 flex items-end justify-between space-x-2">
          {usageData.map((data, index) => (
            <div key={index} className="flex-1 flex flex-col items-center">
              <div
                className="w-full bg-blue-500 rounded-t hover:bg-blue-600 transition-colors"
                style={{ height: `${(data.calls / 2500) * 100}%` }}
                title={`${data.calls} 次调用`}
              ></div>
              <span className="text-xs text-gray-500 mt-2">{data.date}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Model Usage */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">模型使用分布</h2>
        <div className="space-y-4">
          {modelUsage.map((model, index) => (
            <div key={index}>
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-gray-900">{model.model}</span>
                <span className="text-sm text-gray-500">
                  {model.calls.toLocaleString()} 次 / {model.tokens.toLocaleString()} tokens
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-500 h-2 rounded-full"
                  style={{ width: `${model.percentage}%` }}
                ></div>
              </div>
              <div className="flex justify-between mt-1">
                <span className="text-xs text-gray-500">{model.percentage}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detailed Table */}
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">详细记录</h2>
        </div>
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="text-left px-6 py-3 text-sm font-medium text-gray-500">日期</th>
              <th className="text-right px-6 py-3 text-sm font-medium text-gray-500">调用次数</th>
              <th className="text-right px-6 py-3 text-sm font-medium text-gray-500">Token 消耗</th>
              <th className="text-right px-6 py-3 text-sm font-medium text-gray-500">消费 (USD)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {usageData.map((data, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm text-gray-900">{data.date}</td>
                <td className="px-6 py-4 text-sm text-gray-900 text-right">{data.calls.toLocaleString()}</td>
                <td className="px-6 py-4 text-sm text-gray-900 text-right">{data.tokens.toLocaleString()}</td>
                <td className="px-6 py-4 text-sm text-gray-900 text-right">${data.cost.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
