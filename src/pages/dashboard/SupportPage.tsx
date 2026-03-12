import { useState } from 'react';
import { HeadphonesIcon, MessageCircle, Mail, FileText, Send, ExternalLink, Clock, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const faqs = [
  {
    question: '如何获取 API 密钥？',
    answer: '登录后，在控制台页面点击"API 密钥"菜单，点击"创建新密钥"按钮即可生成新的 API 密钥。请妥善保管，密钥只会显示一次。'
  },
  {
    question: '套餐额度用完了怎么办？',
    answer: '您可以选择升级套餐或充值灵活余额。灵活余额按量计费，余额永久有效，API 调用时会优先消耗套餐额度，不足时自动切换使用灵活余额。'
  },
  {
    question: '如何保证账号安全？',
    answer: '我们采用官方原版 API，无账号风险。同时建议您：1) 定期更换 API 密钥；2) 启用两步验证；3) 不要在公共代码库中暴露密钥。'
  },
  {
    question: '支持哪些 AI 模型？',
    answer: '我们支持 Claude 4.6、Codex 5.3、Gemini 3、GPT-4o 等主流 AI 模型。所有模型都通过官方 API 转发，确保功能完整。'
  },
  {
    question: '如何申请企业版？',
    answer: '请联系我们的商务团队，您可以点击页面右侧的"联系商务"按钮，或发送邮件至 enterprise@openaine.com。'
  }
];

const tickets = [
  { id: '001', subject: 'API 调用异常', status: 'resolved', date: '2024-03-10' },
  { id: '002', subject: '充值问题咨询', status: 'pending', date: '2024-03-08' }
];

export default function SupportPage() {
  const [showTicketForm, setShowTicketForm] = useState(false);
  const [ticketSubject, setTicketSubject] = useState('');
  const [ticketContent, setTicketContent] = useState('');
  const [category, setCategory] = useState('technical');

  const handleSubmitTicket = () => {
    if (!ticketSubject.trim() || !ticketContent.trim()) {
      toast.error('请填写完整的工单信息');
      return;
    }
    toast.success('工单已提交，我们将尽快处理');
    setShowTicketForm(false);
    setTicketSubject('');
    setTicketContent('');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">技术支持</h1>
        <p className="text-gray-500">获取帮助和联系支持团队</p>
      </div>

      {/* Quick Help Cards */}
      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-white border border-gray-200 rounded-xl p-6 cursor-pointer hover:border-blue-500 transition-colors">
          <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
            <MessageCircle className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="font-semibold text-gray-900 mb-1">在线客服</h3>
          <p className="text-sm text-gray-500 mb-4">工作日 9:00-18:00 实时响应</p>
          <Button className="w-full bg-blue-600 hover:bg-blue-700">
            开始咨询
          </Button>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6 cursor-pointer hover:border-blue-500 transition-colors">
          <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
            <Mail className="w-6 h-6 text-green-600" />
          </div>
          <h3 className="font-semibold text-gray-900 mb-1">邮件支持</h3>
          <p className="text-sm text-gray-500 mb-4">support@openaine.com</p>
          <Button variant="outline" className="w-full">
            发送邮件
          </Button>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6 cursor-pointer hover:border-blue-500 transition-colors">
          <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
            <FileText className="w-6 h-6 text-purple-600" />
          </div>
          <h3 className="font-semibold text-gray-900 mb-1">知识库</h3>
          <p className="text-sm text-gray-500 mb-4">常见问题解答</p>
          <Button variant="outline" className="w-full">
            查看文档
          </Button>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">常见问题</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
              <h3 className="font-medium text-gray-900 mb-2">{faq.question}</h3>
              <p className="text-sm text-gray-500">{faq.answer}</p>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <a href="/docs" className="inline-flex items-center text-blue-600 hover:text-blue-700">
            查看更多文档 <ExternalLink className="w-4 h-4 ml-1" />
          </a>
        </div>
      </div>

      {/* My Tickets */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-900">我的工单</h2>
          <Button
            onClick={() => setShowTicketForm(!showTicketForm)}
            className="bg-blue-600 hover:bg-blue-700"
          >
            <Send className="w-4 h-4 mr-2" />
            提交工单
          </Button>
        </div>

        {/* Ticket Form */}
        {showTicketForm && (
          <div className="bg-gray-50 rounded-xl p-6 mb-6">
            <h3 className="font-semibold text-gray-900 mb-4">提交新工单</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  问题类别
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                >
                  <option value="technical">技术问题</option>
                  <option value="billing">账单问题</option>
                  <option value="account">账户问题</option>
                  <option value="other">其他</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  主题
                </label>
                <input
                  type="text"
                  value={ticketSubject}
                  onChange={(e) => setTicketSubject(e.target.value)}
                  placeholder="简要描述您的问题"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  详细描述
                </label>
                <textarea
                  value={ticketContent}
                  onChange={(e) => setTicketContent(e.target.value)}
                  placeholder="请详细描述您遇到的问题"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 resize-none"
                />
              </div>
              <div className="flex justify-end space-x-3">
                <Button
                  variant="outline"
                  onClick={() => setShowTicketForm(false)}
                >
                  取消
                </Button>
                <Button
                  onClick={handleSubmitTicket}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  提交工单
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Tickets List */}
        {tickets.length > 0 ? (
          <div className="space-y-3">
            {tickets.map((ticket) => (
              <div
                key={ticket.id}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    ticket.status === 'resolved' ? 'bg-green-100' : 'bg-yellow-100'
                  }`}>
                    {ticket.status === 'resolved' ? (
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    ) : (
                      <Clock className="w-5 h-5 text-yellow-600" />
                    )}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{ticket.subject}</p>
                    <p className="text-sm text-gray-500">#{ticket.id} · {ticket.date}</p>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  ticket.status === 'resolved'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {ticket.status === 'resolved' ? '已解决' : '处理中'}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 text-gray-500">
            <HeadphonesIcon className="w-12 h-12 mx-auto mb-4 text-gray-300" />
            <p>暂无工单记录</p>
          </div>
        )}
      </div>

      {/* Contact Business */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold mb-2">需要企业级服务？</h2>
            <p className="text-blue-100">
              联系我们获取定制化解决方案、SLA 保障和专属客服
            </p>
          </div>
          <Button className="bg-white text-blue-600 hover:bg-gray-100">
            联系商务
          </Button>
        </div>
      </div>
    </div>
  );
}
