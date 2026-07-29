export default function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full filter blur-[128px] animate-pulse-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary rounded-full filter blur-[128px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent rounded-full filter blur-[100px] animate-pulse-slow" style={{ animationDelay: '4s' }} />
        </div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        {/* Greeting */}
        <p className="text-accent font-mono text-lg mb-4 animate-fade-in">
          你好，我是
        </p>

        {/* Name */}
        <h1 className="text-5xl sm:text-7xl font-extrabold mb-6">
          <span className="gradient-text">徐洋</span>
        </h1>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-semibold text-slate-300 mb-8">
          AI Agent 开发工程师 · 全栈工程师 · 移动端开发
        </h2>

        {/* Description */}
        <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          硕士在读，专注于大语言模型应用、实时语音交互系统开发。
          <br />
          热衷于构建智能化的产品，在 AI + 教育领域有丰富的项目经验。
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => scrollToSection('projects')}
            className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 transform hover:-translate-y-1"
          >
            查看项目
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-3 border border-slate-600 text-slate-300 font-semibold rounded-lg hover:bg-slate-800 hover:border-slate-500 transition-all duration-300"
          >
            联系我
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
