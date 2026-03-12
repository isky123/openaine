import { Outlet, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { Menu, X, ChevronDown, User, LogOut, LayoutDashboard } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function Layout() {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
    setUserMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">O</span>
              </div>
              <span className="text-xl font-bold">OpenAine</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/docs" className="text-gray-300 hover:text-white transition-colors">
                文档中心
              </Link>
              <Link to="/pricing" className="text-gray-300 hover:text-white transition-colors">
                定价
              </Link>

              {isAuthenticated ? (
                <div className="relative">
                  <button
                    onClick={() => setUserMenuOpen(!userMenuOpen)}
                    className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                  >
                    <User className="w-5 h-5" />
                    <span>{user?.name}</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>

                  {userMenuOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-gray-900 border border-gray-800 rounded-lg shadow-xl py-2">
                      <Link
                        to="/dashboard"
                        className="flex items-center space-x-2 px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800"
                        onClick={() => setUserMenuOpen(false)}
                      >
                        <LayoutDashboard className="w-4 h-4" />
                        <span>控制台</span>
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="flex items-center space-x-2 w-full px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800"
                      >
                        <LogOut className="w-4 h-4" />
                        <span>退出登录</span>
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex items-center space-x-4">
                  <Link to="/auth/login">
                    <Button variant="ghost" className="text-gray-300">
                      登录
                    </Button>
                  </Link>
                  <Link to="/auth/register">
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      立即体验
                    </Button>
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-900 border-b border-gray-800">
            <div className="px-4 py-4 space-y-3">
              <Link
                to="/docs"
                className="block text-gray-300 hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                文档中心
              </Link>
              <Link
                to="/pricing"
                className="block text-gray-300 hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                定价
              </Link>
              {isAuthenticated ? (
                <>
                  <Link
                    to="/dashboard"
                    className="block text-gray-300 hover:text-white"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    控制台
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block text-gray-300 hover:text-white"
                  >
                    退出登录
                  </button>
                </>
              ) : (
                <div className="space-y-2 pt-2">
                  <Link to="/auth/login" onClick={() => setMobileMenuOpen(false)}>
                    <Button variant="ghost" className="w-full">登录</Button>
                  </Link>
                  <Link to="/auth/register" onClick={() => setMobileMenuOpen(false)}>
                    <Button className="w-full bg-blue-600">立即体验</Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">O</span>
                </div>
                <span className="text-xl font-bold">OpenAine</span>
              </div>
              <p className="text-gray-400 text-sm">
               重构您的 AI 编程体验，将速度、稳定性与官方服务体验整合在一个平台。
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">产品服务</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link to="/pricing" className="hover:text-white">定价方案</Link></li>
                <li><Link to="/docs" className="hover:text-white">文档中心</Link></li>
                <li><a href="#" className="hover:text-white">API 参考</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">关于我们</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white">公司介绍</a></li>
                <li><a href="#" className="hover:text-white">博客文章</a></li>
                <li><a href="#" className="hover:text-white">联系我们</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">支持</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white">帮助中心</a></li>
                <li><a href="#" className="hover:text-white">提交工单</a></li>
                <li><a href="#" className="hover:text-white">商务合作</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
            © 2024 OpenAine. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
