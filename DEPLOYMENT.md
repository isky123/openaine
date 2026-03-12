---
AIGC:
    ContentProducer: Minimax Agent AI
    ContentPropagator: Minimax Agent AI
    Label: AIGC
    ProduceID: "00000000000000000000000000000000"
    PropagateID: "00000000000000000000000000000000"
    ReservedCode1: 3046022100a6aeaad9ce7808a4f1ed1deb9e00e5169da6d94092bf6da3006a5458bdda85e1022100bcea199607aea94efad06b0426e1d31a2fbb3c57de3693175167ebd15f43bb65
    ReservedCode2: 3045022033d353908bb27620535195915e90c2ce1aef5bb9227a25322664463f69b26d97022100fbc3c638fcecf3962ea2983f64f54c26198b0feba3782b0624074a6e701699bd
---

# OpenAine 项目部署文档

## 项目概述

OpenAine 是一个完整的 AI 编程助手平台，提供 Claude、GPT、Gemini 等先进 AI 模型的 API 中转服务。

## 在线访问

**已部署网站**: https://u8kodpntjgbe.space.minimaxi.com

## 功能清单

### 主网站
- [x] 首页 - 包含特性介绍、定价方案、用户评价、常见问题
- [x] 定价页面 - 套餐订阅、灵活充值
- [x] 文档中心 - 快速开始、进阶玩法、文章心得

### 认证系统
- [x] 登录页面 - 支持邮箱登录、社交登录（Google、GitHub）
- [x] 注册页面 - 支持邮箱注册、社交登录

### 控制台（需登录）
- [x] 控制台首页 - 账户概览、快速开始、最近活动
- [x] API 密钥管理 - 创建、查看、复制、删除 API 密钥
- [x] 使用统计 - 每日调用趋势、模型使用分布
- [x] 套餐订阅 - 当前套餐、切换套餐、账单历史
- [x] 充值中心 - 灵活余额充值、充值记录
- [x] 账户设置 - 个人信息、修改密码、通知设置
- [x] 技术支持 - FAQ、提交工单、联系客服

## 技术栈

- **前端框架**: React 18 + TypeScript
- **构建工具**: Vite 6
- **样式**: Tailwind CSS 3.4
- **路由**: React Router v6
- **图标**: Lucide React
- **UI组件**: Radix UI + 自定义组件
- **状态管理**: React Context

## 项目结构

```
openaine/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Layout.tsx          # 主网站布局
│   │   │   └── DashboardLayout.tsx # 控制台布局
│   │   └── ui/
│   │       ├── button.tsx          # 按钮组件
│   │       └── sonner.tsx          # Toast组件
│   ├── context/
│   │   └── AuthContext.tsx         # 认证上下文
│   ├── pages/
│   │   ├── HomePage.tsx            # 首页
│   │   ├── PricingPage.tsx         # 定价页
│   │   ├── DocsPage.tsx            # 文档中心
│   │   ├── DocDetailPage.tsx       # 文档详情
│   │   ├── auth/
│   │   │   ├── LoginPage.tsx       # 登录页
│   │   │   └── RegisterPage.tsx    # 注册页
│   │   └── dashboard/
│   │       ├── DashboardHome.tsx   # 控制台首页
│   │       ├── ApiKeysPage.tsx     # API密钥管理
│   │       ├── UsagePage.tsx       # 使用统计
│   │       ├── BillingPage.tsx     # 套餐订阅
│   │       ├── RechargePage.tsx    # 充值中心
│   │       ├── SettingsPage.tsx    # 账户设置
│   │       └── SupportPage.tsx     # 技术支持
│   ├── App.tsx                     # 应用入口
│   └── main.tsx                    # 渲染入口
├── dist/                           # 构建输出
├── package.json
├── vite.config.ts
└── tailwind.config.js
```

## 本地运行

### 安装依赖

```bash
cd openaine
pnpm install
```

### 开发模式

```bash
pnpm run dev
```

### 构建生产版本

```bash
pnpm run build
```

### 预览构建结果

```bash
pnpm run preview
```

## 登录信息

测试账号：
- 邮箱: 123@gmail.com
- 密码: 123@gmail.com

（任何邮箱和密码组合都可以用于测试登录）

## 控制台功能菜单对照

与 AIGOCode 控制台功能严格对应：

| AIGOCode | OpenAine | 状态 |
|-----------|----------|------|
| 控制台 | DashboardHome | ✅ |
| API 密钥 | ApiKeysPage | ✅ |
| 使用统计 | UsagePage | ✅ |
| 套餐订阅 | BillingPage | ✅ |
| 充值中心 | RechargePage | ✅ |
| 账户设置 | SettingsPage | ✅ |
| 技术支持 | SupportPage | ✅ |

## 注意事项

1. 本项目为前端演示项目，数据存储在浏览器 localStorage 中
2. 实际生产环境需要后端 API 支持
3. API 密钥仅为演示用途

## 更新日志

### v1.0.0 (2024-03-12)
- 初始版本发布
- 实现所有核心功能
- 部署上线

## 联系方式

如有问题，请访问技术支持页面提交工单。
