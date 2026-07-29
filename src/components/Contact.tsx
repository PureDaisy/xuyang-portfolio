export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            联系我 <span className="gradient-text">Contact</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-4" />
          <p className="text-slate-400">
            有想法或者想合作？随时联系 👋
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* GitHub */}
          <a
            href="https://github.com/PureDaisy"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10"
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-slate-700 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white group-hover:text-primary transition-colors">GitHub</h3>
                <p className="text-slate-400">@PureDaisy</p>
              </div>
              <svg className="w-5 h-5 text-slate-500 ml-auto group-hover:text-slate-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
              </svg>
            </div>
          </a>

          {/* Email */}
          <a
            href="mailto:1571461819@qq.com"
            className="group bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10"
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-slate-700 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white group-hover:text-primary transition-colors">邮箱</h3>
                <p className="text-slate-400">1571461819@qq.com</p>
              </div>
              <svg className="w-5 h-5 text-slate-500 ml-auto group-hover:text-slate-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </div>
          </a>
        </div>

        {/* Footer */}
        <div className="mt-20 text-center">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} 徐洋 · Portfolio
          </p>
          <p className="text-slate-600 text-xs mt-2">
            Built with React + TailwindCSS
          </p>
        </div>
      </div>
    </section>
  );
}
