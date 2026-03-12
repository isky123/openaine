import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, Code, Terminal, Cpu, FileText, ChevronRight } from 'lucide-react';

const categories = [
  {
    title: '快速开始',
    icon: BookOpen,
    description: '从零开始快速接入 OpenAine 服务',
    items: [
      { title: 'Node.js 环境安装教程', description: '在 Windows、macOS、Linux 安装 Node.js LTS，并验证 node/npm 命令可用。', path: '/docs/getting-started/nodejs' },
      { title: 'Claude Code 配置教程', description: '安装并配置 Claude Code CLI 工具，连接 OpenAine 中转服务。', path: '/docs/getting-started/claude-code' },
      { title: 'Gemini CLI 配置教程', description: '安装并配置 Gemini CLI 工具，连接 OpenAine 中转服务使用 Gemini 模型。', path: '/docs/getting-started/gemini-cli' },
      { title: 'Codex (OpenAI) 配置教程', description: '安装并配置 Codex CLI 工具，通过配置文件连接 OpenAine 中转服务。', path: '/docs/getting-started/codex' }
    ]
  },
  {
    title: '进阶玩法',
    icon: Code,
    description: '深入探索 OpenAine 的高级功能',
    items: [
      { title: 'OpenClaw 部署教程', description: '从零开始部署 OpenClaw Telegram 机器人，接入 OpenAine API 中转服务。', path: '/docs/advanced/openclaw' },
      { title: 'OpenCode 配置教程', description: '通过配置文件将 OpenCode 接入 OpenAine 中转服务，快速完成 Claude、GPT 和 Gemini 模型配置。', path: '/docs/advanced/opencode' }
    ]
  },
  {
    title: '文章心得',
    icon: FileText,
    description: '开发者实践与经验分享',
    items: [
      { title: 'Claude Code 创始人 Boris Cherny 的 13 个使用技巧完整解析', description: '深入解析 Claude Code 创始人 Boris Cherny 分享的 13 个使用技巧，涵盖并行工作、Plan mode、Hooks、Subagents 等高效工作流。', path: '/docs/blog/boris-13-tips' },
      { title: 'Claude Code 效率提升：用 Slash Commands 把高频操作一键化', description: '详细介绍 Claude Code 自定义 Slash Commands 的创建方法、使用技巧和团队共享实践。', path: '/docs/blog/slash-commands' },
      { title: 'Claude Code Hooks 完整指南：让自动化渗透到每个环节', description: '详解 Claude Code Hooks 机制，涵盖任务通知、等待提醒、代码自动格式化、自动测试等实用场景。', path: '/docs/blog/hooks' },
      { title: 'Claude Code Subagents 完整指南：打造你的专属 AI 助手团队', description: '详解 Claude Code Subagents 的创建、配置和使用，包括代码简化、验证代理等实用案例。', path: '/docs/blog/subagents' },
      { title: 'Claude Code 验证策略：让 AI 对自己的工作负责', description: '介绍 Claude Code 的多种验证方式，包括直接指令、Subagent 验证、Stop Hook 自动验证和浏览器自动化测试。', path: '/docs/blog/verification' }
    ]
  }
];

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Link to="/" className="inline-flex items-center text-gray-400 hover:text-white mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            返回首页
          </Link>
          <div className="flex items-center justify-center mb-4">
            <BookOpen className="w-10 h-10 text-blue-400 mr-3" />
            <h1 className="text-4xl md:text-5xl font-bold">OpenAine 文档中心</h1>
          </div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Build with OpenAine — 面向开发者的文档入口。从快速接入到完整的 API 参考，这里有你需要的一切。
          </p>
        </div>

        {/* Categories */}
        <div className="space-y-12">
          {categories.map((category, index) => (
            <section key={index}>
              <div className="flex items-center mb-6">
                <category.icon className="w-6 h-6 text-blue-400 mr-3" />
                <h2 className="text-2xl font-bold">{category.title}</h2>
              </div>
              <p className="text-gray-400 mb-6">{category.description}</p>

              <div className="grid md:grid-cols-2 gap-4">
                {category.items.map((item, itemIndex) => (
                  <Link
                    key={itemIndex}
                    to={item.path}
                    className="group bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-blue-500 transition-colors"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-gray-400 text-sm">{item.description}</p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-blue-400 transition-colors" />
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">需要更多帮助？</h2>
          <p className="text-blue-100 mb-6">
            加入我们的社区，或联系技术支持获取专业帮助
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/dashboard/support">
              <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-medium hover:bg-gray-100">
                联系支持
              </button>
            </Link>
            <Link to="/pricing">
              <button className="border border-white text-white px-6 py-2 rounded-lg font-medium hover:bg-white/10">
                查看定价
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
