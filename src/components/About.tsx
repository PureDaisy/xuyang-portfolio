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

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image / Avatar Placeholder */}
          <div className="relative">
            <div className="w-64 h-64 mx-auto rounded-2xl bg-gradient-to-br from-primary to-secondary p-1">
              <div className="w-full h-full rounded-2xl bg-slate-800 flex items-center justify-center">
                <span className="text-6xl">🤖</span>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-xl" />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary/20 rounded-full blur-xl" />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                <span>🎓</span> 教育背景
              </h3>
              <p className="text-slate-400">
                计算机专业硕士在读，研究方向聚焦于大语言模型应用与智能系统开发。
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                <span>💡</span> 技术专长
              </h3>
              <p className="text-slate-400">
                熟悉 AI Agent 开发、RTC 实时语音交互、全栈 Web 开发、移动端开发。
                对大模型应用落地有浓厚兴趣。
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                <span>🚀</span> 项目经验
              </h3>
              <p className="text-slate-400">
                参与过多个 AI 教育产品的开发，在实习中积累了丰富的实际项目经验，
                涉及 Web、移动端、嵌入式等多个技术领域。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
