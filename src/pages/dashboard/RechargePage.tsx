import { useState } from 'react';
import { Wallet, CreditCard, Zap, Check, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';
import { toast } from 'sonner';

const topUpOptions = [
  { amount: 50, bonus: 0, get: 50, popular: false },
  { amount: 100, bonus: 5, get: 105, popular: false },
  { amount: 200, bonus: 15, get: 215, popular: true },
  { amount: 500, bonus: 50, get: 550, popular: false },
  { amount: 1000, bonus: 150, get: 1150, popular: false }
];

const rechargeHistory = [
  { date: '2024-03-05', amount: 50, payment: '微信支付', status: 'success' },
  { date: '2024-02-20', amount: 100, payment: '支付宝', status: 'success' },
  { date: '2024-02-01', amount: 200, payment: '微信支付', status: 'success' }
];

export default function RechargePage() {
  const { user, updateBalance } = useAuth();
  const [selectedAmount, setSelectedAmount] = useState(200);
  const [customAmount, setCustomAmount] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRecharge = async () => {
    const amount = customAmount ? parseInt(customAmount) : selectedAmount;
    if (!amount || amount <= 0) {
      toast.error('请选择或输入有效金额');
      return;
    }

    setLoading(true);
    // Simulate payment
    await new Promise(resolve => setTimeout(resolve, 1500));
    updateBalance(amount);
    toast.success(`成功充值 $${amount}`);
    setLoading(false);
  };

  const getBonus = (amount: number) => {
    const option = topUpOptions.find(o => o.amount === amount);
    return option?.bonus || 0;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">充值中心</h1>
        <p className="text-gray-500">为您的账户充值灵活余额</p>
      </div>

      {/* Current Balance */}
      <div className="bg-gradient-to-r from-green-500 to-teal-600 rounded-xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-green-100 mb-1">当前余额 (USD)</p>
            <h2 className="text-4xl font-bold flex items-center">
              <Wallet className="w-8 h-8 mr-2" />
              ${user?.balance?.toFixed(2) || '0.00'}
            </h2>
          </div>
          <div className="text-right">
            <p className="text-green-100">余额永久有效</p>
            <p className="text-sm text-green-200">支持所有模型</p>
          </div>
        </div>
      </div>

      {/* Top-up Options */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">选择充值金额</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
          {topUpOptions.map((option, index) => (
            <div
              key={index}
              onClick={() => {
                setSelectedAmount(option.amount);
                setCustomAmount('');
              }}
              className={`relative bg-gray-50 border rounded-xl p-4 cursor-pointer transition-all ${
                selectedAmount === option.amount
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-blue-300'
              }`}
            >
              {option.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-xs px-2 py-0.5 rounded-full">
                  最热
                </div>
              )}
              <p className="text-2xl font-bold text-gray-900 text-center">
                ¥{option.amount}
              </p>
              <p className="text-sm text-gray-500 text-center">支付</p>
              {option.bonus > 0 && (
                <p className="text-center text-green-600 text-sm font-medium mt-1">
                  赠送 ${option.bonus}
                </p>
              )}
              <p className="text-center text-lg font-semibold text-green-600 mt-2">
                ${option.get}
              </p>
              <p className="text-xs text-gray-500 text-center">获得</p>
            </div>
          ))}
        </div>

        {/* Custom Amount */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            自定义金额
          </label>
          <div className="flex items-center space-x-4">
            <div className="relative flex-1">
              <input
                type="number"
                value={customAmount}
                onChange={(e) => {
                  setCustomAmount(e.target.value);
                  setSelectedAmount(0);
                }}
                placeholder="输入充值金额"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
                ¥
              </span>
            </div>
            {customAmount && parseInt(customAmount) > 0 && (
              <div className="px-4 py-3 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-sm text-green-700">
                  获得 <span className="font-bold">${parseInt(customAmount)}</span>
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Payment Method */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            支付方式
          </label>
          <div className="flex space-x-4">
            <button className="flex-1 py-3 px-4 border-2 border-blue-500 bg-blue-50 rounded-lg flex items-center justify-center">
              <img src="https://www.easyclaw.work/icons/wechat.svg" alt="微信支付" className="h-6" />
              <span className="ml-2 font-medium">微信支付</span>
            </button>
            <button className="flex-1 py-3 px-4 border border-gray-300 rounded-lg flex items-center justify-center hover:border-blue-300">
              <img src="https://www.easyclaw.work/icons/alipay.svg" alt="支付宝" className="h-6" />
              <span className="ml-2 font-medium text-gray-600">支付宝</span>
            </button>
            <button className="flex-1 py-3 px-4 border border-gray-300 rounded-lg flex items-center justify-center hover:border-blue-300">
              <CreditCard className="w-5 h-5 text-gray-600 mr-2" />
              <span className="font-medium text-gray-600">银行卡</span>
            </button>
          </div>
        </div>

        {/* Recharge Button */}
        <Button
          onClick={handleRecharge}
          disabled={loading || (!selectedAmount && !customAmount)}
          className="w-full bg-green-600 hover:bg-green-700 py-3 text-lg"
        >
          {loading ? (
            '处理中...'
          ) : (
            <>
              <Zap className="w-5 h-5 mr-2" />
              立即充值 {customAmount || selectedAmount ? `¥${customAmount || selectedAmount}` : ''}
            </>
          )}
        </Button>

        {/* Info */}
        <div className="mt-4 flex items-start space-x-2 text-sm text-gray-500">
          <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
          <p>
            充值成功后，余额将即时到账。充值金额永久有效，支持所有 AI 模型。
            API 调用时优先消耗订阅余额，不足时自动切换消耗灵活余额。
          </p>
        </div>
      </div>

      {/* Recharge History */}
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">充值记录</h2>
        </div>
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="text-left px-6 py-3 text-sm font-medium text-gray-500">日期</th>
              <th className="text-left px-6 py-3 text-sm font-medium text-gray-500">支付方式</th>
              <th className="text-right px-6 py-3 text-sm font-medium text-gray-500">充值金额</th>
              <th className="text-right px-6 py-3 text-sm font-medium text-gray-500">状态</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {rechargeHistory.map((record, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm text-gray-900">{record.date}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{record.payment}</td>
                <td className="px-6 py-4 text-sm text-gray-900 text-right">¥{record.amount}</td>
                <td className="px-6 py-4 text-right">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    <Check className="w-3 h-3 mr-1" />
                    成功
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
