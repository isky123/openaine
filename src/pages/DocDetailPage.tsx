import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Clock, BookOpen } from 'lucide-react';

// Mock documentation content
const docsContent: Record<string, { title: string; content: string; prev?: { title: string; path: string }; next?: { title: string; path: string } }> = {
  'getting-started/nodejs': {
    title: 'Node.js 环境安装教程',
    content: `
# Node.js 环境安装教程

本教程将帮助您在 Windows、macOS 或 Linux 系统上安装 Node.js LTS 版本。

## 安装步骤

### Windows 系统

1. 访问 Node.js 官网 (nodejs.org)
2. 下载 Windows Installer (.msi)
3. 运行安装程序，按照提示完成安装
4. 打开命令提示符，验证安装：

\`\`\`bash
node --version
npm --version
\`\`\`

### macOS 系统

使用 Homebrew 安装：

\`\`\`bash
brew install node
\`\`\`

或者访问 nodejs.org 下载 macOS Installer。

### Linux 系统

使用包管理器安装：

\`\`\`bash
# Ubuntu/Debian
sudo apt update
sudo apt install nodejs npm

# CentOS/RHEL
sudo yum install nodejs npm
\`\`\`

## 验证安装

安装完成后，在终端中运行以下命令验证：

\`\`\`bash
node --version
npm --version
\`\`\`

如果显示版本号，说明安装成功。
    `,
    prev: undefined,
    next: { title: 'Claude Code 配置教程', path: '/docs/getting-started/claude-code' }
  },
  'getting-started/claude-code': {
    title: 'Claude Code 配置教程',
    content: `
# Claude Code 配置教程

本教程将指导您安装并配置 Claude Code CLI 工具，连接 OpenAine 中转服务。

## 前置要求

- Node.js 18.0 或更高版本
- npm 或 yarn 包管理器

## 安装步骤

### 1. 全局安装 Claude Code

\`\`\`bash
npm install -g @anthropic-ai/claude-code
\`\`\`

### 2. 配置 OpenAine API

创建配置文件 \`~/.claude/settings.json\`：

\`\`\`json
{
  "apiBaseUrl": "https://api.openaine.com/v1",
  "apiKey": "your-api-key"
}
\`\`\`

### 3. 验证配置

\`\`\`bash
claude --version
\`\`\`

## 开始使用

配置完成后，您可以开始使用 Claude Code：

\`\`\`bash
claude
\`\`\`
    `,
    prev: { title: 'Node.js 环境安装教程', path: '/docs/getting-started/nodejs' },
    next: { title: 'Gemini CLI 配置教程', path: '/docs/getting-started/gemini-cli' }
  },
  'getting-started/gemini-cli': {
    title: 'Gemini CLI 配置教程',
    content: `
# Gemini CLI 配置教程

本教程将指导您安装并配置 Gemini CLI 工具，连接 OpenAine 中转服务使用 Gemini 模型。

## 安装步骤

### 1. 安装 Gemini CLI

\`\`\`bash
npm install -g @google/gemini-cli
\`\`\`

### 2. 配置 API

创建配置文件 \`~/.gemini/config.json\`：

\`\`\`json
{
  "apiEndpoint": "https://api.openaine.com/gemini",
  "apiKey": "your-openaine-key"
}
\`\`\`

### 3. 验证安装

\`\`\`bash
gemini --version
\`\`\`
    `,
    prev: { title: 'Claude Code 配置教程', path: '/docs/getting-started/claude-code' },
    next: { title: 'Codex 配置教程', path: '/docs/getting-started/codex' }
  },
  'getting-started/codex': {
    title: 'Codex (OpenAI) 配置教程',
    content: `
# Codex 配置教程

本教程将指导您配置 Codex CLI 工具，通过配置文件连接 OpenAine 中转服务。

## 安装 Codex

\`\`\`bash
npm install -g @openai/codex
\`\`\`

## 配置 OpenAine

创建或编辑配置文件：

\`\`\`json
{
  "api_base": "https://api.openaine.com/v1",
  "api_key": "your-api-key",
  "model": "codex-latest"
}
\`\`\`

## 验证配置

\`\`\`bash
codex --version
\`\`\`
    `,
    prev: { title: 'Gemini CLI 配置教程', path: '/docs/getting-started/gemini-cli' },
    next: { title: 'OpenClaw 部署教程', path: '/docs/advanced/openclaw' }
  },
  'advanced/openclaw': {
    title: 'OpenClaw 部署教程',
    content: `
# OpenClaw 部署教程

OpenClaw 是一个开源的 AI 智能体网关，可以通过 Telegram 使用。

## 部署步骤

### 1. 克隆项目

\`\`\`bash
git clone https://github.com/openaine/openclaw.git
cd openclaw
\`\`\`

### 2. 安装依赖

\`\`\`bash
npm install
\`\`\`

### 3. 配置环境变量

\`\`\`bash
cp .env.example .env
\`\`\`

编辑 .env 文件：

\`\`\`env
TELEGRAM_BOT_TOKEN=your-telegram-token
OPENAI_API_KEY=your-openaine-key
OPENAI_API_BASE=https://api.openaine.com/v1
\`\`\`

### 4. 启动服务

\`\`\`bash
npm start
\`\`\`
    `,
    prev: { title: 'Codex 配置教程', path: '/docs/getting-started/codex' },
    next: { title: 'OpenCode 配置教程', path: '/docs/advanced/opencode' }
  },
  'advanced/opencode': {
    title: 'OpenCode 配置教程',
    content: `
# OpenCode 配置教程

OpenCode 是另一个强大的 AI 编程助手，可以接入 OpenAine 服务。

## 配置步骤

### 1. 安装 OpenCode

\`\`\`bash
npm install -g opencode-cli
\`\`\`

### 2. 配置 OpenAine

在项目根目录创建 \`opencode.config.json\`：

\`\`\`json
{
  "provider": "openaine",
  "apiKey": "your-api-key",
  "baseUrl": "https://api.openaine.com/v1"
}
\`\`\`

### 3. 开始使用

\`\`\`bash
opencode
\`\`\`
    `,
    prev: { title: 'OpenClaw 部署教程', path: '/docs/advanced/openclaw' },
    next: { title: 'Claude Code 13个技巧', path: '/docs/blog/boris-13-tips' }
  }
};

export default function DocDetailPage() {
  const { category, slug } = useParams();
  const path = `${category}/${slug}`;
  const doc = docsContent[path];

  if (!doc) {
    return (
      <div className="min-h-screen bg-gray-950 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <BookOpen className="w-16 h-16 text-gray-600 mx-auto mb-4" />
          <h1 className="text-2xl font-bold mb-4">文档未找到</h1>
          <p className="text-gray-400 mb-8">抱歉，您访问的文档不存在。</p>
          <Link to="/docs">
            <button className="bg-blue-600 px-6 py-2 rounded-lg hover:bg-blue-700">
              返回文档中心
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link to="/docs" className="inline-flex items-center text-gray-400 hover:text-white mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          返回文档中心
        </Link>

        {/* Content */}
        <article className="prose prose-invert max-w-none">
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
            <h1 className="text-3xl font-bold mb-6">{doc.title}</h1>

            <div className="flex items-center text-sm text-gray-400 mb-8">
              <Clock className="w-4 h-4 mr-2" />
              <span>预计阅读时间: 5 分钟</span>
            </div>

            <div className="prose prose-invert prose-blue max-w-none">
              {doc.content.split('\n').map((line, index) => {
                if (line.startsWith('# ')) {
                  return <h1 key={index} className="text-2xl font-bold mt-8 mb-4">{line.slice(2)}</h1>;
                }
                if (line.startsWith('## ')) {
                  return <h2 key={index} className="text-xl font-semibold mt-6 mb-3">{line.slice(3)}</h2>;
                }
                if (line.startsWith('### ')) {
                  return <h3 key={index} className="text-lg font-medium mt-4 mb-2">{line.slice(4)}</h3>;
                }
                if (line.startsWith('```')) {
                  return null;
                }
                if (line.startsWith('`') && line.endsWith('`')) {
                  return <code key={index} className="bg-gray-800 px-2 py-1 rounded text-blue-400">{line.slice(1, -1)}</code>;
                }
                if (line.trim()) {
                  return <p key={index} className="text-gray-300 mb-4">{line}</p>;
                }
                return null;
              })}
            </div>

            {/* Code blocks */}
            {doc.content.includes('```') && (
              <div className="mt-4 space-y-4">
                {doc.content.split('```').map((block, index) => {
                  if (index % 2 === 1) {
                    const lines = block.split('\n');
                    const lang = lines[0];
                    const code = lines.slice(1).join('\n');
                    return (
                      <pre key={index} className="bg-gray-950 border border-gray-700 rounded-lg p-4 overflow-x-auto">
                        <code className="text-sm text-green-400">{code}</code>
                      </pre>
                    );
                  }
                  return null;
                })}
              </div>
            )}
          </div>
        </article>

        {/* Navigation */}
        <div className="mt-8 flex justify-between">
          {doc.prev ? (
            <Link to={doc.prev.path} className="flex items-center text-gray-400 hover:text-white">
              <ArrowLeft className="w-4 h-4 mr-2" />
              <span>{doc.prev.title}</span>
            </Link>
          ) : <div></div>}

          {doc.next ? (
            <Link to={doc.next.path} className="flex items-center text-gray-400 hover:text-white">
              <span>{doc.next.title}</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          ) : <div></div>}
        </div>
      </div>
    </div>
  );
}
