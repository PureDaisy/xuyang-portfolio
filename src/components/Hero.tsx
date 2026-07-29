export default function Hero() {
  return (
    <section id="top" className="hero-section">
      <div className="page-shell hero-grid">
        <div className="hero-copy">
          <p className="hero-kicker">开发者 / 2027 届毕业生</p>
          <h1>
            你好，我是许阳。
            <span>让想法成为产品。</span>
          </h1>
          <p className="hero-summary">
            计算机专业硕士，关注语音交互、教育产品与全栈开发。
          </p>
          <div className="hero-actions">
            <a href="#projects" className="primary-link">浏览作品</a>
            <a href="#contact" className="text-link">联系我</a>
          </div>
        </div>

        <figure className="portrait-frame">
          <img
            src={`${import.meta.env.BASE_URL}profile.png`}
            alt="许阳的证件照"
            width="640"
            height="800"
            fetchPriority="high"
          />
          <figcaption>
            <span>首都师范大学</span>
            <span>北京</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
