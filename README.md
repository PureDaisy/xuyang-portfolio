# xuyang-portfolio

个人作品集网站，展示 AI Agent 开发、全栈工程、移动端开发等技能与项目经验。

## 技术栈

- React 18 + TypeScript
- TailwindCSS
- Vite

## 开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产版本
npm run preview
```

## 部署

本项目配置为部署到 GitHub Pages。推送到 main 分支后会自动部署。

或者手动构建后部署到任意静态托管服务。

## 项目结构

```
src/
├── components/     # React 组件
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   └── Contact.tsx
├── data/          # 数据文件
│   └── projects.ts
├── App.tsx
├── main.tsx
└── index.css
```
