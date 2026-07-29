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
        {/* Avatar */}
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary p-1 shadow-2xl shadow-primary/20">
            <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center overflow-hidden">
              <span className="text-5xl">🧑‍💻</span>
            </div>
          </div>
        </div>

        {/* Greeting */}
        <p className="text-accent font-mono text-lg mb-4 animate-fade-in">
          你好，欢迎来到我的世界
        </p>

        {/* Name */}
        <h1 className="text-5xl sm:text-7xl font-extrabold mb-6">
          <span className="gradient-text">徐洋</span>
        </h1>

        {/* Title */}
        <h2 className="text-xl sm:text-2xl font-medium text-slate-300 mb-8">
          <span className="text-slate-400">硕士在读</span>
          <span className="mx-3 text-slate-600">·</span>
          <span>AI 应用开发者</span>
          <span className="mx-3 text-slate-600">·</span>
          <span>全栈工程师</span>
        </h2>

        {/* Description */}
        <p className="text-base text-slate-400 max-w-xl mx-auto mb-10 leading-relaxed">
          喜欢把有趣的想法变成可用的产品。<br />
          目前折腾 AI + 教育方向，主要用语音对话和大模型。
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => scrollToSection('projects')}
            className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 transform hover:-translate-y-1"
          >
            看看我的项目
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-3 border border-slate-600 text-slate-300 font-semibold rounded-lg hover:bg-slate-800 hover:border-slate-500 transition-all duration-300"
          >
            聊聊
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
