import { Link } from 'react-router-dom';
import { Check, CreditCard, Crown, Zap, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

const plans = [
  {
    name: 'Free',
    price: 0,
    period: '永久',
    description: '适合轻度使用和测试',
    quota: 0,
    features: [
      '每日 10 次 API 调用',
      '基础模型支持',
      '社区支持',
      '无保障 SLA'
    ],
    current: false
  },
  {
    name: 'Standard',
    price: 399,
    period: '/4周',
    description: '学生和轻量级开发者',
    quota: 110,
    features: [
      '周额度 $110',
      '支持 Claude 4.6 & Codex 5.3 & Gemini 3',
      '最多 5 个并发',
      '账号安全保障',
      '邮件支持'
    ],
    current: false
  },
  {
    name: 'Premium',
    price: 899,
    period: '/4周',
    description: '专业开发者首选',
    quota: 260,
    features: [
      '周额度 $260',
      '支持所有先进模型',
      '最多 5 个并发',
      '优先客服响应',
      '高级功能优先体验',
      'SLA 服务保障'
    ],
    current: true
  },
  {
    name: 'Professional',
    price: 1799,
    period: '/4周',
    description: '顶尖开发者与极客',
    quota: 530,
    features: [
      '周额度 $530',
      '支持所有先进模型',
      '最多 5 个并发',
      '1v1 专属客服',
      '企业级功能',
      'SLA 服务保障',
      '定制化支持'
    ],
    current: false
  }
];

// Mock billing history
const billingHistory = [
  { date: '2024-03-01', amount: 899, plan: 'Premium', status: 'paid' },
  { date: '2024-02-01', amount: 899, plan: 'Premium', status: 'paid' },
  { date: '2024-01-01', amount: 399, plan: 'Standard', status: 'paid' }
];

export default function BillingPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">套餐订阅</h1>
        <p className="text-gray-500">管理您的订阅计划</p>
      </div>

      {/* Current Plan */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-blue-100 mb-1">当前套餐</p>
            <h2 className="text-3xl font-bold flex items-center">
              <Crown className="w-8 h-8 mr-2" />
              Premium Plan
            </h2>
            <p className="text-blue-100 mt-2">到期时间：2024-04-01</p>
          </div>
          <div className="text-right">
            <p className="text-4xl font-bold">¥899</p>
            <p className="text-blue-100">每 4 周</p>
          </div>
        </div>
        <div className="mt-6 flex items-center space-x-4">
          <div className="flex-1 bg-white/20 rounded-lg px-4 py-2">
            <p className="text-sm text-blue-100">本周已用</p>
            <p className="text-xl font-bold">$45.50 / $260</p>
          </div>
          <div className="flex-1 bg-white/20 rounded-lg px-4 py-2">
            <p className="text-sm text-blue-100">剩余额度</p>
            <p className="text-xl font-bold">$214.50</p>
          </div>
        </div>
      </div>

      {/* Plan Selection */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">切换套餐</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white border rounded-xl p-6 ${
                plan.current ? 'border-blue-500 shadow-lg' : 'border-gray-200'
              }`}
            >
              {plan.current && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-xs px-3 py-1 rounded-full">
                  当前
                </div>
              )}
              <h3 className="text-lg font-semibold mb-1">{plan.name}</h3>
              <p className="text-sm text-gray-500 mb-3">{plan.description}</p>
              <div className="mb-4">
                {plan.price === 0 ? (
                  <span className="text-2xl font-bold">免费</span>
                ) : (
                  <>
                    <span className="text-2xl font-bold">¥{plan.price}</span>
                    <span className="text-gray-500">{plan.period}</span>
                  </>
                )}
              </div>
              <ul className="space-y-2 mb-6">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start text-sm text-gray-600">
                    <Check className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full ${
                  plan.current
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700'
                }`}
                disabled={plan.current}
              >
                {plan.current ? '当前套餐' : '立即升级'}
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Billing History */}
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">账单历史</h2>
        </div>
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="text-left px-6 py-3 text-sm font-medium text-gray-500">日期</th>
              <th className="text-left px-6 py-3 text-sm font-medium text-gray-500">套餐</th>
              <th className="text-right px-6 py-3 text-sm font-medium text-gray-500">金额</th>
              <th className="text-right px-6 py-3 text-sm font-medium text-gray-500">状态</th>
              <th className="text-right px-6 py-3 text-sm font-medium text-gray-500">操作</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {billingHistory.map((bill, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm text-gray-900">{bill.date}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{bill.plan}</td>
                <td className="px-6 py-4 text-sm text-gray-900 text-right">¥{bill.amount}</td>
                <td className="px-6 py-4 text-right">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    已支付
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-blue-600 hover:text-blue-800 text-sm">
                    查看发票
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Payment Method */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">支付方式</h2>
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-8 bg-white border border-gray-300 rounded flex items-center justify-center">
              <CreditCard className="w-6 h-6 text-gray-600" />
            </div>
            <div>
              <p className="font-medium text-gray-900">**** **** **** 4242</p>
              <p className="text-sm text-gray-500">到期：12/2025</p>
            </div>
          </div>
          <Button variant="outline" size="sm">
            更新
          </Button>
        </div>
      </div>
    </div>
  );
}
