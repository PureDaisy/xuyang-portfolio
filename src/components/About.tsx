export default function About() {
  return (
    <section id="about" className="py-24" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-gray-800">
            关于我
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          {/* Left: Avatar & Quick Info */}
          <div className="md:col-span-2 text-center md:text-left">
            <div className="relative inline-block">
              <div className="w-44 h-44 mx-auto md:mx-0 rounded-2xl bg-gradient-to-br from-blue-400 to-purple-500 p-1 shadow-lg shadow-blue-100">
                <div className="w-full h-full rounded-2xl bg-white flex items-center justify-center">
                  <span className="text-6xl">👨‍💻</span>
                </div>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <span className="text-2xl">🎓</span>
                <div>
                  <p className="text-sm text-gray-500">教育背景</p>
                  <p className="text-gray-700 font-medium">首都师范大学 本硕</p>
                </div>
              </div>
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <span className="text-2xl">📅</span>
                <div>
                  <p className="text-sm text-gray-500">毕业年份</p>
                  <p className="text-gray-700 font-medium">2027年</p>
                </div>
              </div>
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <span className="text-2xl">📍</span>
                <div>
                  <p className="text-sm text-gray-500">所在地</p>
                  <p className="text-gray-700 font-medium">北京</p>
                </div>
              </div>
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <span className="text-2xl">☕</span>
                <div>
                  <p className="text-sm text-gray-500">爱好</p>
                  <p className="text-gray-700 font-medium">写代码、喝咖啡</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="md:col-span-3 space-y-6">
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <span>👋</span> 我是谁
              </h3>
              <p className="text-gray-600 leading-relaxed">
                一个喜欢捣鼓技术的工程师。首都师范大学计算机专业硕士，2027届毕业生。
                比起纯理论研究，我更享受把想法变成实际可用的产品。
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <span>💻</span> 技术栈
              </h3>
              <p className="text-gray-600 leading-relaxed">
                主力 Python / Java / TypeScript，写过后端、做过移动端、也折腾过前端。
                对 AI 应用（尤其是语音对话方向）特别感兴趣，有实际项目经验。
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <span>🎯</span> 在做什么
              </h3>
              <p className="text-gray-600 leading-relaxed">
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
