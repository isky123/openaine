import { useState } from 'react';
import { User, Mail, Lock, Bell, Shield, Trash2, Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';
import { toast } from 'sonner';

export default function SettingsPage() {
  const { user } = useAuth();
  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [notifications, setNotifications] = useState({
    email: true,
    usage: true,
    promotional: false
  });

  const handleSaveProfile = () => {
    toast.success('个人信息已更新');
  };

  const handleChangePassword = () => {
    if (newPassword !== confirmPassword) {
      toast.error('两次输入的密码不一致');
      return;
    }
    if (newPassword.length < 6) {
      toast.error('密码长度至少为6位');
      return;
    }
    toast.success('密码已更新');
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
  };

  const handleNotificationChange = (key: keyof typeof notifications) => {
    setNotifications({
      ...notifications,
      [key]: !notifications[key]
    });
    toast.success('通知设置已更新');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">账户设置</h1>
        <p className="text-gray-500">管理您的账户信息和偏好设置</p>
      </div>

      {/* Profile Section */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <div className="flex items-center mb-6">
          <User className="w-5 h-5 text-gray-500 mr-2" />
          <h2 className="text-lg font-semibold text-gray-900">基本信息</h2>
        </div>

        {/* Avatar */}
        <div className="flex items-center mb-6">
          <div className="relative">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white text-2xl font-bold">
                {user?.name?.charAt(0) || 'U'}
              </span>
            </div>
            <button className="absolute bottom-0 right-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white">
              <Camera className="w-4 h-4" />
            </button>
          </div>
          <div className="ml-4">
            <p className="font-medium text-gray-900">头像</p>
            <p className="text-sm text-gray-500">点击更换头像</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              用户名
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              邮箱地址
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        <div className="mt-6">
          <Button onClick={handleSaveProfile} className="bg-blue-600 hover:bg-blue-700">
            保存修改
          </Button>
        </div>
      </div>

      {/* Password Section */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <div className="flex items-center mb-6">
          <Lock className="w-5 h-5 text-gray-500 mr-2" />
          <h2 className="text-lg font-semibold text-gray-900">修改密码</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              当前密码
            </label>
            <input
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              新密码
            </label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              确认新密码
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        <div className="mt-6">
          <Button onClick={handleChangePassword} className="bg-blue-600 hover:bg-blue-700">
            修改密码
          </Button>
        </div>
      </div>

      {/* Notifications Section */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <div className="flex items-center mb-6">
          <Bell className="w-5 h-5 text-gray-500 mr-2" />
          <h2 className="text-lg font-semibold text-gray-900">通知设置</h2>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between py-3 border-b border-gray-100">
            <div>
              <p className="font-medium text-gray-900">邮件通知</p>
              <p className="text-sm text-gray-500">接收账户相关的邮件通知</p>
            </div>
            <button
              onClick={() => handleNotificationChange('email')}
              className={`w-12 h-6 rounded-full transition-colors ${
                notifications.email ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            >
              <div
                className={`w-5 h-5 bg-white rounded-full shadow transform transition-transform ${
                  notifications.email ? 'translate-x-6' : 'translate-x-0.5'
                }`}
              ></div>
            </button>
          </div>

          <div className="flex items-center justify-between py-3 border-b border-gray-100">
            <div>
              <p className="font-medium text-gray-900">使用提醒</p>
              <p className="text-sm text-gray-500">当使用量达到阈值时通知</p>
            </div>
            <button
              onClick={() => handleNotificationChange('usage')}
              className={`w-12 h-6 rounded-full transition-colors ${
                notifications.usage ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            >
              <div
                className={`w-5 h-5 bg-white rounded-full shadow transform transition-transform ${
                  notifications.usage ? 'translate-x-6' : 'translate-x-0.5'
                }`}
              ></div>
            </button>
          </div>

          <div className="flex items-center justify-between py-3">
            <div>
              <p className="font-medium text-gray-900">促销信息</p>
              <p className="text-sm text-gray-500">接收最新优惠和活动信息</p>
            </div>
            <button
              onClick={() => handleNotificationChange('promotional')}
              className={`w-12 h-6 rounded-full transition-colors ${
                notifications.promotional ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            >
              <div
                className={`w-5 h-5 bg-white rounded-full shadow transform transition-transform ${
                  notifications.promotional ? 'translate-x-6' : 'translate-x-0.5'
                }`}
              ></div>
            </button>
          </div>
        </div>
      </div>

      {/* Security Section */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <div className="flex items-center mb-6">
          <Shield className="w-5 h-5 text-gray-500 mr-2" />
          <h2 className="text-lg font-semibold text-gray-900">安全设置</h2>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between py-3 border-b border-gray-100">
            <div>
              <p className="font-medium text-gray-900">两步验证</p>
              <p className="text-sm text-gray-500">增强账户安全性</p>
            </div>
            <Button variant="outline" size="sm">
              启用
            </Button>
          </div>

          <div className="flex items-center justify-between py-3">
            <div>
              <p className="font-medium text-gray-900">登录日志</p>
              <p className="text-sm text-gray-500">查看最近的登录记录</p>
            </div>
            <Button variant="outline" size="sm">
              查看
            </Button>
          </div>
        </div>
      </div>

      {/* Danger Zone */}
      <div className="bg-white border border-red-200 rounded-xl p-6">
        <div className="flex items-center mb-6">
          <Trash2 className="w-5 h-5 text-red-500 mr-2" />
          <h2 className="text-lg font-semibold text-red-600">危险区域</h2>
        </div>

        <div className="flex items-center justify-between py-3 border-b border-red-100">
          <div>
            <p className="font-medium text-gray-900">删除账户</p>
            <p className="text-sm text-gray-500">永久删除您的账户和所有数据</p>
          </div>
          <Button variant="outline" className="border-red-300 text-red-600 hover:bg-red-50">
            删除账户
          </Button>
        </div>
      </div>
    </div>
  );
}
