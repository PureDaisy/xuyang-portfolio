export default function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #f5f7fa 0%, #e4eaf5 100%)' }}>
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full opacity-20 blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200 rounded-full opacity-20 blur-3xl" />
      <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-pink-400 rounded-full opacity-60" />
      <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-blue-400 rounded-full opacity-60" />
      <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-yellow-400 rounded-full opacity-60" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        {/* Avatar */}
        <div className="mb-10">
          <div className="w-36 h-36 mx-auto rounded-full bg-gradient-to-br from-blue-400 to-purple-500 p-1 shadow-xl shadow-blue-200">
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
              <span className="text-6xl">🧑‍💻</span>
            </div>
          </div>
        </div>

        {/* Greeting */}
        <p className="text-blue-500 font-medium text-lg mb-3 tracking-wide">
          你好，我是
        </p>

        {/* Name */}
        <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-gray-800">
          徐洋
        </h1>

        {/* Title */}
        <h2 className="text-lg sm:text-xl text-gray-500 mb-8 font-light">
          首都师范大学 · 计算机专业硕士 · 2027届毕业生
        </h2>

        {/* Description */}
        <p className="text-base text-gray-600 max-w-lg mx-auto mb-10 leading-relaxed">
          喜欢捣鼓技术，把有趣的想法变成可用的产品。<br />
          目前专注于 AI + 教育方向，主要折腾语音对话和大模型应用。
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => scrollToSection('projects')}
            className="px-8 py-3 bg-blue-500 text-white font-medium rounded-full hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-200 transition-all duration-300"
          >
            看看我的项目
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-3 bg-white text-blue-500 font-medium rounded-full border-2 border-blue-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300"
          >
            联系我
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-gray-400 rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
