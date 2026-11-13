# 赵涵的软件工程作品集

面向后端开发、全栈开发与 AI Application / LLM Agent 实习投递的中文个人作品集。

## 在线访问

**[打开作品集网站](https://zhao-han-software-portfolio-cn.zhhan0711.chatgpt.site)**

网站现已公开，无需登录即可访问。

## 重点项目

### ChainTrust

独立完成的智能合约发布风险与审查工作台。使用 Next.js、FastAPI、PostgreSQL、OpenAI structured output、Solidity、Hardhat 与 ethers.js，实现源码风险信号、权限与代理分析、版本差异审查，以及 Sepolia 哈希登记流程。

- 开源仓库：[zhhan0711-ops/chaintrust](https://github.com/zhhan0711-ops/chaintrust)

### FoodShare

Django 全栈食谱社区与 AI Chef 团队项目，覆盖认证授权、内容发布、REST API、社区互动，以及 AWS EC2、Nginx、uWSGI、HTTPS 与 systemd 部署验证。

### ReqTest Agent

需求感知的软件验证工作台，把自然语言需求、生成测试、隔离执行和评估证据连接成可追溯流程。

### StyleSphere

社交时尚交易平台。个人职责集中在认证、安全、用户和支付模块，包括状态验证、幂等、事务回滚与异常处理。

## 页面结构

- 首页：个人定位与精选项目
- About：背景、教育经历和求职方向
- Projects：四个完整项目案例
- Skills：后端、全栈、AI、数据与 Web3 技能
- Resume：在线简历
- Contact：联系方式

## 技术实现

- 原生 HTML、CSS、JavaScript
- 多页面响应式布局
- 无运行时依赖
- 支持桌面端、平板和移动端
- 支持 `prefers-reduced-motion` 与键盘导航
- 适合 OpenAI Sites、Vercel、GitHub Pages 或其他静态托管平台

## 本地运行

~~~powershell
cd dist
python -m http.server 4173
~~~

打开 `http://127.0.0.1:4173`。

也可以使用 Node.js：

~~~powershell
npx serve dist
~~~

## 目录结构

~~~text
.
├── .openai/hosting.json
├── dist/
│   ├── assets/
│   ├── projects/
│   ├── index.html
│   ├── about.html
│   ├── projects.html
│   ├── skills.html
│   ├── resume.html
│   └── contact.html
├── .gitignore
└── README.md
~~~

## 隐私与安全

- 不提交 `.env`、API 密钥、RPC URL、钱包私钥、数据库连接串或云平台凭证。
- 不复制学校团队仓库中的私有源码。
- 部署终端截图已移除用户名、主机名与 IP 地址。
- 项目案例明确区分个人职责与团队成果。

## 当前待补充内容

- LinkedIn 公开主页
- StyleSphere 可公开的真实界面截图
- ChainTrust Sepolia 合约地址与在线 Demo
- 经授权后可公开的团队项目代码或提交证据


