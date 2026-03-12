import { useAuth } from '@/context/AuthContext';
import { Link } from 'react-router-dom';
import { Copy, ExternalLink, TrendingUp, Activity, Clock, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export default function DashboardHome() {
  const { user } = useAuth();
  const [apiKeyCopied, setApiKeyCopied] = useState(false);

  const copyApiKey = () => {
    navigator.clipboard.writeText('sk-openaine-demo-xxxxxxxxxxxxx');
    setApiKeyCopied(true);
    setTimeout(() => setApiKeyCopied(false), 2000);
  };

  // Mock recent activity
  const activities = [
    { type: 'api_call', model: 'Claude-4-Sonnet', time: '2分钟前', tokens: 1250 },
    { type: 'api_call', model: 'GPT-4o', time: '15分钟前', tokens: 850 },
    { type: 'api_call', model: 'Gemini-1.5-Pro', time: '1小时前', tokens: 2100 },
    { type: 'recharge', amount: 50, time: '昨天', typeText: '充值' },
    { type: 'api_call', model: 'Claude-4-Sonnet', time: '昨天', tokens: 3200 }
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">欢迎回来</h1>
          <p className="text-gray-500">以下是您的账户概览</p>
        </div>
        <Link to="/dashboard/recharge">
          <Button className="bg-green-600 hover:bg-green-700">
            <Zap className="w-4 h-4 mr-2" />
            快速充值
          </Button>
        </Link>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-500 text-sm">账户余额 (USD)</span>
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-green-600" />
            </div>
          </div>
          <p className="text-2xl font-bold text-gray-900">${user?.balance?.toFixed(2) || '0.00'}</p>
          <Link to="/dashboard/recharge" className="text-sm text-blue-600 hover:underline">
            充值余额 →
          </Link>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-500 text-sm">本周额度</span>
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <Activity className="w-5 h-5 text-blue-600" />
            </div>
          </div>
          <p className="text-2xl font-bold text-gray-900">${user?.subscriptionQuota || 0}</p>
          <p className="text-sm text-gray-500">
            已使用 ${user?.usedQuota?.toFixed(2) || '0.00'}
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-500 text-sm">当前套餐</span>
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-purple-600" />
            </div>
          </div>
          <p className="text-2xl font-bold text-gray-900 capitalize">{user?.plan || 'Free'}</p>
          <Link to="/dashboard/billing" className="text-sm text-blue-600 hover:underline">
            升级套餐 →
          </Link>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-500 text-sm">API 调用次数</span>
            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
              <Clock className="w-5 h-5 text-orange-600" />
            </div>
          </div>
          <p className="text-2xl font-bold text-gray-900">1,247</p>
          <Link to="/dashboard/usage" className="text-sm text-blue-600 hover:underline">
            查看详情 →
          </Link>
        </div>
      </div>

      {/* API Key Section */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">API 密钥</h2>
          <Link to="/dashboard/api-keys">
            <Button variant="outline" size="sm">
              管理密钥
            </Button>
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex-1 bg-gray-50 border border-gray-200 rounded-lg px-4 py-3">
            <code className="text-sm text-gray-600 font-mono">sk-openaine-demo-xxxxxxxxxxxxx</code>
          </div>
          <Button
            onClick={copyApiKey}
            variant="outline"
            className="flex items-center"
          >
            <Copy className="w-4 h-4 mr-2" />
            {apiKeyCopied ? '已复制' : '复制'}
          </Button>
        </div>
        <p className="text-sm text-gray-500 mt-2">
          此密钥可用于访问 OpenAine API。请妥善保管，不要在客户端代码中暴露。
        </p>
      </div>

      {/* Quick Start */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white">
        <h2 className="text-lg font-semibold mb-4">快速开始</h2>
        <p className="text-blue-100 mb-4">
          使用 OpenAine API 轻松接入 Claude、GPT、Gemini 等先进 AI 模型
        </p>
        <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm">
          <p className="text-green-400"># Python 示例</p>
          <p className="text-gray-300">import openai</p>
          <p className="text-gray-300">openai.api_base = "https://api.openaine.com/v1"</p>
          <p className="text-gray-300">openai.api_key = "sk-openaine-xxx"</p>
          <p className="text-gray-500"># ...</p>
        </div>
        <div className="flex items-center space-x-4 mt-4">
          <Link to="/docs">
            <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
              <ExternalLink className="w-4 h-4 mr-2" />
              查看文档
            </Button>
          </Link>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">最近活动</h2>
          <Link to="/dashboard/usage">
            <Button variant="ghost" size="sm">
              查看全部
            </Button>
          </Link>
        </div>
        <div className="space-y-4">
          {activities.slice(0, 5).map((activity, index) => (
            <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
              <div className="flex items-center space-x-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  activity.type === 'api_call' ? 'bg-blue-100' : 'bg-green-100'
                }`}>
                  {activity.type === 'api_call' ? (
                    <Activity className="w-4 h-4 text-blue-600" />
                  ) : (
                    <Zap className="w-4 h-4 text-green-600" />
                  )}
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    {activity.type === 'api_call' ? `${activity.model} 调用` : `充值 $${activity.amount}`}
                  </p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </div>
              <div className="text-right">
                {activity.type === 'api_call' ? (
                  <p className="text-sm font-medium text-gray-900">{activity.tokens?.toLocaleString()} tokens</p>
                ) : (
                  <p className="text-sm font-medium text-green-600">+${activity.amount}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
