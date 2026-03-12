import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import { useAuth } from '@/context/AuthContext';
import Layout from '@/components/layout/Layout';
import DashboardLayout from '@/components/layout/DashboardLayout';

// Main Website Pages
import HomePage from '@/pages/HomePage';
import PricingPage from '@/pages/PricingPage';
import DocsPage from '@/pages/DocsPage';
import DocDetailPage from '@/pages/DocDetailPage';

// Auth Pages
import LoginPage from '@/pages/auth/LoginPage';
import RegisterPage from '@/pages/auth/RegisterPage';

// Dashboard/Console Pages
import DashboardHome from '@/pages/dashboard/DashboardHome';
import ApiKeysPage from '@/pages/dashboard/ApiKeysPage';
import UsagePage from '@/pages/dashboard/UsagePage';
import BillingPage from '@/pages/dashboard/BillingPage';
import RechargePage from '@/pages/dashboard/RechargePage';
import SettingsPage from '@/pages/dashboard/SettingsPage';
import SupportPage from '@/pages/dashboard/SupportPage';

// Protected Route Component
function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/auth/login" replace />;
  }

  return <>{children}</>;
}

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-right" />
      <Routes>
        {/* Main Website Routes */}
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/docs" element={<DocsPage />} />
          <Route path="/docs/:category/:slug" element={<DocDetailPage />} />
        </Route>

        {/* Auth Routes */}
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/auth/register" element={<RegisterPage />} />

        {/* Dashboard/Console Routes - Protected */}
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }>
          <Route index element={<DashboardHome />} />
          <Route path="console" element={<DashboardHome />} />
          <Route path="api-keys" element={<ApiKeysPage />} />
          <Route path="usage" element={<UsagePage />} />
          <Route path="billing" element={<BillingPage />} />
          <Route path="recharge" element={<RechargePage />} />
          <Route path="settings" element={<SettingsPage />} />
          <Route path="support" element={<SupportPage />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
