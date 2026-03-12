import { Link } from 'react-router-dom';
import { Check, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const plans = [
  {
    name: 'Standard Plan',
    price: 399,
    period: '/4周',
    description: '学生和轻量级开发者',
    quota: 110,
    features: [
      '周额度 $110',
      '支持 Claude 4.6 & Codex 5.3 & Gemini 3 等',
      '最多 5 个并发',
      '周期订阅，随时升级',
      '账号安全保障',
      '专业服务支持'
    ],
    recommended: false
  },
  {
    name: 'Premium Plan',
    price: 899,
    period: '/4周',
    description: '专业开发者首选',
    quota: 260,
    features: [
      '周额度 $260',
      '支持 Claude 4.6 & Codex 5.3 & Gemini 3 等',
      '最多 5 个并发',
      '周期订阅，随时升级',
      '账号安全保障',
      '专业服务支持',
      '优先客服响应',
      '高级功能优先体验'
    ],
    recommended: true
  },
  {
    name: 'Professional Plan',
    price: 1799,
    period: '/4周',
    description: '顶尖开发者与极客',
    quota: 530,
    features: [
      '周额度 $530',
      '支持 Claude 4.6 & Codex 5.3 & Gemini 3 等',
      '最多 5 个并发',
      '周期订阅，随时升级',
      '账号安全保障',
      '专业服务支持',
      '1v1专属客服',
      '企业级功能',
      'SLA服务保障'
    ],
    recommended: false
  }
];

const topUps = [
  { amount: 50, bonus: 0, get: 50 },
  { amount: 100, bonus: 5, get: 105 },
  { amount: 200, bonus: 15, get: 215 },
  { amount: 500, bonus: 50, get: 550 },
  { amount: 1000, bonus: 150, get: 1150 }
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Link to="/" className="inline-flex items-center text-gray-400 hover:text-white mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            返回首页
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">定价方案</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            选择最适合您的套餐，使用最先进的AI模型，提升10x编程效率
          </p>
        </div>

        {/* Subscription Plans */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">套餐订阅</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-gray-900 border rounded-2xl p-8 ${
                  plan.recommended
                    ? 'border-blue-500 shadow-lg shadow-blue-500/20'
                    : 'border-gray-800'
                }`}
              >
                {plan.recommended && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-sm px-3 py-1 rounded-full">
                    推荐
                  </div>
                )}
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">¥{plan.price}</span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center text-gray-300">
                      <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/auth/login">
                  <Button
                    className={`w-full ${
                      plan.recommended
                        ? 'bg-blue-600 hover:bg-blue-700'
                        : 'bg-gray-800 hover:bg-gray-700'
                    }`}
                  >
                    立即订阅
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Top-up Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">灵活充值</h2>
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="text-center mb-6">
              <p className="text-gray-400 mb-2">按量扣费 · 余额永久有效 · 支持所有模型</p>
              <p className="text-sm text-gray-500">
                API 调用时优先消耗订阅余额，不足时自动切换消耗灵活余额
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
              {topUps.map((topUp, index) => (
                <div
                  key={index}
                  className="bg-gray-800 border border-gray-700 rounded-xl p-4 text-center hover:border-blue-500 transition-colors cursor-pointer"
                >
                  <p className="text-2xl font-bold text-green-400">¥{topUp.amount}</p>
                  <p className="text-sm text-gray-400">支付</p>
                  {topUp.bonus > 0 && (
                    <p className="text-xs text-green-500 mt-1">送 ${topUp.bonus}</p>
                  )}
                  <p className="text-lg font-semibold mt-2">${topUp.get}</p>
                  <p className="text-xs text-gray-500">获得</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link to="/auth/login">
                <Button className="bg-green-600 hover:bg-green-700 px-8">
                  立即购买
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Comparison */}
        <section>
          <h2 className="text-2xl font-bold text-center mb-8">服务特性</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">智能中转</h3>
              <p className="text-gray-400">
                智能调度流量，不再为封号担忧。我们的动态资源池技术确保您的高频使用需求得到满足。
              </p>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">官方原版</h3>
              <p className="text-gray-400">
                高可用、低延迟、原汁原味的体验。直接对接官方API，确保功能的完整性和实时性。
              </p>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">专业服务</h3>
              <p className="text-gray-400">
                1对1 工程师支持与架构建议。遇到问题？我们的专业团队随时为您提供技术支持。
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-4">还有疑问？</p>
          <Link to="/docs">
            <Button variant="outline" className="border-gray-600 text-gray-300">
              查看文档
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
