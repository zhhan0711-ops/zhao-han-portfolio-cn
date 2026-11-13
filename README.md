# 赵涵的个人作品集网站

面向软件工程、后端、全栈与 AI Application / LLM Agent 实习投递的中文多页面作品集。

## 信息架构

| 页面 | 作用 |
| --- | --- |
| 首页 | 90 秒内传达定位、求职方向、精选项目与工程习惯 |
| About | 个人背景、价值观、求职方向与教育经历 |
| Projects | 四个项目入口与证据边界说明 |
| Skills | 按后端、全栈、数据、AI、测试组织技能 |
| Resume | 招聘者可快速浏览的在线简历 |
| Contact | 邮件、简历和项目入口 |
| 项目案例页 | 背景、职责、技术栈、功能、架构、难点、媒体与链接 |

项目案例位于 dist/projects/。ChainTrust 作为重点个人项目排在首位，其后为 StyleSphere、ReqTest Agent 和 FoodShare 团队项目。

## 视觉方向

- 深色科技感背景，蓝色、青色和绿色作为功能强调色。
- 采用清晰网格、工程架构图式组件和低密度动效。
- 中文正文保留 Backend、Full-stack、LLM Agent 等招聘关键词。
- 响应式断点覆盖桌面、平板和移动端。
- 支持 prefers-reduced-motion，并提供跳到主要内容的无障碍链接。

## 本地运行

该网站是无构建依赖的静态站点。

### Python

~~~powershell
cd dist
python -m http.server 4173
~~~

访问 http://127.0.0.1:4173。

### Node.js

~~~powershell
npx serve dist
~~~

不要直接双击 HTML 作为最终验证方式；使用本地 HTTP 服务可以更接近真实部署环境。

## 内容替换指南

### 替换项目截图

1. 把图片放入 dist/assets/images/。
2. 建议使用 WebP 或压缩 PNG，宽度 1440px 左右。
3. 在对应项目页找到现有 img 标签或 screenshot-grid 区块。
4. 替换 src 和准确的 alt 文本。

当前已收录：

- ChainTrust：产品首页、风险简报、发现详情、合约画像、变更审查与登记页。
- FoodShare：菜谱详情、AI Chef。
- ReqTest：产品首页、评估仪表盘。

后续如有合适素材，可优先补充 StyleSphere 的结账与支付状态页面；没有合适截图时不保留空白占位。

### 替换 Demo 视频

推荐把视频上传到 YouTube、Vimeo 或 Loom，再在对应项目页加入嵌入代码。避免把大视频直接提交到 Git。

### 替换 GitHub 与在线 Demo 链接

在 dist/projects/*.html 中搜索“GitHub 待补”和“在线 Demo 待补”。删除 btn-disabled 和 aria-disabled，将 href 改成真实链接。

### 替换 PDF 简历

1. 导出一份适合公开分享的 PDF，删除不希望公开的电话、住址等信息。
2. 保存为 dist/assets/Zhao_Han_Resume_CN.pdf。
3. 在 dist/resume.html 中把“PDF 简历待替换”按钮改为：

~~~html
<a class="btn btn-primary" href="assets/Zhao_Han_Resume_CN.pdf" download>下载 PDF 简历</a>
~~~

### 修改公共导航与页脚

编辑 dist/assets/js/site.js。每个页面通过 data-root 自动处理不同目录层级。

## 部署到 Vercel

1. 把仓库导入 Vercel。
2. Framework Preset 选择 Other。
3. Build Command 留空。
4. Output Directory 设置为 dist。
5. 部署后检查所有项目详情页、移动端导航和静态图片。

## 部署到 GitHub Pages

项目包含 .github/workflows/deploy-pages.yml。

1. 把代码推送到 GitHub。
2. 打开仓库 Settings → Pages。
3. Source 选择 GitHub Actions。
4. 推送到 main 后，工作流会把 dist/ 发布到 Pages。

如果仓库名为 username.github.io，地址是 https://username.github.io/。普通仓库通常是 https://username.github.io/repository-name/。当前页面使用相对路径，可兼容普通项目路径。

## 隐私与安全

- 不提交 .env、真实密钥、数据库连接串、AWS 账号信息或证书私钥。
- 不从学校团队仓库复制私有源码到本作品集仓库。
- 当前作品集只引用经过筛选的图片和公开层级的项目说明。
- StyleSphere 页面明确说明支付为 SIMULATED，不声称存在真实扣款。
- ChainTrust 案例仅依据可检查的本地源码与文档描述；不会提交项目密钥、RPC URL、钱包私钥或 `.env` 文件。
- 原始简历未直接加入仓库，避免无意公开电话号码。

## 仍需补充的材料

- GitHub 公开主页 URL。
- LinkedIn URL。
- 经过隐私处理的 PDF 简历。
- StyleSphere 的真实产品截图（如可公开）。
- 每个项目 60–90 秒 Demo 视频。
- FoodShare 最终 AWS / Nginx / uWSGI / HTTPS 运行证据。
- StyleSphere 区块链模块的代码位置、合约、交易流程、测试和个人提交证据。
- ReqTest 中你的具体提交、模块、PR 或团队贡献说明。
- 可公开的团队项目仓库或经过授权的代码样例。
- ChainTrust 的公开 GitHub 仓库、Sepolia 合约地址和上线 Demo。

## 目录结构

~~~text
.
├── .github/workflows/deploy-pages.yml
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

## 技术说明

- 原生 HTML、CSS、JavaScript
- 无运行时依赖
- 无后端与表单数据存储
- 适合 Vercel、GitHub Pages、Cloudflare Pages 与 OpenAI Sites


