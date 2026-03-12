import { Outlet, Link, useLocation } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import {
  LayoutDashboard,
  Key,
  BarChart3,
  CreditCard,
  Wallet,
  Settings,
  HelpCircle,
  LogOut,
  Menu,
  X,
  Bell,
  ChevronDown,
  Copy,
  ExternalLink
} from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const menuItems = [
  { path: '/dashboard/console', label: '控制台', icon: LayoutDashboard },
  { path: '/dashboard/api-keys', label: 'API 密钥', icon: Key },
  { path: '/dashboard/usage', label: '使用统计', icon: BarChart3 },
  { path: '/dashboard/billing', label: '套餐订阅', icon: CreditCard },
  { path: '/dashboard/recharge', label: '充值中心', icon: Wallet },
  { path: '/dashboard/settings', label: '账户设置', icon: Settings },
  { path: '/dashboard/support', label: '技术支持', icon: HelpCircle },
];

export default function DashboardLayout() {
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const copyApiKey = () => {
    // Demo API key
    navigator.clipboard.writeText('sk-openaine-demo-xxxxxxxxxxxxx');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Header */}
      <header className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 z-40 flex items-center justify-between px-4 lg:px-6">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden text-gray-600"
          >
            <Menu className="w-6 h-6" />
          </button>

          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">O</span>
            </div>
            <span className="text-xl font-bold text-gray-900">OpenAine</span>
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          {/* API Key Display */}
          <div className="hidden md:flex items-center space-x-2 bg-gray-100 rounded-lg px-3 py-1.5">
            <span className="text-sm text-gray-600 font-mono">sk-openaine-xxxx</span>
            <button onClick={copyApiKey} className="text-gray-500 hover:text-gray-700">
              <Copy className="w-4 h-4" />
            </button>
          </div>

          {/* Notifications */}
          <button className="relative text-gray-600 hover:text-gray-900">
            <Bell className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {/* User Menu */}
          <div className="relative">
            <button
              onClick={() => setUserMenuOpen(!userMenuOpen)}
              className="flex items-center space-x-2 text-gray-700"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">
                  {user?.name?.charAt(0) || 'U'}
                </span>
              </div>
              <span className="hidden sm:inline text-sm font-medium">{user?.name}</span>
              <ChevronDown className="w-4 h-4" />
            </button>

            {userMenuOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg py-2">
                <div className="px-4 py-2 border-b border-gray-100">
                  <p className="text-sm font-medium text-gray-900">{user?.name}</p>
                  <p className="text-xs text-gray-500">{user?.email}</p>
                </div>
                <div className="py-1">
                  <Link
                    to="/dashboard/settings"
                    className="flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setUserMenuOpen(false)}
                  >
                    <Settings className="w-4 h-4" />
                    <span>账户设置</span>
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="flex items-center space-x-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>退出登录</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-16 bottom-0 w-64 bg-white border-r border-gray-200 z-30 transform transition-transform duration-200 ease-in-out ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0`}
      >
        <div className="flex flex-col h-full">
          {/* Balance Card */}
          <div className="p-4 border-b border-gray-200">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-4 text-white">
              <p className="text-xs opacity-80 mb-1">账户余额 (USD)</p>
              <p className="text-2xl font-bold">${user?.balance?.toFixed(2) || '0.00'}</p>
              <div className="mt-3 flex items-center justify-between text-xs">
                <span className="opacity-80">套餐额度</span>
                <span>${user?.subscriptionQuota || 0}/周</span>
              </div>
              <div className="mt-1 h-1.5 bg-white/20 rounded-full overflow-hidden">
                <div
                  className="h-full bg-white rounded-full"
                  style={{ width: `${((user?.usedQuota || 0) / (user?.subscriptionQuota || 1)) * 100}%` }}
                ></div>
              </div>
              <p className="mt-1 text-xs opacity-80 text-right">
                已使用 ${user?.usedQuota?.toFixed(2) || '0.00'}
              </p>
            </div>
          </div>

          {/* Navigation Menu */}
          <nav className="flex-1 overflow-y-auto py-4">
            <ul className="space-y-1 px-2">
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      onClick={() => setSidebarOpen(false)}
                      className={`flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-colors ${
                        isActive
                          ? 'bg-blue-50 text-blue-600'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="text-sm font-medium">{item.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Bottom Links */}
          <div className="p-4 border-t border-gray-200">
            <Link
              to="/docs"
              className="flex items-center space-x-2 text-sm text-gray-600 hover:text-gray-900 mb-2"
            >
              <ExternalLink className="w-4 h-4" />
              <span>开发者文档</span>
            </Link>
            <Link
              to="/pricing"
              className="flex items-center space-x-2 text-sm text-gray-600 hover:text-gray-900"
            >
              <CreditCard className="w-4 h-4" />
              <span>升级套餐</span>
            </Link>
          </div>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <main className="lg:ml-64 pt-16 min-h-screen">
        <div className="p-4 lg:p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
