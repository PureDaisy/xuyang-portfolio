export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-900/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            关于我 <span className="gradient-text">About Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          {/* Left: Avatar & Quick Info */}
          <div className="md:col-span-2 text-center md:text-left">
            <div className="relative inline-block">
              <div className="w-48 h-48 mx-auto md:mx-0 rounded-2xl bg-gradient-to-br from-primary to-secondary p-1 shadow-xl shadow-primary/10">
                <div className="w-full h-full rounded-2xl bg-slate-800 flex items-center justify-center">
                  <span className="text-7xl">👨‍💻</span>
                </div>
              </div>
              <div className="absolute -bottom-3 -right-3 px-4 py-2 bg-slate-800 rounded-xl text-sm text-slate-300 border border-slate-700 shadow-lg">
                在读硕士
              </div>
            </div>

            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <span className="text-xl">📍</span>
                <span className="text-slate-400">中国</span>
              </div>
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <span className="text-xl">🎓</span>
                <span className="text-slate-400">计算机相关专业</span>
              </div>
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <span className="text-xl">☕</span>
                <span className="text-slate-400">喜欢写代码和咖啡</span>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="md:col-span-3 space-y-6">
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <span>📖</span> 我是谁
              </h3>
              <p className="text-slate-400 leading-relaxed">
                一个喜欢捣鼓技术的工程师。目前在读硕士，研究方向是 AI 应用。
                比起纯理论研究，我更享受把想法变成实际可用的产品。
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <span>💻</span> 技术栈
              </h3>
              <p className="text-slate-400 leading-relaxed">
                主力 Python / Java / TypeScript，写过后端、做过移动端、也折腾过前端。
                对 AI 应用（尤其是语音对话方向）特别感兴趣，有实际项目经验。
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <span>🎯</span> 在做什么
              </h3>
              <p className="text-slate-400 leading-relaxed">
                主要在做 AI + 教育方向的探索，包括实时语音对话应用、大模型辅助教学等。
                有过实习经验，参与过真实产品的开发。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
