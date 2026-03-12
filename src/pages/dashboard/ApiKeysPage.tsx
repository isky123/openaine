import { useState } from 'react';
import { Plus, Copy, Trash2, Eye, EyeOff, Key, Check, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

// Mock API keys data
const initialKeys = [
  {
    id: '1',
    name: '默认密钥',
    key: 'sk-openaine-demo-xxxxxxxxxxxxx',
    createdAt: '2024-01-15',
    lastUsed: '2分钟前',
    usage: 12500,
    status: 'active'
  },
  {
    id: '2',
    name: '开发环境',
    key: 'sk-openaine-dev-xxxxxxxxxxxxx',
    createdAt: '2024-02-01',
    lastUsed: '3天前',
    usage: 5200,
    status: 'active'
  },
  {
    id: '3',
    name: '测试密钥',
    key: 'sk-openaine-test-xxxxxxxxxxxxx',
    createdAt: '2024-02-10',
    lastUsed: '从未',
    usage: 0,
    status: 'inactive'
  }
];

export default function ApiKeysPage() {
  const [keys, setKeys] = useState(initialKeys);
  const [showKey, setShowKey] = useState<string | null>(null);
  const [newKeyName, setNewKeyName] = useState('');
  const [showCreateModal, setShowCreateModal] = useState(false);

  const copyToClipboard = (key: string) => {
    navigator.clipboard.writeText(key);
    toast.success('API 密钥已复制到剪贴板');
  };

  const deleteKey = (id: string) => {
    setKeys(keys.filter(k => k.id !== id));
    toast.success('API 密钥已删除');
  };

  const createNewKey = () => {
    if (!newKeyName.trim()) return;

    const newKey = {
      id: Date.now().toString(),
      name: newKeyName,
      key: `sk-openaine-${Math.random().toString(36).substring(2, 15)}`,
      createdAt: new Date().toISOString().split('T')[0],
      lastUsed: '从未',
      usage: 0,
      status: 'active' as const
    };

    setKeys([...keys, newKey]);
    setNewKeyName('');
    setShowCreateModal(false);
    toast.success('新的 API 密钥已创建');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">API 密钥管理</h1>
          <p className="text-gray-500">管理您的 API 访问密钥</p>
        </div>
        <Button onClick={() => setShowCreateModal(true)} className="bg-blue-600 hover:bg-blue-700">
          <Plus className="w-4 h-4 mr-2" />
          创建新密钥
        </Button>
      </div>

      {/* Warning */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex items-start space-x-3">
        <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5" />
        <div>
          <p className="font-medium text-yellow-800">安全提醒</p>
          <p className="text-sm text-yellow-700">
            请妥善保管您的 API 密钥，不要在客户端代码、公共仓库或任何不安全的地方暴露您的密钥。
          </p>
        </div>
      </div>

      {/* Keys List */}
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="text-left px-6 py-4 text-sm font-medium text-gray-500">名称</th>
              <th className="text-left px-6 py-4 text-sm font-medium text-gray-500">密钥</th>
              <th className="text-left px-6 py-4 text-sm font-medium text-gray-500">创建时间</th>
              <th className="text-left px-6 py-4 text-sm font-medium text-gray-500">最后使用</th>
              <th className="text-left px-6 py-4 text-sm font-medium text-gray-500">使用量</th>
              <th className="text-left px-6 py-4 text-sm font-medium text-gray-500">状态</th>
              <th className="text-right px-6 py-4 text-sm font-medium text-gray-500">操作</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {keys.map((apiKey) => (
              <tr key={apiKey.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-2">
                    <Key className="w-4 h-4 text-gray-400" />
                    <span className="font-medium text-gray-900">{apiKey.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-2">
                    <code className="text-sm text-gray-600 font-mono">
                      {showKey === apiKey.id ? apiKey.key : '•'.repeat(24)}
                    </code>
                    <button
                      onClick={() => setShowKey(showKey === apiKey.id ? null : apiKey.id)}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      {showKey === apiKey.id ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                    <button
                      onClick={() => copyToClipboard(apiKey.key)}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      <Copy className="w-4 h-4" />
                    </button>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">{apiKey.createdAt}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{apiKey.lastUsed}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{apiKey.usage.toLocaleString()} tokens</td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    apiKey.status === 'active'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {apiKey.status === 'active' ? '活跃' : '未使用'}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button
                    onClick={() => deleteKey(apiKey.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Create Key Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md">
            <h3 className="text-lg font-semibold mb-4">创建新的 API 密钥</h3>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                密钥名称
              </label>
              <input
                type="text"
                value={newKeyName}
                onChange={(e) => setNewKeyName(e.target.value)}
                placeholder="例如：开发环境、生产环境"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <p className="text-sm text-gray-500 mb-6">
              创建后密钥将立即显示，请妥善保存。密钥只会显示一次。
            </p>
            <div className="flex justify-end space-x-3">
              <Button
                variant="outline"
                onClick={() => setShowCreateModal(false)}
              >
                取消
              </Button>
              <Button
                onClick={createNewKey}
                className="bg-blue-600 hover:bg-blue-700"
              >
                创建密钥
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
