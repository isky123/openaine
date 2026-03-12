import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Zap, HeadphonesIcon, Check, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    name: 'David Z.',
    role: '全栈工程师 @ 大型互联网公司',
    content: 'OpenAine 让我的编程效率提升了10倍，Claude模型的代码质量非常高，再也不用担心API限制了。',
    avatar: 'D'
  },
  {
    name: '李先生',
    role: '技术负责人 @ 独角兽企业',
    content: '超大积分池真的很实用，团队开发再也不用担心token不够用。客服响应也很及时。',
    avatar: 'L'
  },
  {
    name: 'Emily W.',
    role: 'AI产品经理 @ 头部科技公司',
    content: '账号安全保障让我很放心，不用担心被封号。价格比官方便宜很多，性价比超高。',
    avatar: 'E'
  },
  {
    name: '陈工',
    role: '前端架构师 @ 生活服务平台',
    content: '专业服务真的很棒，遇到问题都能快速解决。Claude-4-Sonnet的代码生成能力太强了。',
    avatar: 'C'
  },
  {
    name: 'Sarah L.',
    role: '独立开发者 / iOS专家',
    content: '作为独立开发者，这个服务帮我节省了大量成本。API稳定性很好，从来没有掉线过。',
    avatar: 'S'
  },
  {
    name: '赵总',
    role: 'CTO @ 创业公司',
    content: '团队协作功能很实用，可以共享积分池比自己申请官方API方便太多了。',
    avatar: 'Z'
  }
];

const features = [
  {
    icon: Shield,
    title: '智能中转',
    description: '智能调度流量，不再为封号担忧'
  },
  {
    icon: Zap,
    title: '官方原版',
    description: '高可用、低延迟、原汁原味的体验'
  },
  {
    icon: HeadphonesIcon,
    title: '专业服务',
    description: '1对1 工程师支持与架构建议'
  }
];

const plans = [
  {
    name: 'Standard Plan',
    price: 399,
    period: '/4周',
    description: '学生和轻量级开发者',
    quota: 110,
    recommended: false
  },
  {
    name: 'Premium Plan',
    price: 899,
    period: '/4周',
    description: '专业开发者首选',
    quota: 260,
    recommended: true
  },
  {
    name: 'Professional Plan',
    price: 1799,
    period: '/4周',
    description: '顶尖开发者与极客',
    quota: 530,
    recommended: false
  }
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-gray-900/20"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            OpenAine
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto">
            重构您的 AI 编程体验
          </p>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            我们将速度、稳定性与官方服务体验整合在一个平台，帮助你专注产品本身，而不是账号风险与资源调度。
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/auth/register">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6">
                立即体验 <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/docs">
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-gray-600 text-gray-300 hover:bg-gray-800">
                查看文档
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-blue-400">10,000+</p>
              <p className="text-gray-400 mt-1">开发者用户</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-purple-400">99.9%</p>
              <p className="text-gray-400 mt-1">服务稳定性</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-pink-400">500万+</p>
              <p className="text-gray-400 mt-1">API调用次数</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-cyan-400">1v1</p>
              <p className="text-gray-400 mt-1">专属客服</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">核心优势</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              为开发者提供稳定、高效、安全的 AI 编程体验
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-colors"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">选择适合您的方案</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              使用最先进的AI模型，提升10x编程效率。所有方案均享受账号安全保障和专业服务支持。
            </p>
          </div>

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
                  <li className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    周额度 ${plan.quota}
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    支持 Claude 4.6 & Codex 5.3 & Gemini 3 等
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    最多 5 个并发
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    周期订阅，随时升级
                  </li>
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

          {/* Top-up Section */}
          <div className="mt-12 bg-gray-900 border border-gray-800 rounded-2xl p-8 max-w-3xl mx-auto">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-semibold mb-2">灵活充值</h3>
              <p className="text-gray-400">按量扣费 · 余额永久有效 · 支持所有模型</p>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-400">¥50</p>
                <p className="text-gray-400 text-sm">支付</p>
              </div>
              <ArrowRight className="w-6 h-6 text-gray-500" />
              <div className="text-center">
                <p className="text-3xl font-bold text-green-400">$50</p>
                <p className="text-gray-400 text-sm">获得</p>
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-400 mb-4">
                API 调用时优先消耗订阅余额，不足时自动切换消耗灵活余额。充值金额越大，赠送越多。
              </p>
              <Link to="/auth/login">
                <Button className="bg-green-600 hover:bg-green-700">
                  立即购买
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">用户评价</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              来自全球开发者的真实反馈，OpenAine 已成为提升编程效率的必备工具。
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-900 border border-gray-800 rounded-xl p-6"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">"{testimonial.content}"</p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-medium">{testimonial.avatar}</span>
                  </div>
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">常见问题</h2>
            <p className="text-gray-400">有疑问？我们来解答</p>
          </div>

          <div className="space-y-4">
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-2">什么是 OpenAine？</h3>
              <p className="text-gray-400">
                OpenAine 是新一代AI终端编程服务，提供Claude、GPT-5等先进AI模型的API访问。我们通过动态资源池技术，为开发者提供稳定、高效、安全的AI编程体验，帮助您提升10倍编程效率。
              </p>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-2">为什么选择我们而不是官方API？</h3>
              <p className="text-gray-400">
                我们提供三大核心优势：1）账号安全保障，无封号风险；2）支持高频使用；3）专属客服支持，1v1专业服务。同时价格比官方便宜50%以上，性价比更高。
              </p>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-2">服务稳定性如何保障？</h3>
              <p className="text-gray-400">
                我们采用动态资源池架构，在全球部署多个节点，自动负载均衡。99.9%的服务可用性，平均响应时间小于200ms。企业版还提供SLA服务保障和专属技术支持。
              </p>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-2">如何开始使用服务？</h3>
              <p className="text-gray-400">
                注册账号后选择合适的套餐，我们会提供API密钥和详细的接入文档。新用户还可以免费试用。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">立即开始提升编程效率</h2>
          <p className="text-xl text-blue-100 mb-8">
            加入数万开发者的行列，体验最前沿的 AI 编程服务
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/auth/register">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6">
                免费注册
              </Button>
            </Link>
            <Link to="/pricing">
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-blue-700 text-lg px-8 py-6"
              >
                查看定价
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
